// Write your code below
function thisThing(word){
    let wordArray = word.split('');
for(let i = 0; i < word.length; i++){
    for(let j =0; j < word.length; j++){
    if(i !== j && wordArray[i] === wordArray[j]){
        return false;
    }
}
}
return true;
}

console.log(thisThing('Mann'));
