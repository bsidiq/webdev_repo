const express = require("express");
const app = express();

app.post("/health-checkup", function(req, res){
    // do something with kidney here
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.kidneyLength

    res.send("Your kidney length is: " + kidneyLength)
});

app.listen(3000)







































// const express = require("express");
// const app = express();
// let numberOfRequests = 0;

// function calculateRequests(req, res, next) {
//     numberOfRequests++;
//     console.log(numberOfRequests)
//    next();
// }

// app.use(calculateRequests)
// app.use(express.json())

// function userMiddleware(req, res, next) {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     if (username != "harkirat" && password != "pass") {
//         res.status(403).json({
//             msg: "Incorrect input"});
//     } else {
//         next();
//     }
// };

// function kidneyMiddleware(req, res, next) {
//     const kidneyId = req.query.kidneyId;
//     if (kidneyId != "1" && kidneyId != "2") {
//         res.status(403).json({
//             msg: "Incorrect input"})
//     } else {
//         next();
//     }
// };

// app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req, res){
//     console.log(req.body)
//     res.send("Your heart is healthy")
// });

// app.get("/kidney-check", userMiddleware, kidneyMiddleware, function(req, res) {
//     res.send("Your kidney is healthy")
// });

// app.listen(3000)



















// function validator(username, password, kidneyId) {
//     if (username === "harkirat" && password === "pass") {
//         if (kidneyId === "1" || kidneyId === "2") {
//             return true;
//         }
//     }
//     else {
//         return false;
//     }
// }

// const express = require("express");
// const app = express();

// app.get("/health-checkup", function(req, res) {
//     // do health checks here

//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if (validator(username, password, kidneyId)) {
//        res.json({msg: "You are good!"})
//        return;
//     }
//     res.status(400).json({"msg": "Somethings up with your inputs"})
//     return;
// });

// app.listen(3000)

