//Quick Question #1


//[1,2,3,4]



//Quick Question #2

//"ref"



//Quick Questions #3

/* {
    [1, 2, 3] => true,
    [1, 2, 3] => false
  } */





//hasDuplicate

const hasDuplicate = (arr) => {

    const newArray = new Set(arr);
    return newArray.size !== arr.length;
}







//vowelCount

const vowelCount = (str) => {

    const vowelCounter = new Map ();
    const vowels = "aeiou";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
         const vowel = str[i];
         if (vowelCounter.has(vowel)) { 
            vowelCounter.set(vowel, vowelCounter.get(vowel) + 1);
        }
        else { 
            vowelCounter.set(vowel, 1);
        }
    } 
}

return vowelCounter;
};




