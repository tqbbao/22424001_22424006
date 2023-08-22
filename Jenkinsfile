pipeline {
    agent any
    stages {
        stage ('Pull GitHub repository') {
            steps {
                git credentialsId: 'github', url: 'https://github.com/tqbbao/22424001_22424006.git'
            }
        }
        stage ('Build and publish Docker image') {
            steps {
                withDockerRegistry(credentialsId: 'docker', url: 'https://index.docker.io/v1/') {
                    script {
                        sh label: '', script: 'docker build -t tqbbao/bao:v1 .'
                        sh label: '', script: 'docker push tqbbao/bao:v1'
                    }
                }
            }
        }
    }
}
