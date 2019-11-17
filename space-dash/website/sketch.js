// var dataa;
var mapLevel1 = new Object(); // innermost map
// var fs = require("fs");

// $.get("/all", function(d) {
//   console.log(d);
//   // loop through all books
//   window.dataa = d;
//   console.log(dataa);
// });

// function getData(data) {
//   console.log(data);
//   var keys = Object.keys(data);
//   for (var i = 0; i < keys.length; i++) {
//     var word = keys[i];
//     var score = data[name];
//   }
// }
// getData(window.dataa);
function submitScore() {
  // console.log("hello");
  var scoreNumber = document.getElementById("name");
  console.log(scoreNumber.value);
}
$.getJSON("/all", function(data) {
  console.log(data);
  var items = [];
  $.each(data, function(key, val) {
    items.push("<li id='" + key + "'>" + val + "</li>");
  });
  mapLevel1 = data;

  console.log(items);
  $("<ul/>", {
    class: "my-new-list",
    html: items.join("")
  }).appendTo("body");
});

console.log(mapLevel1);
