let hexString = "49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d"
let solution = "SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t"



console.log(hexString.match(/\w{2}/g));


const hexToBase64 = code => {
    return btoa(code.match(/\w{2}/g).map(function(a) {
        return String.fromCharCode(parseInt(a, 16));
    }).join(""));

}



console.log(hexToBase64(hexString));


if (solution === hexToBase64(hexString)) {
    console.log("yeah")
}
