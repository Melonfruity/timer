

const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (value) => {
    // \u0003 maps to ctrl+c input
    if (value === '\u0003') {
    process.exit();
  }
  if (Number(value) && Number(value) > 0 && typeof Number(value) === 'number') {
    setTimeout(() => {
        process.stdout.write('\x07');
    }, value * 1000);
    }
});
