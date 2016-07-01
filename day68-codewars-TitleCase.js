// Write a function that will convert a string to title case
// First argument (required): the original string to convert.
// Second argument (optional): words to keep lowercase—unless it is the first word in the string


function titleCase(title, exemptWords){
    // make the title argument lowercase and split the string into an array of words
    var titleArr = title.toLowerCase().split(" ");
    // make the exemptWords lowercase and split them into an array of words
    var exemptWords = exemptWords.toLowerCase().split(" ");
    //map and return the title array
    return titleArr.map(function (el, index){
      //if it is the first word in the array, capitalize the first letter and return the word
      if(titleArr[0] === titleArr[index]){
        return titleArr[0].charAt(0).toUpperCase() + el.substring(1, el.length);
      }
      //On the next three lines I am trying to check an element in the titleArr array against the exemptWords parameter—which I defined as its own array. My inclination is to put a for loop in the if statement conditional to check el against each item in the array, but that just doesn't seem like the best idea. Any suggestions?
      if(el === ){
        return ;
      }
      // for any other word in the array, capitalize the first letter and return it
      return el.charAt(0).toUpperCase() + el.substring(1, el.length);
      // join the elements in the array with a space
    }).join(" ");
}

console.log(titleCase('a clash of KINGS', 'a an the of'));



// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
