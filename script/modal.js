const resultModal = async () => {
  let resp = await fetch(`${url}`);
  let result = await resp.json();
  let menu = result.menu;
  let module = result.menu2;
  //Данные в mодальном окне
  let modalWindow = "";
  if (document.querySelector("#container").className === "sandwiches") {
    for (let key in module) {
      if (
        module[key].category ===
        document.querySelector("#content__ingredients-price").className
      ) {
        modalWindow += '<div class="price-popup" id="' + module[key].id + '">';
        modalWindow += '<div class="price-boll2">';
        modalWindow += '<div class="price-boll">';
        modalWindow +=
          '<img src="' +
          module[key].image +
          '"  class="ingredients-small content__ingredients-img"> </div></div>';
        modalWindow +=
          '<h4 class="name" id="' +
          "n" +
          module[key].id +
          '"> ' +
          module[key].name +
          "</h4>";
        modalWindow +=
          '<a href="#" class="item-description">' +
          module[key].description +
          "</a>";
        modalWindow +=
          '<div class="text-block"><p class="price-text" id="' +
          "q" +
          module[key].id +
          '">' +
          module[key].price +
          "</p><strong> руб</strong> </div></div>";
      }
    }
    // открытие-закрытие модального окна
    let modal = document.querySelector("#fon");
    let close = document.querySelector(".close_modal_window");

    //открытие модального окна
    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("edit-button")) {
        let id = e.target.id;
        let itogPrice = document.querySelector("#itog-price");
        let price = document.getElementById(`${"v" + id}`);
        modal.style.display = "block";
        document.querySelector(".content__ingredients").id = e.target.id;
        itogPrice.innerText = +price.innerText;
        if (document.querySelector(".content__ingredients-price") !== "sizes") {
          document.getElementById("content__ingredients-price").className =
            "sizes";
          document.querySelector(".size").style.background = "rgb(206, 60, 60)";
          document.querySelector(".bread").style.background = "white";
          document.querySelector(".veget").style.background = "white";
          document.querySelector(".sous").style.background = "white";
          document.querySelector(".filling").style.background = "white";
          document.querySelector(".result").style.background = "white";
          obj.nameSizes = "15см";
          obj.nameBreads = "Белый Итальянский";
          obj.nameFill = "Нет";
          obj.nameSous = "Нет";
          obj.nameVeget = "Нет";
          resultModal();
        }
      }
    });

    close.onclick = function () {
      modal.style.display = "none";
      obj = {};
    };
  } else {
    let modal = document.querySelector("#fon");
    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("edit-button")) {
        modal.style.display = "none";
      }
    });
  }

  //рузулбтат сборки сендвича
  if (
    document.querySelector("#content__ingredients-price").className === "result"
  ) {
    let id = document.querySelector(".content__ingredients").id - 1;
    modalWindow += '<div class="price-popup2" id="' + menu[id].id + '">';
    modalWindow += '<div class="price-boll2">';
    modalWindow += '<div class="price-boll">';
    modalWindow +=
      '<img src="' +
      menu[id].image +
      '"  class="ingredients-small content__ingredients-img"> </div></div>';
    modalWindow += '<div class="content__ingredients-price-itog">';
    modalWindow += '<h1 class="title-itog">Ваш сендвич готов</h4>';
    modalWindow +=
      "<p>Размер:<strong id='sizes-name' class='-1'>" +
      obj.nameSizes +
      "</strong></p> ";
    modalWindow +=
      "<p>Хлеб:<strong id='breads-name'  class='-1'>" +
      obj.nameBreads +
      "</strong></p>";
    modalWindow +=
      "<p>Овощи:<strong id='veget-name'  class='-1'>" +
      obj.nameVeget +
      "</strong></p>";
    modalWindow +=
      "<p>Соусы:<strong id='sous-name'  class='-1'>" +
      obj.nameSous +
      "</strong></p>";
    modalWindow +=
      '<p>Начинка:<strong id="fill-name"  class="-1">' +
      obj.nameFill +
      "</strong></p>";
    modalWindow += '<h3 id="name">' + menu[id].name + "</h3>";
    modalWindow += '<button class="increase"> + </button>';
    modalWindow += '<input type="number" value=1 class="input" id="input">';
    modalWindow += '<button class ="decrease"> - </button> ';
    modalWindow +=
      '<button id="' + id + 1 + '" class="button">В КОРЗИНУ</button></div>';
  }

  document.getElementById("content__ingredients-price").innerHTML = modalWindow;
  targetEtem();
};

//Показываем выбранные ингридиенты
const targetEtem = () => {
  if (
    document.getElementById("content__ingredients-price").className === "sizes"
  ) {
    if (document.getElementById(obj.objSizes)) {
      document.getElementById(obj.objSizes).className = "active";
      document.getElementById("q" + obj.objSizes).className = "text-item-price";
    } else if (obj.objCancelSizes === obj.objSizes) {
      if (document.getElementById(obj.objSizes)) {
        document.getElementById(obj.objSizes).className = "price-popup";
        document.getElementById("q" + obj.objSizes).className = "price-text";
      }
    }
  } else if (
    document.getElementById("content__ingredients-price").className === "breads"
  ) {
    if (document.getElementById(obj.objBreads)) {
      document.getElementById(obj.objBreads).className = "active";
      document.getElementById("q" + obj.objBreads).className =
        "text-item-price";
    } else if (obj.objCancelBreads === obj.objBreads) {
      if (document.getElementById(obj.objBreads)) {
        document.getElementById(obj.objBreads).className = "price-popup";
        document.getElementById("q" + obj.objBreads).className = "price-text";
      }
    }
  } else if (
    document.getElementById("content__ingredients-price").className ===
    "vegetables"
  ) {
    if (document.getElementById(obj.objVeget)) {
      document.getElementById(obj.objVeget).className = "active";
      document.getElementById("q" + obj.objVeget).className = "text-item-price";
    } else if (obj.objCancelVeget === obj.objVeget) {
      if (document.getElementById(obj.objVeget)) {
        document.getElementById(obj.objVeget).className = "price-popup";
        document.getElementById("q" + obj.objVeget).className = "price-text";
      }
    }
  } else if (
    document.getElementById("content__ingredients-price").className === "sauces"
  ) {
    if (document.getElementById(obj.objSaus)) {
      document.getElementById(obj.objSaus).className = "active";
      document.getElementById("q" + obj.objSaus).className = "text-item-price";
    } else if (obj.objCancelSaus === obj.objSaus) {
      if (document.getElementById(obj.objSaus)) {
        document.getElementById(obj.objSaus).className = "price-popup";
        document.getElementById("q" + obj.objSaus).className = "price-text";
      }
    }
  } else if (
    document.getElementById("content__ingredients-price").className ===
    "fillings"
  ) {
    if (document.getElementById(obj.objFill)) {
      document.getElementById(obj.objFill).className = "active";
      document.getElementById("q" + obj.objFill).className = "text-item-price";
    } else if (obj.objCancelFill === obj.objFill) {
      if (document.getElementById(obj.objFill)) {
        document.getElementById(obj.objFill).className = "price-popup";
        document.getElementById("q" + obj.objFill).className = "price-text";
      }
    }
  }
};
