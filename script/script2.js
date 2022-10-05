let url = "http://localhost:3000/";
let obj = {};
const render = async() => {
    let resp = await fetch(`${url}`);
    let result = await resp.json();
    let menu = result.menu;


    let out = "";
    for (let key in menu) {
        if (menu[key].category === document.querySelector("#container").className) {
            out += '<div class="item" >';
            if (menu[key].market === "subway") {
                out += '<img src="../img/subway.png" class="item-img">';
            } else if (menu[key].market === "sfc") {
                out += '<img src="../img/south_fried_chicken.png" class="item-img">';
            } else if (menu[key].market === "doner") {
                out += '<img src="../img/doner.png" class="item-img">';
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
            obj.nameSizes = "15см"
            obj.nameBreads = "Белый Итальянский"
            obj.nameFill = "Нет"
            obj.nameSous = "Нет"
            obj.nameVeget = "Нет"
        }

    }

    document.querySelector("p.pizza").addEventListener("click", function() {
        document.querySelector("div#container").setAttribute("class", "pizza");
        render();
    });

    document.querySelector("p.shaurma").addEventListener("click", function() {
        document.querySelector("div#container").setAttribute("class", "shaurma");
        render();
    });

    document.querySelector("p.sandwiches").addEventListener("click", function() {
        document.querySelector("div#container").setAttribute("class", "sandwiches");
        render();
    });

    document.querySelector("p.burgers").addEventListener("click", function() {
        document.querySelector("div#container").setAttribute("class", "burgers");
        render();
    });

    document.querySelector("p.chicken").addEventListener("click", function() {
        document.querySelector("div#container").setAttribute("class", "chicken");
        render();
    });

    document.querySelector("p.salads").addEventListener("click", function() {
        document.querySelector("div#container").setAttribute("class", "salads");
        render();
    });

    document.querySelector("p.drinks").addEventListener("click", function() {
        document.querySelector("div#container").setAttribute("class", "drinks");
        render();
    });

    document.getElementById("container").innerHTML = out;
    resultModal();
    basket();
};

//счетчик
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("increase") && e.target.parentElement.querySelector("input").value < 20) {
        ++e.target.parentElement.querySelector("input").value;
    } else if (e.target.classList.contains("decrease") && e.target.parentElement.querySelector("input").value > 0) {
        --e.target.parentElement.querySelector("input").value;
    } else if (document.querySelector("input").value < 0) {
        e.target.parentElement.querySelector("input").value = 0;
    }
});

render();