pipeline {
    agent any

    stages {
        stage('clone') {
            steps {
             git credentialsId: 'github', url: 'https://github.com/Shafiurcse02/hotel-nactar.git'
            }
        }
        stage('Build') {
            steps {
             sh 'docker build --tag shafiurcse/hotel-nactar:""$BUILD_ID"" .'
            }
        }
         stage('Publish') {
            steps {
               withDockerRegistry([ credentialsId: "docker-hub", url: "" ]){                    
               sh 'docker push shafiurcse/hotel-nactar:""$BUILD_ID""'
                }
            }
       }
        stage('Git Version') {
           steps {
              sh 'printenv'
              sh 'git version'
            echo "Deploy Done by Shafiur rahman Dhaka"
            }
       }
        stage('Docker Version') {
          steps {
               sh 'docker version'
           echo "Deploy Done by Shafiur Rahman NACTAR"
            }
        }
    }
}
