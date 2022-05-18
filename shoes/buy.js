let airforce = {
    name: "Air Force",
    shoeImage: "airforce.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    price: "2500",
    shoeid: "1234"

}
let jordan = {
    name: "jordan",
    shoeImage: "jordan.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    price: "2700",
    shoeid: "7688667"

}
let timber = {
    name: "Timberland",
    shoeImage: "timberland.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    price: "2900",
    shoeid: "87777"
}
let queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);

if (queryString == airforce.shoeid) {
    document.getElementById("name").innerText = airforce.name;
    document.getElementById("shoeImage").src = airforce.shoeImage;
    document.getElementById("desc").innerText = airforce.desc;
    document.getElementById("price").innerText = airforce.price;
} else if (queryString == jordan.shoeid) {
    document.getElementById("name").innerText = jordan.name;
    document.getElementById("shoeImage").src = jordan.shoeImage;
    document.getElementById("desc").innerText = jordan.desc;
    document.getElementById("price").innerText = jordan.price;
} else if (queryString == timber.shoeid) {
    document.getElementById("name").innerText = timber.name;
    document.getElementById("shoeImage").src = timber.shoeImage;
    document.getElementById("desc").innerText = timber.desc;
    document.getElementById("price").innerText = timber.price;
}