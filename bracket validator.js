const bracketValidator = (input) => {

console.log("in here");
    const bracketLookup = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    const openers = ['(', '{', '['];
    const closers = [')', '}', ']'];
    let openerStack = [];
    let closerStack = [];
    for (item of input) {
        let itemArr = item.split('');
        for (character of itemArr) {
            if (openers.includes(character)) {
                openerStack.push(character);
            } else if (closers.includes(character)) {
                if (!openerStack.length) {
                    return false;
                } else {
                    let lastUnclosedOpener = openerStack.pop();
                    if (bracketLookup[lastUnclosedOpener] !== character) {
                        return false;
                    }
                }
            }

        }
    }
    return true;
}

console.log(bracketValidator('{{{}}]'));
//bracket validator, closing opening bracket 