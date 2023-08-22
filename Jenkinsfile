pipeline {
    agent any
    stages {
        stage ('Pull GitHub repository') {
            steps {
                git credentialsId: 'jenkins', url: 'https://github.com/tqbbao/22424001_22424006.git'
            }
        }
        stage ('Build and publish Docker image') {
            steps {
                withDockerRegistry(credentialsId: 'repodockerhub', url: 'https://index.docker.io/v1/') {
                    script {
                        sh 'docker build -t tqbbao/bao:v1 .'
                        sh 'docker push tqbbao/bao:v1'
                    }
                }
            }
        }
    }
}
