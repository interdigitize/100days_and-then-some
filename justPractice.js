function reverse(string){
  if (typeof string === "string") {
    return string.split(" ").reverse().join(" ");
    }
  else{
    return "Please enter a string";
  }
}

console.log(reverse("string"));
