pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            args '-v /var/run/docker.sock:/var/run/docker.sock' // Ensure Docker socket access inside container
        }
    }
    
    environment {
        HOME = '.'
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install' // Runs npm install in Windows environment
            }
        }
        
        stage('Lint') {
            steps {
                bat 'npm run lint' // Runs linting in Windows environment
            }
        }
        
        stage('Build') {
            steps {
                bat 'npm run build' // Builds the project in Windows environment
            }
        }
        
        stage('Test') {
            steps {
                bat 'npm test' // Runs tests in Windows environment
            }
        }
        
        stage('Docker Build') {
            when {
                branch 'master'
            }
            steps {
                script {
                    // Build Docker image on the master branch
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
