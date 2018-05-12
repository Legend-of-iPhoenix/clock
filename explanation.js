// EXPLANATION BY PT_/Peter Tillema (@PeterTillema)

document.head.innerHTML = "<style>pre {display:inline-block;margin:6px}</style>";
var t = "<pre>",
  a = "</pre>";
setInterval(n => document.body.innerHTML = (new Date)		// Get Date
  .toISOString()											// Convert to ISO format	- "2018-05-12T20:24:27.239Z"
  .match(/T([^.]*)/)[1].split(":")							// Get time and split by :	- ["20", "24", "27"]
  .map(n => t + n.padStart(2, 0)							// For every element in this array, add preceding zeroes	- ["20", "24", "27"]
    .split("")												// Split the 2 digits		- [["2", "0"], ["2", "4"], ["2", "7"]]
    .map(n => (n => {										// For all digits in the number
      var t = new Array(15)									// 5 rows of 3 times "#"
        .fill(" "),											// Fill with spaces
        a = [
          [0, 1, 2],										// Top segment
          [0, 3, 6],										// Top left segment
          [2, 5, 8],										// Top right segment
          [6, 7, 8],										// Middle segment
          [6, 9, 12],										// Bottom left segment
          [8, 11, 14],										// Bottom right segment
          [12, 13, 14]										// Bottom segment
        ];
      return ("u\x10[Y8imP}x".charCodeAt(n) + 2)			// "u\x10[Y8imP}x" = [117, 16, 91, 89, 56, 105, 109, 80, 125, 120] - get unicode of digit
															// = [1110101, 10000, 1011011, 1011001, 111000, 1101001, 1101101, 1010000, 1111101, 1111000]
        .toString(2)										// Convert to binary
        .padStart(7, 0)										// Add preceding zeroes
															// = [1110111, 0010010, 1011101, 1011011, 0111010, 1101011, 1101111, 1010010, 1111111, 1111010]
        .split("")											// Split for each bit; these represent which segment to display
        .map((n, e) => 0 == n || a[e].map(n => t[n] = "#")), t.join("")	// If bit is not 0, set the right segment to '#' s
        .match(/.../g)										// Convert array to 5 rows of 3 characters
        .join("\n")											// And put a number in between
    })(parseInt(n)))										// Execute the function (lol)
    .join(a + t) + a)										// <pre> and </pre> everywhere
  .join(t + " # \n\n\n #" + a), 500)						// Add the #   # in between the digits
