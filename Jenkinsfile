pipeline {
    agent any
    triggers {
        pollSCM 'H * * * *'
    }
    stages {
        stage('Prebuild') {
                steps {
                   script{
                        echo 'Pulling WMS-UI Development branch. ' + env.BRANCH_NAME
                        sh 'npm install'
                   }
                }
        }
        stage('Build') {
            steps {
               script{
                    sh 'npm run build'
               }
            }
        }
        stage('Deploy') {
            steps {
                script{
                    sh'ls -lrth'
                    // sh 'mv -v /opt/themanly /opt/themanly_$(date +%Y%m%d%H%M)/'
                    sh 'mv ./dist /opt/'
                    sh 'mv /opt/dist /opt/themanly'
                }
            }
        }
    }
}