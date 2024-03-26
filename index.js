// code your solution here
const record = [
  { year: "2018", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]


function superbowlWin(array){
  if (array.result === "W"){
    return array.year
  }else{
    return undefined
  }
}

console.log(record.find(superbowlWin));
