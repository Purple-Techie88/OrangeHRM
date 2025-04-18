import groovy.json.JsonOutput

def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
]

def getBuildUser() {
    return currentBuild.rawBuild.getCause(hudson.model.Cause$UserIdCause)?.getUserId() ?: 'unknown'
}

pipeline {
    agent any

    environment {
        BUILD_USER = ''
        CYPRESS_RECORD_KEY: 'CYPRESS_RECORD_KEY',

    }

    stages {
        stage('Build') {
            steps {
                script {
                    env.BUILD_USER = getBuildUser()
                }
                echo "Building the application"
            }
        }

        stage('Testing') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'CYPRESS_CREDENTIALS', 
                        usernameVariable: 'CYPRESS_USERNAME', 
                        passwordVariable: 'CYPRESS_PASSWORD',
                    )
                ]) {
                    sh "npm i"
                    sh "npm run test -- --record --key ${CYPRESS_RECORD_KEY}"
                }
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying the application"
            }
        }
    }

    post {
        always {
            slackSend (
                channel: 'automation-status-reports',
                color: COLOR_MAP[currentBuild.currentResult] ?: 'warning',
                message: "*${currentBuild.currentResult}:* ${env.JOB_NAME} build ${env.BUILD_NUMBER} by ${env.BUILD_USER}\nMore information at: https://cloud.cypress.io/projects/gfcyrm/branches/origin%2Fmain/overview"
            )
            echo 'Find a way to create a report for Mac'
        }
    }
}
