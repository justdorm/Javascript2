function halfNumber() {
  var number = document.getElementById("half-input").value;
  var halfNumber = number / 2;
  alert("half of " + number + " is " + halfNumber);
  console.log("half of " + number + " is " + halfNumber);
}

function fortune() {
  var name = document.getElementById("fortune-input").value;
  var fortunes = [
    "Don't let doubt and suspicion bar your progress.",
    "Accept the next proposition you hear.",
    "You can open doors with your charm and patience.",
    "You are talented in many ways.",
  ];
  var randomIndex = Math.floor(Math.random() * fortunes.length);
  var finalString = fortunes[randomIndex];
  var message = `Hi ${name}, Your fortune is: ${finalString}`;
  document.getElementById("fortune-output").innerHTML = message;
  restyle();
}

function restyle() {
  var fortuneOutput = document.getElementById("fortune-output")
  var colorArray = ["blue", "green", "red", "purple", "black", "pink"];
  var color = colorArray[Math.floor(Math.random() * colorArray.length)];
  var sizeArray = ["12pt", "20pt", "30pt", "50pt"];
  var size = sizeArray[Math.floor(Math.random() * sizeArray.length)];
  var textDecorationArray = ["none","underline","overline","line-through"];
  var textDecoration = textDecorationArray[Math.floor(Math.random() * textDecorationArray.length)];
  fortuneOutput.style.color = color;
  fortuneOutput.style.textDecoration = textDecoration;
  fortuneOutput.style.fontSize = size;

}
var halfButton = document.getElementById("half-button");
halfButton.addEventListener("click", halfNumber);
document.getElementById("fortune-button").addEventListener("click", fortune);

