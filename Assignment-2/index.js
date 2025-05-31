const http = require('http');
const fs = require('fs');
const path = require('path');
const filepath = path.join(__dirname, 'test.txt');


if(!fs.existsSync(filepath)){
fs.writeFile(filepath, "Assignment-2 Data", (err)=>{
    if (err){
        throw new Error(err);
    }
    console.log("File written successfully");
    
});
}



const port = 3000;
const server = http.createServer ((req, res) => {
    if(req.url === '/read' && req.method === 'GET'){
    fs.readFile(filepath, (err, data)=>{
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Error reading file');
            return;
        }else{
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(data);
        }
    })
}else if(req.url === '/delete' && req.method === 'DELETE'){
        if(fs.existsSync(filepath)){
            fs.unlink(filepath, (err) =>{
                if(err){
                    console.error("something went wrong");
                }else{
                    res.writeHead(200);
                    res.end("file deleted");
                    console.log("File deleted");
                    
                }
            })
        }else{
            console.log("file does not exist");
            
        }
}
});

server.listen(port, () =>{
    console.log(`Server is running on port :${port}`);
})
