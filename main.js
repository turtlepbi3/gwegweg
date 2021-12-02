"use strict";

const port = 3000,
  express = require("express"),
  app = express();

app.use(express.static("public"));


app.use(
  express.urlencoded({
    extended: false
  })
);

app.post("/grade.js", (req, res) => 
{

    var choice=req.body["choice"];
    var midterm=req.body["mid"];
    var final=req.body["fin"];
    var semester=req.body["sem"];
    
    var output="";
    if(choice=="Numerical") output="Numerical Grade="+(2*midterm+final)/3+"<br>";
    else if(choice=="Letter") output="B="+(midterm+2*final)/3+"<br>";
    else if(choice=="Both") output="Both="+(midterm+2*final)/2+"<br>";
    ////////////////////////////////////
    //// FORM PROCESSING CODE HERE /////
    ////////////////////////////////////
    
    output+="<a href='grade.html'>RESET</a>";
    res.send(output);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
