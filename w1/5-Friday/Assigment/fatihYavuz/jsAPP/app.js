function myFunction() {
   
    let inputValue = document.getElementById("inputName").value; 
    document.getElementById("result").innerHTML = inputValue;
    let number = parseInt(inputValue);

    if ((number%35) == 0){
        document.getElementById("result").innerHTML = "PowerCoders";
    } else if((number%7) == 0){
        document.getElementById("result").innerHTML = "Coders"
    } else if((number%5) == 0) 
        document.getElementById("result").innerHTML = "Power"
    else {
        document.getElementById("result").innerHTML = inputValue
    }
 
  }

  