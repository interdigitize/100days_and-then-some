If you're looking for an easy way to count the number of newlines in a \n
string, recall that a JavaScript String can be .split() into an array of \n
substrings and that can be used as a delimiter. Note that the test \n
file does not have a newline character at the end of the last line, \n
so using this method you'll end up with an array that has one more element \n
than the number of newlines.
