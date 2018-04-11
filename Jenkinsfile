pipeline {
  agent none
  stages {
    stage('checkout and reset to branch') {
      agent {
        label 'master'
      }
      steps {
        sh 'git checkout $BRANCH_NAME'
        sh 'git reset origin/$BRANCH_NAME --hard'
      }
    }
    stage('Build ') {
      agent {
        label 'master'
      }
      steps {
        sh 'spring-boot:run'
      }
    }
  }
}