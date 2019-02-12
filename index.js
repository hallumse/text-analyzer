 function analyzeText(text) {
   var output = "";

   output += characterCount(text) + " characters";
   output += " " + wordCount(text) + " words";
   output += " " + spaceCount(text) + " spaces"

   return "Analysis: " + output;
 }

function characterCount(text) {
  return text.length;
}

function wordCount(text) {
  return text.split(" ").length;
}

function spaceCount(text) {
  return text.length - text.split(" ").join("").length
}


var sampleText = "hey how are you doing?";

if (process.env.NODE_ENV !== "test") {
  console.log(analyzeText(sampleText));
}
