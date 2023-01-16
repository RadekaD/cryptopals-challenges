let output = document.getElementById("main");



let hexString = "1c0111001f010100061a024b53535009181c"

const hexToAscii = hex => {
    hex = hex.toString();
    let str = "";
    for (let i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substring(i, i+2), 16));
    }

    return str;
}

let hexBinary = hexToAscii(hexString);


console.log(hexBinary);

