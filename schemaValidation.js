// Zod: schema validation

const express = require("express");
const zod = require("zod")
const app = express();

// schema will be array of numbers
const schema = zod.array(zod.number());
// const schema = zod.object({
//     email: zod.string(),
//     password: zod.string(),
//     country: zod.literal("IN").or(zod.literal("US"))
// })

app.use(express.json());

app.post("/health-checkup", function(req, res){
    const kidneys = req.body.kidneys;
    
    // we can do schema validation right there: 
    const response = schema.safeParse(kidneys)
    if (!response.success) {
        res.status(411).json({
            msg: "input is invalid"
        })
    } else {
    res.send(
        {response} )
    }
   // const kidneyLength = kidneys.length
    
   // res.send("Your kidney length is: " + kidneyLength)
});


app.listen(3000)