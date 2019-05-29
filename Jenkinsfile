node{
        stage('checkout'){
            
                checkout([$class: 'GitSCM',
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