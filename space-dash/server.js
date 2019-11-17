// // console.log("sever");
// var fs = require("fs");
// var data = fs.readFileSync("words.json");
// var words = JSON.parse(data);
// console.log(words);
// var express = require("express");

// var app = express();

// var server = app.listen(3000, listening);
// function listening() {
//   console.log("listening...");
// }

// app.use(express.static("website"));

// app.get("/add/:name/:score?", addScore);

// function addScore(request, response) {
//   var data = request.params;
//   var name = data.name;
//   var score = Number(data.score);

//   if (!score) {
//     var reply = {
//       msg: "Score required"
//     };
//     response.send(reply);
//   } else {
//     words[name] = score;
//     var data = JSON.stringify(words, null, 2);
//     fs.writeFile("words.json", data, finished);
//     function finished(err) {
//       console.log("data is in");
//     }
//     var reply = {
//       msg: "thank you!"
//     };
//     response.send(reply);
//   }
// }

// app.get("/all", sendAll);
// function sendAll(request, response) {
//   response.send(words);
// }
// app.get("/search/:name/", searchScore);

// function searchScore(request, response) {
//   var name = request.params.name;
//   var reply;
//   if (words[name]) {
//     reply = {
//       status: "found",
//       name: name,
//       score: words[name]
//     };
//   } else {
//     reply = {
//       status: "not found",
//       name: name
//     };
//   }
//   response.send(reply);
// }
// console.log("yes");
// $.post("words.json", { json: JSON.stringify(json) }, function(data) {
//   var allQuestions = data;
//   console.log(allQuestions);
// });

const express = require("express");
const Datastore = require("nedb");
const app = express();
app.listen(3000, () => console.log("listening at 200000"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

const database = new Datastore("database.db");
database.loadDatabase();

app.post("/api", (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  console.log(data);
  response.json(data);
});

app.get("/api", (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      console.log(err);
      response.end();
      return;
    }
    response.json(data);
  });
});
