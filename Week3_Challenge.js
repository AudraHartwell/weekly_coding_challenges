function LongestWord(sen) { 
let words = sen.replace(/[^\w\s]/g, '').split(' ');
let longest = words.sort(function(wordA, wordB) {
  return wordB.length - wordA.length;
});

return longest[0];
}
   
// keep this function call here 
console.log(LongestWord(readline()));
