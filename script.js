var factList = [
 "Fact 1",
 "Fact 2", 
 "Fact 3", 
 "Fact 4"]; /*defines a list of facts to choose from*/

var fact = document.getElementById("fact");
var myBtn = document.getElementById("myBtn"); /*--defines different facts*/
var count = 0;

myBtn.addEventListener("click", displayFact); /*defines my button*/

function displayFact(){
  fact.innerHTML = factList[count];
  count++; /* adds one to the count variable*/
  if (count == factList.length){ /*resets it to 0 if its equal to the fact length*/
    count = 0;
  }
}
