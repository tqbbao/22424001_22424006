pipeline {
    agent any
    stages {
        stage('Front-end') {
            agent {
                docker { 
                    image 'node:8-alpine'
                    registryUrl 'https://index.docker.io/v1/'
                    label "test-env"

                }
            }
        }
        stage ('Pull GitHub repository') {
            steps {
                git credentialsId: 'jenkins', url: 'https://github.com/tqbbao/22424001_22424006.git'
            }
        }
        stage ('Build and publish Docker image') {
            steps {
                withDockerRegistry(credentialsId: 'repodocker', url: 'https://index.docker.io/v1/') {
                    script {
                        bat 'docker build -t tqbbao/bao .'
                        bat 'docker push tqbbao/bao'
                    }
                }
            }
        }
    }
}