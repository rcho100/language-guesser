const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const input = process.argv[2]; 
//the above line grabs and stores the string argument that was entered when this file was run
const langCode = franc(input);

if (langCode === 'und') {
  console.log('Sorry cannot identify language. Please try a larger sample of text.'.red)
} else {
  const language = langs.where('3', langCode);
  console.log(`This language seems to be ${language.name}.`.green)
}

// to run enter node index.js and the string you want to input in the console
// ex. node index.js "This is just a test string"
// output will be "This language seems to be English."