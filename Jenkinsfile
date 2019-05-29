node{
        stage('checkout'){
            
                checkout([$class: 'GitSCM',
                credentialsId: '0bdd8469-a796-44d4-85ba-0c513afee18f'
                branches: [[name: env.BRANCH_NAME]],
                extensions: [[$class: 'CleanBeforeCheckout']],
                userRemoteConfigs: [[url: env.REPO_NAME]] 
                        ])
                

            }
        stage('build'){
            
                echo 'Building Docker Image'
                sh 'docker build -t esyed/mytestapp:1.0 .'
            

        }

        stage('publish'){
            
                echo 'Publishing to docker hub'
                sh 'docker push esyed/mytestapp:1.0'
            

        }
   
     
    
}