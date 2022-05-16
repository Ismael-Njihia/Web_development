document.getElementById("calculate").onclick = function() {
    let num1 = document.getElementById("n1").value;
    let num2 = document.getElementById("n2").value;
    let num1int = parseInt(num1);
    let num2int = parseInt(num2);

    let addition = num1int + num2int;
    let division = num1int / num2int;
    let multi = num1int * num2int;
    let sub = num1int - num2int;

    document.getElementById("result1").innerText = "The addition of the two numbers is " + addition + ".";
    document.getElementById("result2").innerText = "The division of the two numbers is " + division + ".";
    document.getElementById("result3").innerText = "The Multiplacation of the two numbers is " + multi + ".";
    document.getElementById("result4").innerText = "The Subtraction of the two numbers is " + sub + ".";
};