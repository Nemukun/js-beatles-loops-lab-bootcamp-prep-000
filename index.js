function theBeatlesPlay(musicians,instruments){
  var array=[];
  for(var i=0;i<musicians.length;i++){
    array.push(musicians[i]+" plays "+ instruments[i]);
    }
    return array;
 }

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(){
  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] +"!!!");
    i++;
 }
 return newFacts;
}

 
function iLoveTheBeatles(number){
  var beatlesArray=[];
  do{
    beatlesArray.push("I love the Beatles!");
    number++;}
    while (number<15);
    return beatlesArray;
  }


 
