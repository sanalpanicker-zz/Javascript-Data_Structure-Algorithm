function charCounter(input, character) {

return input.split('').reduce((acc, ch)=> ch === character? acc+1:acc , 0);

};


console.log(charCounter('sanal','a'));