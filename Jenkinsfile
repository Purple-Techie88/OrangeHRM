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

    }

    stages {
        stage('Build') {
            steps {
                script {
                    env.BUILD_USER = getBuildUser()
                }
            }
        }

        stage('Testing') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: '5cefb4bc-0b87-460c-94d3-6bb71fe123f2', 
                        usernameVariable: 'CYPRESS_USERNAME', 
                        passwordVariable: 'CYPRESS_PASSWORD',
                    ),
                    string(credentialsId: 'CYPRESS_RECORD_KEY', variable: 'CYPRESS_RECORD_KEY')

                ]) {
                    sh 'npm install'
                    sh 'npm run test -- --record --key ${CYPRESS_RECORD_KEY}'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application'
            }
        }
    }

    post {
        always {
            slackSend (
                channel: 'automation-status-reports',
                color: COLOR_MAP[currentBuild.currentResult] ?: 'warning',
                tokenCredentialId: 'slack-token'
                message: "*${currentBuild.currentResult}:* ${env.JOB_NAME} build ${env.BUILD_NUMBER} by ${env.BUILD_USER}\nMore information at: https://cloud.cypress.io/projects/gfcyrm/branches/origin%2Fmain/overview"
            )
        }
    }
}
