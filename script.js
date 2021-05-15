// A
  const addTheWordCool = function(array){
    array.push("cool");
    return array;
}
console.log("Add cool:",addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

// B
const amountOfElementsInArray = (fruits) => fruits.length


console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 
// 3

// C
const selectBelgiumFromBenelux = (benelux) => benelux[0];

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
// resultaat: "Belgie" 

// D
const lastElementInArray = (dieren) => dieren[dieren.length - 1]

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
// resultaat: "Schildpad"

// E
const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
  const impeachTrumpSlice = function(presidents ) {
    return presidents.slice(1);
  }
  const impeachTrumpSplice = function(presidents) {
    return presidents.splice(1);
  }
  
  console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
  console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

  // Het verschil:
  // .slice() je verwijderd een element en retourneert de rest 
  // .splice() je kan iets verwijderen, maar ook vervangen, een nw element 
  // plaatsen en dan retourneren

// F
stringsTogether = (string) => string.join()

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
//resultaat: "Winc Academy is leuk ;-}"

// G
combineArrays = (array1, array2) => {
  return array1.concat(array2);
}

console.log(combineArrays([1,2,3], [4,5,6]))
// resultaat: [1,2,3,4,5,6]




