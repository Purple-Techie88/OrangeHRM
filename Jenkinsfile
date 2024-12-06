pipeline{
    
    agent any

    parameters{
        string(name: "SPEC", defaultValue: "cypress/e2e/spec/**", description: "Enter the script path that you want to execute")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Choice of the browser you want to execute scripts")
        

    }

}
stages{
    stage('Building'){
        steps{
            echo "Builidng the application"
}
    }
    stage('Testing'){
          steps{
            sh "npm i"
            sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"        
    }
    }
    stage('Deploying'){
        steps{
        echo "Deploy the application"
    }
    }
}
post{
    always{
echo 'Find a way to create a report for Mac'    }
}
}
