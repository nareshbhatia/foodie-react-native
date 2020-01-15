pipeline {
    agent {
        docker {
            image 'node:12.14.1'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
