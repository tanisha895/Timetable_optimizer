pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Running SonarQube analysis...'
                sh 'sonar-scanner || true'
            }
        }

        stage('Security') {
            steps {
                echo 'Checking vulnerabilities...'
                sh 'npm audit || true'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t timetable-app .'
            }
        }

        stage('Release') {
            steps {
                echo 'Releasing application...'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring application logs...'
            }
        }
    }
}