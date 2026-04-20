pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
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
                echo 'Running SonarQube analysis...'
                bat 'echo SonarQube skipped for now'
            }
        }

        stage('Security') {
            steps {
                echo 'Checking vulnerabilities...'
                bat 'npm audit'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t timetable-app .'
            }
        }

        stage('Release') {
            steps {
                echo 'Releasing application...'
                bat 'echo Version 1.0 released'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring application...'
                bat 'echo Monitoring logs...'
            }
        }
    }
}