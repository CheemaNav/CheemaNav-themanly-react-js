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
                    sh 'vite build --logLevel error'
               }
            }
        }
        stage('Deploy') {
            steps {
                script{
                    ls -lrth
                   // sh 'mv -v /opt/html/wms-dev/wms/ /opt/html/wms-dev/wms_$(date +%Y%m%d%H%M)/'
                    //sh 'mv ./dist/wms/ /opt/html/wms-dev/'
                }
            }
        }
    }
}
