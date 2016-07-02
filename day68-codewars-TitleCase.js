// Write a function that will convert a string to title case
// First argument (required): the original string to convert.
// Second argument (optional): words to keep lowercase—unless it is the first word in the string


function titleCase(title, exemptWords){
    // make the title argument lowercase and split the string into an array of words
    var titleArr = title.toLowerCase().split(" ");
    // if there is a second argument, make the exemptWords lowercase and split them into an array of words
    if (exemptWords !== undefined){
      var exemptWords = exemptWords.toLowerCase().split(" ");
    }
    //map and return the title array
    return titleArr.map(function (el, index){
      //if it is the first word in the array, capitalize the first letter and return the word
      if(index === 0){
        return titleArr[0].charAt(0).toUpperCase() + el.substring(1, el.length);
      }
      //if the element matches one of the exemptWords, assign it to a variable skipMe
      if (exemptWords !== undefined){
        var skipMe = exemptWords.filter(function(el2){
          return el === el2;
        }).join();
      }
      //if skipMe equals the element, return it as is
      if(el === skipMe){
        return skipMe;
      }
      // for any other word in the array, capitalize the first letter and return it
      return el.charAt(0).toUpperCase() + el.substring(1, el.length);
      // join the elements in the array with a space
    }).join(" ");
}

console.log(titleCase('the quick brown fox'));



// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
