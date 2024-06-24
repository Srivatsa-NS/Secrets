//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

//1. import express,body-parser and directory path extracter
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path"
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));

//2. create a listener for the server to start

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});

//3. create a get method handler to load the home page

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
    console.log("Home page loaded");
});

//4. create a post method to get the password input

app.post("/check",(req,res)=>{

    //4.a check for the validity of the password

    if(req.body["password"]=="ILoveProgramming"){
        //If the password is correct then load the secret.html file
        res.sendFile(__dirname+"/public/secret.html")
        console.log("Entered the correct password. Loaded the 'secret.html' page.");
    }

    else{
        //If the password is incorrect then load the home page again
        res.sendFile(__dirname+"/public/index.html");
        console.log("Entered incorrect password. Loaded the home page.");
    }

});