var distance = 200;
var commission = 0.8;
var price = 101.54;

var totalprice = price * distance;
var driverprice = totalprice * commission;


document.getElementById("answer").innerText = Math.floor(driverprice);


document.getElementById("btn").onclick = function() {
    document.getElementById("result").innerText = "Thankyou for clicking!"
};

document.getElementById("submit").onclick = function() {
    var Fullname = document.getElementById("Fname").value;
    var lastname = document.getElementById("Lname").value;

    document.getElementById("display").innerText = Fullname + " " + lastname;

};

document.getElementById("Expenses").onclick = function() {
    var food = document.getElementById("food").value;

    var rent = document.getElementById("rent").value;

    var foodInt = parseInt(food);
    var rentInt = parseInt(rent);

    document.getElementById("usage").innerText = rentInt + foodInt;
}
document.getElementById("calculate").onclick = function() {
    var city = document.getElementById("city").value;
    var qty = document.getElementById("qty").value;

    var qtyInt = parseInt(qty);

    if (city == "Eldoret") {
        var price = 2000;
        var total = price * qtyInt;
        document.getElementById("calculated").innerText = total;

    } else if (city == "Nakuru") {
        var price = 2500;
        var total = price * qtyInt;
        document.getElementById("calculated").innerText = total;

    } else if (city == "Nairobi") {
        var price = 3000;
        var total = price * qtyInt;
        document.getElementById("calculated").innerText = total;

    }
}