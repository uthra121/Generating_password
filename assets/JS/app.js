
/*get the number of characters*/
// function charLength() {

//     let charLength = document.getElementById("length").value;
//     document.getElementById("result").innerHTML = charLength;
//     return charLength;

// }


// document.getElementById("length").addEventListener("change", charLength)

let values = {
    uppercase: "QWERTYUIOPLKJHGFDSAZXCVBNM",
    lowercase: "qwertyuiopasdfghjklzxcvbnm",
    numbers: "1234567890",
    symbols: "!@#$%^&*()"
}

let getValue = [
    function upperCase() {
    return values.uppercase[Math.floor(Math.random() * values.uppercase.length)];
  },
  function lowerCase() {
    return values.lowercase[Math.floor(Math.random() * values.lowercase.length)];
  },
  function number() {
    return values.numbers[Math.floor(Math.random() * values.numbers.length)];
  },
  function symbol() {
    return values.symbols[Math.floor(Math.random() * values.symbols.length)];
  }
];

function createPassword() {
    let upper = document.getElementById("uppercase").checked;
    let lower = document.getElementById("lowercase").checked;
    let number = document.getElementById("numbers").checked;
    let symbol = document.getElementById("symbols").checked;
    if (upper + lower + number + symbol == 0) {
      alert("Please check atleast one box!");
      return;
    }
    let charLength = document.getElementById("length").value;
    document.getElementById("result").innerHTML = charLength;
    // return charLength;
    
    let pwd = "";

    for (let i=0; i<charLength; i++) {

        let password = getValue[Math.random * getValue.length];
        
        let check_password = document.getElementById(password.name).checked;

        if (check_password) {
            pwd += password();
        }


    }

    document.getElementById("password_result").innerHTML = pwd;

}

