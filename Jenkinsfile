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
                withDockerRegistry(credentialsId: 'docker', url: 'https://index.docker.io/v1/') {
                    script {
                        bat 'docker build -t tqbbao/bao .'
                        bat 'docker push tqbbao/bao'
                    }
                }
            }
        }
    }
}