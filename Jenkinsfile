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
                echo "Building the application"
            }
        }

        stage('Testing') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: '6eaa3d1f-9556-4f15-947b-8dc8b8b99b97', 
                        usernameVariable: 'CYPRESS_USERNAME', 
                        passwordVariable: 'CYPRESS_PASSWORD'
                    )
                ]) {
                    sh "npm i"
                    sh "npm run test -- --record --key 4f04c862-cac0-4d4e-b917-056a797a9284"
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
