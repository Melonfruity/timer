// node timer1.js 10 3 5 15 9;
const input = process.argv.slice(2);

console.log(input);

for(let value of input) {
    if (value && value > 0 && typeof value === 'number') {
        setTimeout(() => {
            console.log(value);
            process.stdout.write('\x07');
        }, value * 1000);
    }
}