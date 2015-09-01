var Sequelize = require('sequelize');
var sequelize = new Sequelize('test','root','root',{host : 'localhost', port : '3306', dialect : 'mysql'});

sequelize.authenticate().then(function(err){
  if(!!err){
    console.log('fail', err);
  } else {
    console.log('success');
  }
});