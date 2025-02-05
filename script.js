function indexOfIgnoreCase(s1, s2) {
  // write your code here
	function indexOfIgnoreCase(s1, s2) {
  if (!s2) return 0; // Edge case: empty subStr should return 0 (similar to indexOf behavior)
  
  return s1.toLowerCase().indexOf(s2.toLowerCase());
}

}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
