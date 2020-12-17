//로컬에서 작업중인지, 배포후 작업중인지에 대한 분기문
//process.env.NODE_ENV : 환경변수를 통해 로컬인지 배포후인지 알려줌
if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod')
} else {
    module.exports = require('./dev')
}