pipeline {
    agent any // Use any agent type if Docker isn't available globally

    environment {
        HOME = '.'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Lint') {
            steps {
                bat 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Docker Build') {
            when {
                branch 'master'
            }
            steps {
                script {
                    // Run docker build command here
                    bat 'docker build -t yumyum-restaurant:latest .' 
                }
            }
        }

        stage('Deploy') {
            when {
                branch 'master'
            }
            steps {
                echo 'Deploying to production server...'
                // Deployment steps
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed'
        }
        success {
            echo 'YumYum Restaurant application successfully built and tested!'
        }
        failure {
            echo 'Build or test failed, please check the logs for more information'
        }
    }
}
