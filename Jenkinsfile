pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'yarn'
                dir('ios') {
                    sh 'pod install'
                }
                sh 'fastlane ios dev'
            }
        }
    }
}
