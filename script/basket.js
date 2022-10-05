//корзина
const basket = () => {
    if (container.className != "sandwiches") {
        let container = document.querySelector("#container");
        let sum = document.querySelector(".all-price");
        let sad = "";
        container.addEventListener("click", function(event) {
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
                    dataCount.innerText = +dataCount.innerText + +resultValueInput.value;
                    sum.innerText = +sum.innerText + +price.innerText * resultValueInput.value;
                    sad = "";
                    resultValueInput.value = 0;
                } else if (resultValueInput.value > 0) {
                    sum.innerText = +sum.innerText + +price.innerText * resultValueInput.value;
                    sad +=
                        '<div class="title-busket" id="' +
                        "0" +
                        id +
                        '"><p class="name-text-basket">' +
                        name.innerText +
                        "</p>";
                    sad +=
                        '<p class="amount" id="' +
                        "00" +
                        id +
                        '">' +
                        resultValueInput.value +
                        "</p></div>";
                    document.getElementById("tovar").innerHTML += sad;
                    sad = "";
                    resultValueInput.value = 0;
                }
            }
        });
    }
};

//добвалеие в корзину из модального окна
document.addEventListener("click", function(e) {
    let id = e.target.id;
    let sad = "";
    let main = document.getElementById("fon");
    let itogSum = document.getElementById("itog-price");
    let sum = document.querySelector(".all-price");
    let name = document.getElementById("name");
    let resultValueInput = document.getElementById("input");
    if (e.target.classList.contains("button")) {
        let item = document.getElementById(`${"000" + id}`);
        if (item) {
            let dataCount = document.getElementById(`${"12" + id}`);
            dataCount.innerText = +dataCount.innerText + +resultValueInput.value;
            sum.innerText = +sum.innerText + itogSum.innerText * resultValueInput.value;
            sad = "";
            resultValueInput.value = 0;
            main.style.display = "none";
        } else if (resultValueInput.value > 0) {
            main.style.display = "none";
            sum.innerText = +sum.innerText + +itogSum.innerText * resultValueInput.value;
            sad +=
                '<div class="title-busket" id="title-busket"><p class="qw" id="' +
                "000" +
                id +
                '">' +
                name.innerText +
                "</p>";
            sad +=
                '<p class="amount" id="' +
                "12" +
                id +
                '">' +
                resultValueInput.value +
                "</p></div>";
            document.getElementById("tovar").innerHTML += sad;
        }
        obj = {};
    }
});