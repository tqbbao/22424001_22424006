pipeline {
    agent any
    stages {

        stage('Login to Docker Registry') {
            steps {
                script {
                    sh "echo 'cnvb1563@@' | docker login -u tqbbao --password-stdin https://index.docker.io/v1/"
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