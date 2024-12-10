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
        BUILD_USER = ''
    }

    // parameters{
    //     string(name: "SPEC", defaultValue: "cypress/e2e/spec/**", description: "Enter the script path that you want to execute")
    //     choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Choice of the browser you want to execute scripts")
        

    // }
stages{
    stage('Build'){
        steps{
            echo "Builidng the application"
}
    }
    stage('Testing'){
          steps{
            // sh "npm i"
            // sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"      
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
