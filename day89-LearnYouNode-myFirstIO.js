// Write a program that uses a single synchronous filesystem operation to
// read a file and print the number of newlines (\n) it contains to the
// console (stdout), similar to running cat file | wc -l.
//
// The full path to the file to read will be provided as the first
// command-line argument (i.e., process.argv[2]). You do not need to make
// your own test file.
//
// Documentation on Buffers can be found by pointing your browser here:
//   file:///usr/local/lib/node_modules/learnyounode/node_apidoc/buffer.html
//
//   If you're looking for an easy way to count the number of newlines in a
//   string, recall that a JavaScript String can be .split() into an array of
//   substrings and that '\n' can be used as a delimiter. Note that the test
//   file does not have a newline character ('\n') at the end of the last line,
//   so using this method you'll end up with an array that has one more element
//   than the number of newlines.

var fs = require('fs');
var filename = process.argv[2];
var fileBuffer = fs.readFileSync(filename);

console.log(filename);

//get # of lines in `contents` Buffer
// var lines = fileBuffer.toString().split("\n");
// lines.forEach(function(line,index){//remove \r's
//     lines[index] = line.replace(/\r/,'');
// });
// lines = lines.filter(function(elem){ //cast out empty lines
//     return elem.length > 0;
// })
// //console.log(filename);
// console.log(lines.length);
