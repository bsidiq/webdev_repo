// global catches: error handling middleware
// - gives the user better error message

const express = require("express");
const app = express();

app.use(express.json());

app.post("/health-checkup", function(req, res){
    // do something with kidney here
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length
    
    // console.log(kidneys, kidneyLength)

    res.send("Your kidney length is: " + kidneyLength)
});

// define global catches after all the route
app.use(function(err, req, res, next){
    res.json({
        msg: "Sorry something is wrong with our server!"
    })
})
app.listen(3000)