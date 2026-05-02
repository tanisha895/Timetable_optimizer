pipeline {
    agent any

    environment {
        IMAGE_NAME = "timetable-app"
        CONTAINER_NAME = "timetable-container"
        PORT = "3000"
    }

    stages {

        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'

                echo 'Building Docker image...'
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Running ESLint...'
                bat 'npx eslint .'
            }
        }

        stage('Security') {
            steps {
                echo 'Running npm audit...'
                bat 'npm audit || exit /b 0'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying using Docker...'
                bat '''
                docker stop %CONTAINER_NAME% || exit /b 0
                docker rm %CONTAINER_NAME% || exit /b 0
                docker run -d -p %PORT%:%PORT% --name %CONTAINER_NAME% %IMAGE_NAME%
                '''
            }
        }

        stage('Release') {
            steps {
                echo 'Creating Git release...'
                bat '''
                git config user.email "you@example.com"
                git config user.name "Tanisha"
                git tag v1.0
                git push origin v1.0
                '''
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Checking health endpoint...'
                bat '''
                timeout /t 5
                curl http://localhost:%PORT%/health
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check logs.'
        }
    }
}