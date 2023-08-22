pipeline {
    agent any
    stages {
        stage ('Pull GitHub repository') {
            steps {
                git credentialsId: 'b5e9d137-de41-4679-95ea-d422a8892c9e', url: 'https://github.com/tqbbao/22424001_22424006.git'
            }
        }
        stage ('Build and publish Docker image') {
            steps {
                withDockerRegistry(credentialsId: '2600ed6e-15bb-4f4d-a25b-9010220b3ca9', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t tqbbao/22424001-22424006:v1 .'
                    sh 'docker push tqbbao/22424001-22424006:v1'
                }  
            }
        }
    }
}