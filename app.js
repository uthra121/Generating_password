
/*get the number of characters*/
// function charLength() {

//     let charLength = document.getElementById("length").value;
//     document.getElementById("result").innerHTML = charLength;
//     return charLength;

// }


// document.getElementById("length").addEventListener("change", charLength)

function createPassword() {
    const passwordLength = document.getElementById("length").value;
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()?/";
    let password = "";
    let characterSet = "";
    if (document.getElementById("uppercase").checked) {
      characterSet += uppercase;
    }
    if (document.getElementById("lowercase").checked) {
      characterSet += lowercase;
    }
    if (document.getElementById("numbers").checked) {
      characterSet += numbers;
    }
    if (document.getElementById("symbols").checked) {
      characterSet += symbols;
    }
    for (let i = 0; i < passwordLength; i++) {
      password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }
    document.getElementById("password__result").value = password;
    document.getElementById("copyIcon").addEventListener("click", () => {
      document.getElementById("password__result").select();
      document.execCommand("copy");
      document.querySelector(".copied").style.display = "inline";
      setTimeout(() => {
        document.querySelector(".copied").style.display = "none";
      }, 2000);
    });
  }
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener("change", function() {
      if (
        document.getElementById("uppercase").checked ||
        document.getElementById("lowercase").checked ||
        document.getElementById("numbers").checked ||
        document.getElementById("symbols").checked
      ) {
        document.getElementById("btn").disabled = false;
      } else {
        document.getElementById("btn").disabled = true;
      }
    });
  });
  document.getElementById("length").addEventListener("input", function() {
    document.getElementById("result").value = document.getElementById("length").value;
  });







