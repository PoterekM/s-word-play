$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var words = $("#sentence").val().toLowerCase().split("");
    for (var index= 0; index < words.length; index +=1) {
      if (words[index] === "a" || words[index] === "e" || words[index] === "i" || words[index] === "o" || words[index] === "u") {
        $("#answer").append("-");
      } else {
        $("#answer").append(words[index]);
      }





 }
});
});
