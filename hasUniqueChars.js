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

console.log(thisThing('Kieliszkowski'));

//solution 2

let example = 'Yes';

function uniqueChar(word){
    for(let i = 0; i < word.length; i ++){
        if(word.indexOf(word[i]) !== word.lastIndexOf(word[i])){
            return false;
        }
    }
    return true;
}

console.log(uniqueChar(example));
// solution 2
let string = 'Moonday';
let set = new set;

for(let i = 0; i < string.length; i++){
    set.add(string[i]);
}

if(set.size === string.length){
    console.log(true);
}else{
    console.log(true);
}
//solution 4

/*let uniChar = '';
for(let i = 0; i < string.length; i ==){
    if(uniChar.includes(string[i])){
        return false;
    } else{
        uniChar = uniChar + string[i];
    }
}*/

//solution 5

function uniqueChar(word) {

    for (var i = 0; i < word.length-1; i++) {
        if (word.charAt(i) == word.charAt(i + 1)) {
            return false;
        }
    }
    return true;
}


    if (uniqueChar("wordo") == true) {
        console.log("String is Unique");
    } else {
        console.log("String is not Unique");
    }