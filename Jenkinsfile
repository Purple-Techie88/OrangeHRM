pipeline{
    
    agent any

    parameters{
        string(name: "SPEC", defaultValue: "cyprss/integration/**/**", description: "Enter the script path that you want to execute")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Choice of the browser you want to execute scripts")
        

    }
options{
    ansiColor('xterm')

}
stages{
    stage('Build'){
        echo "Builidng the application"
    }
    stage('Testing'){
          scripts(
        "npm run test -- --record --key 4f04c862-cac0-4d4e-b917-056a797a9284"
    )
    }
    stage('Deploying'){
        echo "Deploy the application"
    }
}
post(
    always{
        publishHTML([allowMissing: false, alwaysLinkedToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ""])
    }
)
}
