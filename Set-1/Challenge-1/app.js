//////
// Simulated base64 index table
/////

let base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";



// "52616e646f6d20737472696e6720746573742e" //Random string test.

let val = "49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d";
let solution = "SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t";


const hex2ascii = hexString => {
    
    let hex = hexString.toString();
    let str = "";
    for (let i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substring(i, i + 2), 16))
    }

    return str;
}

//console.log(hex2ascii(val));

const getBinary = string => {

    let arr = [];

    for (let i of string) {
        // Makes 7 bit ASCII code into 8 bit by adding 0
        let binaryString = `${0 + i.charCodeAt(0).toString(2)}`;
        if (binaryString.length === 7) {
            arr.push(`${0 + binaryString}`)
        } else {
            arr.push(binaryString);
        }
    }
  
    return arr;
}

//console.log(getBinary(hex2ascii(val)));

let arrSum = getBinary(hex2ascii(val)).reduce((a,b) => a + b);

//console.log(arrSum);

let base64bytes = arrSum.match(/.{1,6}/g);

//console.log(base64bytes);



const checkLastByte = bytes => {
    let lastByte = bytes[bytes.length -1];
    //Checks if last base64 byte has 6 bits or less
    while (lastByte.length !== 6) {
        lastByte += 0;
    }

    return lastByte;

}

//Replaces last byte with added zeros
base64bytes[base64bytes.length - 1] = checkLastByte(base64bytes);

const binaryToB64Array = array => {
    let b64array = [];

    for (let i of array) {
        let base64Num = parseInt(i, 2)
        b64array.push(base64Num)
        
    } 
    
    return b64array;
}

//console.log(binaryToB64Array(base64bytes));

const mapToB64 = array => {
    
    let str = "";

    for (let i = 0; i < array.length; i++) {
        str += base64chars[array[i]];
    }

    return str;
}

let customSolution = mapToB64(binaryToB64Array(base64bytes));

console.log(customSolution);







/// Javascript built in function

function utf8_to_b64(str) {
    return window.btoa(encodeURIComponent(str))
}

const encodedStr = btoa(hex2ascii(val))

//console.log(encodedStr)

if ( encodedStr === solution) {
    //alert("Challenge passed")
}






//////////
// Pitanje za Milutina - sta je sa non-ASCII karakterima?
/////////
