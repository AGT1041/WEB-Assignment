const http = require('http');
const fs=require('fs')

const server = http.createServer(function (req, res) {
     if(req.method=='POST'){
        fs.readFile('index.html',function(error,pgresp){
        let body="";
        req.on("data",data=>{
            body+=data;
        });
        req.on("end",()=>{
           body= JSON.stringify(body)
        })
        document.getElementById(p).innerHTML=body;
        //response.end( innerHTML=body);
     });
    }
      
    //check url
    if (req.url == '/') {
            //set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });
            //set response header
        res.write('<html><body><p>This is home page.</p></body></html>');
        res.end();

    }   else if (req.url == "/user") {
        fs.readFile('index.html',function(error,pgresp){
            if(error){
                res.writeHead(404);
                res.write("not found")
            }
            else{
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgresp);
            }
         
        res.end(); 
        });
    } else {

        res.end('Invalid request');
    }

});

server.listen(8080);

console.log('server running on port 8080');