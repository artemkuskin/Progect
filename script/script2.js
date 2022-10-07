let url = "http://localhost:3000/";
let obj = {};
let itogPrice = {};
let itemPrice = {};
const render = async() => {
    let resp = await fetch(`${url}`);
    let result = await resp.json();
    let menu = result.menu;

    let out = "";
    for (let key in menu) {
        if (menu[key].category === document.querySelector("#container").className) {
            out += '<div class="products" >';
            if (menu[key].market === "subway") {
                out += '<img src="../i/img/subway.png" class="item-img">';
            } else if (menu[key].market === "sfc") {
                out += '<img src="../i/img/south_fried_chicken.png" class="item-img">';
            } else if (menu[key].market === "doner") {
                out += '<img src="../i/img/doner.png" class="item-img">';
            }
            out += '<div class="price-boll3">';
            out += '<div class="price-boll">';
            out +=
                '<img src="' +
                menu[key].image +
                '" class="img" id="' +
                "y" +
                menu[key].id +
                '"> </div></div>';
            out += '<div class="text">';
            out +=
                '<p class="item-text" id="' +
                "b" +
                menu[key].id +
                '">' +
                menu[key].name +
                "</p> </div>";
            out += '<div class="link">';
            out +=
                '<a href="#" class="item-link">' +
                menu[key].description +
                "</a> </div>";
            out +=
                '<p class="container-text"> Цена <strong class="price-one" id="' +
                "v" +
                menu[key].id +
                '">' +
                menu[key].price +
                "</strong> руб</p> ";
            out += '<p class="item-link-text">КОЛИЧЕСТВО</p>';
            out += '<div class="counter">';
            out += '<button class="increase"> + </button>';
            out +=
                '<input type="number" value=0 class="input" id="' +
                "a" +
                menu[key].id +
                '">';
            out += '<button class ="decrease"> - </button> </div>';
            out +=
                '<button class="edit-button" id="' +
                menu[key].id +
                '"> В КОРЗИНУ  </button> </div>';
            obj.nameSizes = "15см";
            obj.nameBreads = "Белый Итальянский";
            obj.nameFill = "Нет";
            obj.nameSous = "Нет";
            obj.nameVeget = "Нет";
        }
    }

    document.getElementById("container").innerHTML = out;
    resultModal();
    basket();
};

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('menu-link')) {
        document.getElementById("container").className = e.target.id
        render()
    }
})

//счетчик
document.addEventListener("click", function(e) {
    if (
        e.target.classList.contains("increase") &&
        e.target.parentElement.querySelector("input").value < 20
    ) {
        ++e.target.parentElement.querySelector("input").value;
    } else if (
        e.target.classList.contains("decrease") &&
        e.target.parentElement.querySelector("input").value > 0
    ) {
        --e.target.parentElement.querySelector("input").value;
    } else if (document.querySelector("input").value < 0) {
        e.target.parentElement.querySelector("input").value = 0;
    }
});

render();