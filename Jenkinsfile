pipeline{
    
    agent any

    parameters{
        string(name: "SPEC", defaultValue: "cypress/e2e/spec/**", description: "Enter the script path that you want to execute")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Choice of the browser you want to execute scripts")
        

    }
stages{
    stage('Building'){
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
