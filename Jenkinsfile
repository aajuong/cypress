pipeline {
    agent any

    tools {nodejs "node"}

    environment {
        CHROME_BIN = '/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome'
    }

    stages {
        stage('e2e Tests') {
            steps {
                sh 'npm run cypress'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}