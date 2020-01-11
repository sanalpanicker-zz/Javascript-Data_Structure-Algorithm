/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var max = 0;
    var str = '';
    var i = 0;
    var cache = [];
    
    while (i < s.length) {
        if (cache[s[i]]) {
            // Found a repeating character.
            if (str.length > max) {
                max = str.length;
            }

            // Not optimal: empty substring, move i back to last position, and start collecting over.
            /*str = '';
            // Move back to last non-repeating character.
            i = cache[s[i]];
            cache = [];*/
            
            // Optimal: strip everything up to the first repeating character in our substring, and continue on.
            var start = str.indexOf(s[i]);
            str = str.substring(start + 1);
        }

        if (i < s.length) {
            str += s[i];
            cache[s[i]] = i + 1;
            i++;
        }
    }
    
    if (str.length > max) {

        max = str.length;
    }
    return str;
};


console.log(lengthOfLongestSubstring('abcabcbb'));


function lengthOfSubString(s){
s = s.split('');
let str = '';
let mem = {};
let i = 0;


while(i < s.length){
if(mem[s[i]]){
    let start = str.indexOf(s[i]);
    str = str.substring(start+1);
}
str += s[i];
mem[s[i]] = i+1;
i++
}

return str;
}

console.log('result',lengthOfSubString('abcabcvv'));