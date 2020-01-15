pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'yarn'
                dir('ios') {
                    sh 'fastlane ios test'
                }
            }
        }
    }
}
