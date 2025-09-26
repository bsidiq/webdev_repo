const express = require("express")
const app = express();
var users = [
    {
        name: "john",
        kidneys: [{ healthy: false }]
    }
]
console.log("before everything: " + users[0].kidneys)

// showing healthy and unhealthy kidneys
app.get("/", function(req, res) {
    console.log("get: " + users[0].kidneys)
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i<numberOfKidneys; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys += 1;
        }
        
    }
    const numberofUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberofUnHealthyKidneys
    })
})

app.use(express.json());

// create a new kidney either healthy or unhealthy based on on Post body
app.post("/", function(req, res) {
    console.log("post: " + users[0].kidneys)
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })

})

// adding a healthy kidney 
app.put("/", function(req, res) {
    console.log("put: " + users[0].kidneys)
    for (let i = 0; i<users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true; 
    }
    res.json({})
})
// removing unhealthy kidneys
app.delete("/", function(req, res) {
    console.log("delete: " + users[0].kidneys)
    if (isThereAtleastOnehealthyKidney()) {
        const newKidneys = [];
        for (let i = 0; i<users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: false
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "done"})
    } else {
        res.status(411).json({
            msg: "You don't have bad kidneys!"
        })
    }
    
    
})

function isThereAtleastOnehealthyKidney() {
    let atleastOnehealthyKidney = false; 
    for (let i = 0; i<users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOnehealthyKidney = true; 
        }
    }
    return atleastOnehealthyKidney
}
app.listen(3000)