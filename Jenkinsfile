import groovy.json.JsonOutput

def COLOR_MAP = [
'SUCCESS': 'good', 
'FAILURE': 'danger',
]

def getBuildUser(){
    return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
}

pipeline{
    
    agent any

    environment{
        BUILD_USER = '',
        CYPRESS_USERNAME = credentials('CYPRESS_USERNAME'),
        CYPRESS_PASSWORD = credentials('CYPRESS_PASSWORD')
    }

stages{
    stage('Build'){
        steps{
            echo "Builidng the application"
}
    }
    stage('Testing'){
          steps{
            sh "npm i"
            // withCredentials([usernamePassword(credentialsId: '9e2913ce-5621-40ea-8f95-db5392ab5d89', usernameVariable: 'userNameHRM', passwordVariable: 'passwordHRM')])
            // sh "echo 'Connecting to server with user: ${userNameHRM} and password: ${passwordHRM}'"
            sh "npm run test -- --record --key 4f04c862-cac0-4d4e-b917-056a797a9284"  
    }
    }
    stage('Deploy'){
        steps{
        echo "Deploy the application"
    }
    }
}
post{
    always{
        // script {
        //     // BUILD_USER = getBuildUser()
        // }

        slackSend channel: 'automation-status-reports',
        color: COLOR_MAP [currentBuild.currentResult],
        message: "*${currentBuild.currentResult}:* ${env.JOB_NAME} build ${env.BUILD_NUMBER} by Your's Truly \n More information at: https://cloud.cypress.io/projects/gfcyrm/branches/origin%2Fmain/overview"

echo 'Find a way to create a report for Mac'    }
}
}
