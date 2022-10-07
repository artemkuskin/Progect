//подсчет суммы в модальном окне
document.addEventListener(
  "click",
  (createActive = (e) => {
    id = e.target.id;
    let block = document.getElementById(id);
    let price = document.getElementById(`${"q" + id}`);
    let itog = document.getElementById("itog-price");
    if (
      document.getElementById("content__ingredients-price").className ===
      "sizes"
    ) {
      if (
        e.target.classList.contains("price-popup") &&
        !document.querySelector(".active")
      ) {
        block.className = "active";
        document.getElementById(`${"q" + id}`).className = "text-item-price";
        let price2 = document.querySelector(".text-item-price");
        itog.innerText = +itog.innerText + +price2.textContent;
        let nameSizes = document.getElementById(`${"n" + id}`).innerText;
        obj.objSizes = id;
        obj.nameSizes = nameSizes;
      } else if (e.target.classList.contains("active")) {
        document.getElementById(id).className = "price-popup";
        itog.innerText = parseInt(itog.innerText) - parseInt(price.textContent);
        obj.objCancelSizes = id;
        delete obj.nameSizes;
      } else if (
        e.target.classList.contains("price-popup") &&
        document.querySelector(".active")
      ) {
        document.querySelector(".active").className = "price-popup";
        document.querySelector(".text-item-price").className = "price2-text";
        document.getElementById(`${"q" + id}`).className = "text-item-price";
        let price2 = document.querySelector(".text-item-price");
        let priceItem = document.querySelector(".price2-text");
        itog.innerText =
          parseInt(itog.innerText) +
          parseInt(price2.textContent) -
          priceItem.innerText;
        block.className = "active";
        let nameSizes = document.getElementById(`${"n" + id}`).innerText;
        obj.objSizes = id;
        obj.nameSizes = nameSizes;
      }
    } else if (
      document.getElementById("content__ingredients-price").className ===
      "breads"
    ) {
      if (
        e.target.classList.contains("price-popup") &&
        !document.querySelector(".active")
      ) {
        block.className = "active";
        document.getElementById(`${"q" + id}`).className = "text-item-price";
        let price2 = document.querySelector(".text-item-price");
        itog.innerText =
          parseInt(itog.innerText) + parseInt(price2.textContent);
        let nameBreads = document.getElementById(`${"n" + id}`).innerText;
        obj.nameBreads = nameBreads;
        obj.objBreads = id;
      } else if (e.target.classList.contains("active")) {
        document.getElementById(id).className = "price-popup";
        itog.innerText = itog.innerText - price.textContent;
        delete obj.nameBreads;
        obj.objCancelBreads = id;
      } else if (
        e.target.classList.contains("price-popup") &&
        document.querySelector(".active")
      ) {
        document.querySelector(".active").className = "price-popup";
        document.querySelector(".text-item-price").className = "price2-text";
        document.getElementById(`${"q" + id}`).className = "text-item-price";
        let price2 = document.querySelector(".text-item-price");
        let priceItem = document.querySelector(".price2-text");
        itog.innerText =
          parseInt(itog.innerText) +
          parseInt(price2.textContent) -
          priceItem.innerText;
        block.className = "active";
        let nameBreads = document.getElementById(`${"n" + id}`).innerText;
        obj.nameBreads = nameBreads;
        obj.objBreads = id;
      }
    } else if (
      document.getElementById("content__ingredients-price").className ===
      "vegetables"
    ) {
      if (
        e.target.classList.contains("price-popup") &&
        !document.querySelector(".active")
      ) {
        block.className = "active";
        document.getElementById(`${"q" + id}`).className = "text-item-price";
        let price2 = document.querySelector(".text-item-price");
        itog.innerText =
          parseInt(itog.innerText) + parseInt(price2.textContent);
        let nameVeget = document.getElementById(`${"n" + id}`).innerText;
        obj.nameVeget = nameVeget;
        obj.objVeget = id;
      } else if (e.target.classList.contains("active")) {
        document.getElementById(id).className = "price-popup";
        itog.innerText = itog.innerText - price.textContent;
        delete obj.nameVeget;
        obj.objCancelVeget = id;
        console.log(obj);
      } else if (
        e.target.classList.contains("price-popup") &&
        document.querySelector(".active")
      ) {
        document.querySelector(".active").className = "price-popup";
        document.querySelector(".text-item-price").className = "price2-text";
        document.getElementById(`${"q" + id}`).className = "text-item-price";
        let price2 = document.querySelector(".text-item-price");
        let priceItem = document.querySelector(".price2-text");
        itog.innerText =
          parseInt(itog.innerText) +
          parseInt(price2.textContent) -
          priceItem.innerText;
        block.className = "active";
        let nameVeget = document.getElementById(`${"n" + id}`).innerText;
        obj.nameVeget = nameVeget;
        obj.objVeget = id;
      }
    } else if (
      document.getElementById("content__ingredients-price").className ===
      "sauces"
    ) {
      if (
        e.target.classList.contains("price-popup") &&
        !document.querySelector(".active")
      ) {
        block.className = "active";
        document.getElementById(`${"q" + id}`).className = "text-item-price";
        let price2 = document.querySelector(".text-item-price");
        itog.innerText =
          parseInt(itog.innerText) + parseInt(price2.textContent);
        let nameSous = document.getElementById(`${"n" + id}`).innerText;
        obj.nameSous = nameSous;
        obj.objSaus = id;
      } else if (e.target.classList.contains("active")) {
        document.getElementById(id).className = "price-popup";
        itog.innerText = itog.innerText - price.textContent;
        delete obj.nameSous;
        obj.objCancelSaus = id;
      } else if (
        e.target.classList.contains("price-popup") &&
        document.querySelector(".active")
      ) {
        document.querySelector(".active").className = "price-popup";
        document.querySelector(".text-item-price").className = "price2-text";
        document.getElementById(`${"q" + id}`).className = "text-item-price";
        let price2 = document.querySelector(".text-item-price");
        let priceItem = document.querySelector(".price2-text");
        itog.innerText =
          parseInt(itog.innerText) +
          parseInt(price2.textContent) -
          priceItem.innerText;
        block.className = "active";
        let nameSous = document.getElementById(`${"n" + id}`).innerText;
        obj.nameSous = nameSous;
        obj.objSaus = id;
      }
    } else if (
      document.getElementById("content__ingredients-price").className ===
      "fillings"
    ) {
      if (
        e.target.classList.contains("price-popup") &&
        !document.querySelector(".active")
      ) {
        block.className = "active";
        document.getElementById(`${"q" + id}`).className = "text-item-price";
        let price2 = document.querySelector(".text-item-price");
        itog.innerText =
          parseInt(itog.innerText) + parseInt(price2.textContent);
        let nameFill = document.getElementById(`${"n" + id}`).innerText;
        obj.nameFill = nameFill;
        obj.objFill = id;
      } else if (e.target.classList.contains("active")) {
        document.getElementById(id).className = "price-popup";
        itog.innerText = itog.innerText - price.textContent;
        delete obj.nameFill;
        obj.objCancelFill = id;
      } else if (
        e.target.classList.contains("price-popup") &&
        document.querySelector(".active")
      ) {
        document.querySelector(".active").className = "price-popup";
        document.querySelector(".text-item-price").className = "price2-text";
        document.getElementById(`${"q" + id}`).className = "text-item-price";
        let price2 = document.querySelector(".text-item-price");
        let priceItem = document.querySelector(".price2-text");
        itog.innerText =
          parseInt(itog.innerText) +
          parseInt(price2.textContent) -
          priceItem.innerText;
        block.className = "active";
        document.querySelector(".price2-text").className = "price-text";
        let nameFill = document.getElementById(`${"n" + id}`).innerText;
        obj.nameFill = nameFill;
        obj.objFill = id;
      }
    }
  })
);
