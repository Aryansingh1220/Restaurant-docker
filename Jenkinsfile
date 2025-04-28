pipeline {
    agent any

    environment {
        HOME = '.'
        DOCKER_REGISTRY = 'docker.io'
        DOCKER_IMAGE = 'yumyum-restaurant'
        DOCKER_TAG = "${env.BUILD_NUMBER}"
        DOCKER_CREDENTIALS = credentials('docker-hub-credentials')
        DEPLOY_SERVER = credentials('deploy-server')
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm ci --prefer-offline'
            }
        }

        stage('Lint') {
            steps {
                bat 'npm run lint'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
                bat 'npm run test:coverage'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Security Scan') {
            steps {
                bat 'npm audit'
            }
        }

        stage('Docker Build') {
            when {
                branch 'master'
            }
            steps {
                script {
                    bat "docker build -t ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG} ."
                    bat "docker tag ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:latest"
                }
            }
        }

        stage('Docker Push') {
            when {
                branch 'master'
            }
            steps {
                script {
                    bat "echo ${DOCKER_CREDENTIALS_PSW} | docker login ${DOCKER_REGISTRY} -u ${DOCKER_CREDENTIALS_USR} --password-stdin"
                    bat "docker push ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG}"
                    bat "docker push ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:latest"
                }
            }
        }

        stage('Deploy') {
            when {
                branch 'master'
            }
            steps {
                script {
                    // Deploy using SSH
                    bat """
                        echo "Deploying to production server..."
                        ssh ${DEPLOY_SERVER_USR}@${DEPLOY_SERVER} "cd /opt/yumyum && \
                        docker pull ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG} && \
                        docker-compose down && \
                        docker-compose up -d"
                    """
                }
            }
        }
    }

    post {
        always {
            cleanWs()
            bat "docker logout ${DOCKER_REGISTRY}"
        }
        success {
            emailext (
                subject: "Build Successful: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Build succeeded. Docker image: ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG}",
                to: 'team@example.com'
            )
        }
        failure {
            emailext (
                subject: "Build Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Build failed. Please check Jenkins logs for details.",
                to: 'team@example.com'
            )
        }
    }
}
