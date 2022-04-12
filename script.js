// // For Title Screen
// // typing writing effect, https://www.npmjs.com/package/typewriter-effect//
// {
// var app = document.getElementById('app');
//
//
// var typewriter = new Typewriter(app,{
//     loop: false
//
// });
//
// typewriter.typeString('This is assignment 14 of intro to web dev!!')
//   .pauseFor(1000)
//   .deleteChars(35)
//   .typeString(' JSON Practice ')
//   .deleteChars(14)
//   .typeString('a playlist finder :)) ')
//   .pauseFor(5000)
//   .start();
//
// let executeButton = document.getElementById("next-button");
// document.getElementById("next-button").style.display = "none";
//
// function showStuff() {
//     document.getElementById("next-button").style.display = "inline";
// }
// setTimeout(showStuff, 20000);
//
// executeButton.addEventListener("click", function(){
//   nextpage();
//     });
//
// function nextpage(){
//   window.location='genres.html';
// }
// }
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––//

// main vars, general web organization//
  let outputElement = document.getElementById('outputElement');
  let outputParagraph = document.getElementById('outputParagraph');
  let contentGridElement = document.getElementById('contentGrid');


let jsonDatabase = [
{
  "title": "Pop",
  "bg": "#FFAAD2",
  "Artist": ["Ariana Grande", "Harry Styles", "Oliva Rodrigo"],
  "link": ["https://open.spotify.com/playlist/37i9dQZF1DWUa8ZRTfalHk?si=525ca6e9ab224d45"]
},
{
  "title": "Indie",
  "bg": "#8cba9c",
  "Artist": ["Omar Apollo", "TV Girl", "Clario"],
  "link": ["https://open.spotify.com/playlist/37i9dQZF1DX2Nc3B70tvx0?si=f2a599c05e344ba3"]
},
{
  "title": "Latin Rock/Indie",
  "bg": "#ff8680",
  "Artist": ["The Marias", "Senor Kino", "Los Blenders"],
  "link": ["https://open.spotify.com/playlist/17zEu9C6GgDVWrDsRPmazN?si=58c77a5228d44b57"]
},
{
  "title": "R&B",
  "bg": "#91BAD6",
  "Artist": ["Ella Mia", "The Weekend", "Brent Faiyaz"],
  "link": ["https://open.spotify.com/playlist/37i9dQZF1DX4SBhb3fqCJd?si=544e3142b54a4ba6"]
},
{
"title": "Classical Music",
"bg": "#C1BBDD",
"Artist": ["Chopin", "English Chamber Orchestra", "Tchaikovsky"],
"link": ["https://open.spotify.com/playlist/6fLmwfiN0zd93dSpRvfNU9?si=d9d90c194bbe4c2e"]
},
{
"title": "Random",
"bg": "#ab7c98",
"Artist": ["???", "???", "??!!?"],
"link": ["https://open.spotify.com/playlist/6ZZDxSRlFWJk3jybDLM2Ct?si=07968606a50e4e7c", "https://open.spotify.com/playlist/37i9dQZF1DX8C9xQcOrE6T?si=2eae343aea294b35", "https://www.youtube.com/watch?v=5qap5aO4i9A", "https://open.spotify.com/playlist/2uyBEC9ltSjlZWJGxEmGYa?si=dd140834364b4788", "https://www.youtube.com/watch?v=sWtEYPva4A0","https://www.youtube.com/watch?v=iIaRw59o_7g","https://youtu.be/iVg30U6O764","https://youtu.be/6RtEozldYkg","https://youtu.be/-wuU_3GmGWs","https://youtu.be/Lq2pt_1Y6eQ", "https://www.youtube.com/watch?v=ZZ5LpwO-An4&list=PLuOKYZONWsc6AfiJFfuoatAY59HbV2B44", "https://youtu.be/NT3yzVrp4o8","https://youtu.be/ZyoatfzxQ9s"]
},
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}


// incoming js vars and json datasets css styled //
// setting up divs
function createElementProper(incomingJSON){
let newContentElement = document.createElement("DIV");
newContentElement.style.backgroundColor = incomingJSON['bg'];
newContentElement.classList.add('contentItem');
// Nested Title
let newContentHeading = document.createElement("H3");
newContentHeading.innerText = incomingJSON['title'];
newContentElement.appendChild(newContentHeading);

let newContentPara = document.createElement("H2");
newContentPara.innerText = incomingJSON['Artist'];
newContentElement.appendChild(newContentPara);

let newContentLink = document.createElement("H4");
var randomIndex = Math.floor(Math.random() * incomingJSON['link'].length);
function printToPage(incoming){
newContentLink.innerText = incoming;
}
printToPage(incomingJSON['link'][randomIndex]);
newContentElement.appendChild(newContentLink);

contentGridElement.appendChild(newContentElement);
}
