let reverseWords = (input, start, end) => {

    //walking towards the end of the array by swapping positions
    while (start < end) {
        //swapping
        let temp = input[start];
        input[start] = input[end];
        input[end] = temp;
        //advancing towards the center
        start++;
        end--;
    }
}

let reverse = (input) => {
    //fisrt reversal of the whole arr.
    let arr = input.split('');
    reverseWords(arr, 0, arr.length - 1);

    let currentStartIndex = 0;
    // now reversal of each words in the arr
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == " " || i == arr.length) {
            reverseWords(arr, currentStartIndex, i - 1);
            currentStartIndex = i + 1;
        }
    }
    //join for the end
    return arr.join('');
}

console.log(reverse("sanal is a hero but also very smartyyy"));
