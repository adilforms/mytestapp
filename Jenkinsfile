node{
        stage('checkout'){
            steps{
                checkout([$class: 'GitSCM',
                branches: [[name: env.BRANCH_NAME]],
                extensions: [[$class: 'CleanBeforeCheckout']],
                userRemoteConfigs: [[url: env.REPO_NAME]] 
                        ])
                }

            }

        }
        stage('build'){
            steps{
                echo 'Building Docker Image'
                sh 'docker build -t esyed/mytestapp:1.0 .'
            }

        }
        stage('test'){
            steps{
                echo 'skiping test'
            }

        }
        stage('publish'){
            steps{
                echo 'Publishing to docker hub'
                sh 'docker push esyed/mytestapp:1.0'
            }

        }
        stage('post-action'){
            steps{
                echo 'Triggering email notification'
            }

        }
        stage('deploy-Dev'){
            steps{
                echo 'deploying to DEV'
            }

        }

}