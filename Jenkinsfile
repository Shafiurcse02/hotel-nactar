pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
             sh 'docker build --tag shafiurcse/hotel-nactar:""$BUILD_ID"" .'
            }
        }
         stage('Publish') {
            steps {
               withDockerRegistry([ credentialsId: "docker-hub", url: "" ]){
                   sh ' docker run -p 15:3000 shafiurcse/hotel-nactar:""$BUILD_ID""'
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
