pipeline {
    agent any

    environment {
        HOME = '.'
        DOCKER_REGISTRY = 'docker.io'
        DOCKER_IMAGE = 'yumyum-restaurant'
        DOCKER_TAG = "${env.BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci --legacy-peer-deps'
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
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        bat "echo %DOCKER_PASSWORD% | docker login ${DOCKER_REGISTRY} -u %DOCKER_USERNAME% --password-stdin"
                        bat "docker push ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG}"
                        bat "docker push ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:latest"
                    }
                }
            }
        }

        stage('Deploy') {
            when {
                branch 'master'
            }
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'deploy-server', usernameVariable: 'DEPLOY_USER', passwordVariable: 'DEPLOY_PASSWORD')]) {
                        bat """
                            echo "Deploying to production server..."
                            sshpass -p %DEPLOY_PASSWORD% ssh %DEPLOY_USER%@${DEPLOY_SERVER} "cd /opt/yumyum && \
                            docker pull ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG} && \
                            docker-compose down && \
                            docker-compose up -d"
                        """
                    }
                }
            }
        }
    }

    post {
        always {
            node {
                cleanWs()
                bat "docker logout ${DOCKER_REGISTRY}"
            }
        }
        success {
            node {
                emailext (
                    subject: "Build Successful: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                    body: "Build succeeded. Docker image: ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG}",
                    to: 'team@example.com',
                    replyTo: 'team@example.com',
                    mimeType: 'text/html'
                )
            }
        }
        failure {
            node {
                emailext (
                    subject: "Build Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                    body: "Build failed. Please check Jenkins logs for details.",
                    to: 'team@example.com',
                    replyTo: 'team@example.com',
                    mimeType: 'text/html'
                )
            }
        }
    }
}
