def waitingUrl(url) {
	timeout(time:5, unit:'MINUTES') { // waiting application is running
		sh 'while( true ) do { http=$(curl -s -o /dev/null -w "%{http_code}" -X PUT ' + url + '); if [ ! $http -eq "000" ]; then echo "application is running ! ($http)"; break; fi; echo "waiting application is running ($http)"; sleep 1;} || { echo "waiting application is running"; sleep 1;} done'										
	}
}

pipeline {

    agent none

    stages {
	
		stage('checkout and reset to branch') {
			agent { label 'master' }
			steps {
				sh 'git checkout $BRANCH_NAME'
				sh 'git reset origin/$BRANCH_NAME --hard'
            }
		}
			
		
		stage('Build - front') {
			agent { label 'master' }
			steps {
				sh "cd darkside-front && npm install"
				sh "cd darkside-front && npm run build"
			}
        }
		
        stage('Build - back') {
			agent { label 'master' }
			steps {
				sh "cd darkside-back && mvn clean install"
			}
        }
		

		/*stage('Deploy on Dev') {
			agent { label 'master' }
		    steps {
				withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'kalyptusssh',
					usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
					sh 'sshpass -p "$PASSWORD" scp src/bin/Release/PublishOutput/* $USERNAME@109.190.127.175 -p 2222:/cygdrive/c/inetpub/wwwroot/kalyptus/kalyptus-back'
				}
            }
		}*/
    }
}
