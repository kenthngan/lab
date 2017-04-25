var restify = require('restify');
var server = restify.createServer();


server.use(restify.queryParser());
server.use(restify.authorizationParser());

server.listen(8080,function() {
  
  console.log('incoming request being handled');
  
  //server.get('/items.json', function(req,res,next) {
 //   console.log('/items.json');

 //   res.end();
    
    
  //});
  
  server.get(/^\/items.(json|xml)/, function(req,res,next) {
    
   var data = ['bread', 'butter', 'jam'];
    res.send(data);
    res.end();
  });
  
  server.get('/items/42.json', function(req,res,next){
    console.log('matched!');
    res.end();
    
  });

});