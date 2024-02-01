/*
Complete the method so that it formats the words into a single comma separated value. 
The last word should be separated by the word 'and' instead of a comma. 
The method takes in an array of strings and returns a single formatted string.

Note:
  Empty string values should be ignored.
  Empty arrays or null/nil/None values being passed into the 
  method should result in an empty string being returned.

Example: (Input --> output)
  ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
  ['ninja', '', 'ronin'] --> "ninja and ronin"
  [] -->""
*/


// Solution

function formatWords(words){
  if (!words){
    return ''
  }
  let result = ''
  words = words.filter(function(word){return !!word;});
  for(let i = 0;i < words.length;i++){
    if (!words[i]){
      continue;
    }
    
    if(result.length > 0)
      result += i == words.length - 1 ? ' and ' : ', '; 
          
    result += words[i]
  }
    
  return result
}

// or

function formatWords(words){
  if (!(words)) return '';
  let w = words.filter(function(a) { return a; });
  if (w.length >= 3) {
    return w.slice(0, w.length - 1).join(', ') + ' and ' + w[w.length - 1];
  } else { 
    return w.join(' and ');
  }
}