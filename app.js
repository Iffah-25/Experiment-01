const express = require('express');
const app = express();

app.get('/',(req,res)=> {
 	res.send("Hello World from Docker app!");
});

app.listen(3000,() => {
 	console.log("Server running on port 3000");
});
