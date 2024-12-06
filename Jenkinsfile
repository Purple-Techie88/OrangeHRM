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
        steps(
            sh "npm i"
            sh "npx cypress run -- browser" ${BROWSER} --spec ${SPEC}
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
