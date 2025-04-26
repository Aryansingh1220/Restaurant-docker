
pipeline {
    agent {
        docker {
            image 'node:18-alpine'
        }
    }
    
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
                    // Build Docker image
                    bat 'docker build -t yumyum-restaurant:latest .'
                }
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deploying to production server...'
                // In a real environment, you would add deployment steps here
                // This could involve pushing to a cloud service like AWS, Azure, or DigitalOcean
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
