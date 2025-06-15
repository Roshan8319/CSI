const express = require('express');
const app = express();
let port = 8000;


app.listen(port, () =>{
    console.log(`server started in port ${port}` );
})

app.get('/',(req,res) =>{
    res.send("Hey this is login page");
    console.log("/");
    
})
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use(express.json());
app.get('/feedpage',(req,res) =>{
    res.send("Hey this is the feed page");
    console.log("/feedpage");
})
app.post('/feeddata', (req, res) => {
  const Data = req.body;
  console.log("/feeddata");
  res.json({
    message: 'Data received successfully!',
    yourData: Data
  });
});