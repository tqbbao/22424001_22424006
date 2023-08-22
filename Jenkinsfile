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
                withDockerRegistry(credentialsId: '011f9a35-5788-4fe3-9e19-4e77eac5fe0b', url: 'https://index.docker.io/v1/') {
                    bat 'docker build -t tqbbao/22424001-22424006 .'
                    bat 'docker push tqbbao/22424001-22424006:tagname'
                }   
            }
        }
    }
}