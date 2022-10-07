//переход в модальном окне
document.addEventListener(
  "click",
  (modolFunc = (e) => {
    if (e.target.classList.contains("content__ingredients-button-next")) {
      if (
        document.querySelector("#content__ingredients-price").className ===
        "sizes"
      ) {
        document
          .querySelector("#content__ingredients-price")
          .setAttribute("class", "breads");
        document.querySelector(".size").style.background = "white";
        document.querySelector(".bread").style.background = "rgb(206, 60, 60)";
        document.querySelector(".content__ingredients-title-text").innerText =
          "ХЛЕБ ДЛЯ СЕНДВИЧА НА ВЫБОР";
        document.querySelector(
          ".content__ingredients-button-next-back"
        ).style.display = "block";
      } else if (
        document.querySelector("#content__ingredients-price").className ===
        "breads"
      ) {
        document
          .querySelector("#content__ingredients-price")
          .setAttribute("class", "vegetables");
        document.querySelector(".bread").style.background = "white";
        document.querySelector(".veget").style.background = "rgb(206, 60, 60)";
        document.querySelector(".content__ingredients-title-text").innerText =
          "ДОПОЛНИТЕЛЬНЫЕ ОВОЩИ БЕСПЛАТНО";
      } else if (
        document.querySelector("#content__ingredients-price").className ===
        "vegetables"
      ) {
        document
          .querySelector("#content__ingredients-price")
          .setAttribute("class", "sauces");
        document.querySelector(".veget").style.background = "white";
        document.querySelector(".sous").style.background = "rgb(206, 60, 60)";
        document.querySelector(".content__ingredients-title-text").innerText =
          "ВЫБЕРИТЕ 3 БЕСПЛАТНЫХ СОУСА ПО ВКУСУ";
      } else if (
        document.querySelector("#content__ingredients-price").className ===
        "sauces"
      ) {
        document
          .querySelector("#content__ingredients-price")
          .setAttribute("class", "fillings");
        document.querySelector(".sous").style.background = "white";
        document.querySelector(".filling").style.background =
          "rgb(206, 60, 60)";
        document.querySelector(".content__ingredients-title-text").innerText =
          "ДОБАВЬТЕ НАЧИНКУ ПО ВКУСУ";
      } else if (
        document.querySelector("#content__ingredients-price").className ===
        "fillings"
      ) {
        document
          .querySelector("#content__ingredients-price")
          .setAttribute("class", "result");
        document.querySelector(".filling").style.background = "white";
        document.querySelector(".result").style.background = "rgb(206, 60, 60)";
        document.querySelector(".content__ingredients-title-text").innerText =
          "ПРОВЕРЬТЕ И ДОБАВЬТЕ В КОРЗИНУ";
      }
      resultModal();
    } else if (
      e.target.classList.contains("content__ingredients-button-next-back")
    ) {
      if (
        document.querySelector("#content__ingredients-price").className ===
        "result"
      ) {
        document
          .querySelector("#content__ingredients-price")
          .setAttribute("class", "fillings");
        document.querySelector(".result").style.background = "white";
        document.querySelector(".filling").style.background =
          "rgb(206, 60, 60)";
        document.querySelector(
          ".content__ingredients-button-next"
        ).style.display = "block";
        document.querySelector(
          ".content__ingredients-button"
        ).style.flexDirection = "row-reverse";
      } else if (
        document.querySelector("#content__ingredients-price").className ===
        "fillings"
      ) {
        document
          .querySelector("#content__ingredients-price")
          .setAttribute("class", "sauces");
        document.querySelector(".filling").style.background = "white";
        document.querySelector(".sous").style.background = "rgb(206, 60, 60)";
      } else if (
        document.querySelector("#content__ingredients-price").className ===
        "sauces"
      ) {
        document
          .querySelector("#content__ingredients-price")
          .setAttribute("class", "vegetables");
        document.querySelector(".sous").style.background = "white";
        document.querySelector(".veget").style.background = "rgb(206, 60, 60)";
      } else if (
        document.querySelector("#content__ingredients-price").className ===
        "vegetables"
      ) {
        document
          .querySelector("#content__ingredients-price")
          .setAttribute("class", "breads");
        document.querySelector(".veget").style.background = "white";
        document.querySelector(".bread").style.background = "rgb(206, 60, 60)";
      } else if (
        document.querySelector("#content__ingredients-price").className ===
        "breads"
      ) {
        document
          .querySelector("#content__ingredients-price")
          .setAttribute("class", "sizes");
        document.querySelector(".bread").style.background = "white";
        document.querySelector(".size").style.background = "rgb(206, 60, 60)";
        document.querySelector(
          ".content__ingredients-button-next-back"
        ).style.display = "none";
      }
      resultModal();
    }
  })
);
