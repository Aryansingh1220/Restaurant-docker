
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
                sh 'npm install'
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Docker Build') {
            when {
                branch 'main'
            }
            steps {
                script {
                    // Build Docker image
                    sh 'docker build -t yumyum-restaurant:latest .'
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
