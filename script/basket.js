//корзина
const basket = () => {
  if (container.className != "sandwiches") {
    let container = document.querySelector("#container");
    let sum = document.querySelector(".all-price");
    let modal = "";
    container.addEventListener("click", function (event) {
      let target = event.target;
      let id = event.target.id;
      let resultValueInput = document.getElementById(`${"a" + id}`);
      let price = document.getElementById(`${"v" + id}`);
      let name = document.getElementById(`${"b" + id}`);
      let dataCount = document.getElementById(`${"00" + id}`);
      if (target.className === "edit-button" && resultValueInput.value >= 0) {
        let item = document.getElementById(`${"0" + id}`);

        //Если товар есть в крзине
        if (item) {
          dataCount.innerText =
            parseInt(dataCount.innerText) + parseInt(resultValueInput.value);
          sum.innerText =
            parseInt(sum.innerText) +
            parseInt(price.innerText) * resultValueInput.value;
          modal = "";
          resultValueInput.value = 0;
        } else if (resultValueInput.value > 0) {
          sum.innerText =
            parseInt(sum.innerText) +
            parseInt(price.innerText) * resultValueInput.value;
          modal +=
            '<div class="title-busket" id="' +
            "0" +
            id +
            '"><button class="delete-button" id="' +
            id +
            '">-</button><p class="name-text-basket">' +
            name.innerText +
            "</p>";
          modal +=
            '<p class="amount" id="' +
            "00" +
            id +
            '">' +
            resultValueInput.value +
            "</p></div>";
          document.getElementById("tovar").innerHTML += modal;
          modal = "";
          resultValueInput.value = 0;
          itemPrice[`${"v" + id}`] = price.innerText;
        }
      }
    });
  }
};

//добвалеие в корзину из модального окна
document.addEventListener("click", function (e) {
  let id = e.target.id;
  let modal = "";
  let main = document.getElementById("fon");
  let itogSum = document.getElementById("itog-price");
  let sum = document.querySelector(".all-price");
  let name = document.getElementById("name");
  let resultValueInput = document.getElementById("input");
  if (e.target.classList.contains("button")) {
    let item = document.getElementById(`${"000" + id}`);
    if (item) {
      let dataCount = document.getElementById(`${"12" + id}`);
      dataCount.innerText =
        parseInt(dataCount.innerText) + parseInt(resultValueInput.value);
      sum.innerText =
        parseInt(sum.innerText) + itogSum.innerText * resultValueInput.value;
      modal = "";
      resultValueInput.value = 0;
      main.style.display = "none";
    } else if (resultValueInput.value > 0) {
      main.style.display = "none";
      sum.innerText =
        parseInt(sum.innerText) +
        parseInt(itogSum.innerText) * parseInt(resultValueInput.value);
      modal +=
        '<div class="title-busket" id="' +
        "0" +
        id +
        '"><button class="delete-button2" id="' +
        id +
        '">-</button><p class="name-basket" id="' +
        "000" +
        id +
        '">' +
        name.innerText +
        "</p>";
      modal +=
        '<p class="amount" id="' +
        "12" +
        id +
        '">' +
        resultValueInput.value +
        "</p></div>";
      document.getElementById("tovar").innerHTML += modal;
      itogPrice[`${id + "m"}`] = parseInt(itogSum.innerText);
    }
    obj = {};
  }
});

document.addEventListener("click", function (e) {
  id = e.target.id;
  let result = document.querySelector(".all-price");
  if (e.target.classList.contains("delete-button")) {
    let number = document.getElementById(`${"00" + id}`);
    result.innerText =
      parseInt(result.innerText) - itemPrice[`${"v" + id}`] * number.innerText;
    document.getElementById(`${"0" + id}`).remove();
  } else if (e.target.classList.contains("delete-button2")) {
    let number = document.getElementById(`${"12" + id}`);
    result.innerText =
      parseInt(result.innerText) - number.innerText * itogPrice[`${id + "m"}`];
    document.getElementById(`${"0" + id}`).remove();
    delete itogPrice[`${id + "m"}`];
  }
});
