pipeline {
    agent any
    stages {
        stage('Checkout (Git)') {
            steps {
                git url: 'https://github.com/erickgermani/decimal_to_binary', branch: 'main'
            }
        }
        stage('Instalando Dependências') {
            steps {
                sh 'npm install'
            }
        }
        stage('Rodar Testes') {
            steps {
                sh 'npm test'
            }
        }
        stage('Cobertura de Testes') {
            steps {
                sh 'npm run coverage'
            }
        }
        stage('Relatório JUnit') {
            steps {
                sh 'npm run test:ci'
                junit 'reports/junit.xml'
            }
        }
        stage('Publicar Relatório de Cobertura') {
            steps {
                publishHTML(target: [
                    reportName: 'Coverage Report',
                    reportDir: 'coverage/lcov-report',
                    reportFiles: 'index.html'
                ])
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}