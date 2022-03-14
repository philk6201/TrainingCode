let str = 'my name is anik';
let reverseSentence = str => {
    let arr = str.split(" ");
    const reversed = arr.map(el => {
        return el.split('').reverse().join("");
    });
    return reversed.join(" ");
};
console.log(reverseSentence(str));