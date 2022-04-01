   //display values
   function display(value) {
    document.getElementById("result").value += value;
   }
   //evaluates the expression and return result
   function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
   }

function clearScreen() {
    document.getElementById("result").value = " ";
   }




   
