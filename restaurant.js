const data_xml = `<stock>
  <section name="Pizza">
    <dish name="Carbonara" src="pizza/carbonara.jpg" price="145 грн."></dish>
    <dish name="Ocean taste" src="pizza/fish.jpg" price="215 грн."></dish>
    <dish name="Meat avalanche" src="pizza/meet.jpg" price="170 грн."></dish>
    <dish name="Prosciutto" src="pizza/proshytto.jpg" price="150 грн."></dish>
  </section>

  <section name="Pasta">
    <dish name="Bolognese" src="paste/bolognese.jpg" price="110 грн."></dish>
    <dish name="Classic " src="paste/carbonara.jpg" price="95 грн."></dish>
    <dish name="Chicken and Mushrooms" src="paste/chicken_mushrooms.jpg" price="80 грн."></dish>
    <dish name="Chicken and Spinach" src="paste/chicken_spinach.jpg" price="85 грн."></dish>
  </section>
</stock>`;

function addDish(wrapper_html, dishData_xml) {
  const name = dishData_xml.attributes.name.nodeValue;
  const img_src = dishData_xml.attributes.src.nodeValue;
  const price = dishData_xml.attributes.price.nodeValue;
  let item = document.createElement("div");
  item.setAttribute("class", "restaurant-item");
  item.innerHTML = `
    <span class="restaurant-item-title">${name}</span>
    <img class="restaurant-item-image" src="${img_src}">
    <div class="restaurant-item-details"> <div id="store"></div>
        <span class="restaurant-item-price">${price}</span>
        <button class="button button-primary restaurant-item-button" type="button">BUY</button>
    </div>
  `;
  button_html = item.getElementsByTagName("button")[0];
  button_html.addEventListener("click", addClick);
  wrapper_html.appendChild(item);
}

function addPizzaData(wrapper_html, stock_xml) {
  const parser = new DOMParser();
  const data = parser.parseFromString(stock_xml, "text/xml");
  const stock = data.childNodes[0];
  for (var j = 0; j < stock.children.length; ++j) {
    const section_xml = stock.children[j];
    const name = section_xml.attributes.name.nodeValue;
    const section_html = document.createElement("div");
    section_html.setAttribute("class", "container content-section");
    section_html.innerHTML = `
      <h2 class="section-header">${name}</h2>
      <div class="restaurant-items">
      </div>
    `;
    let restaurantItems_html = section_html.getElementsByClassName(
      "restaurant-items",
    )[0];
    for (var i = 0; i < section_xml.children.length; ++i) {
      const dish = section_xml.children[i];
      addDish(restaurantItems_html, dish);
    }
    wrapper_html.appendChild(section_html);
  }
}

if (document.readyState == "loading") {
  document.addEventListener("ContentLoaded", beforeLoad);
} else {
  beforeLoad();
}

function beforeLoad() {
  var restaurantItemButtons = document.getElementsByClassName(
    "restaurant-item-button",
  );

  let pizzas_html = document.getElementsByClassName("stock")[0];
  addPizzaData(pizzas_html, data_xml);

  for (var i = 0; i < restaurantItemButtons.length; i++) {
    restaurantItemButtons[i].addEventListener("click", addClick);
  }

  var removeorderItemButtons = document.getElementsByClassName("button-danger");
  for (var i = 0; i < removeorderItemButtons.length; i++) {
    removeorderItemButtons[i].addEventListener("click", deleteItem);
  }

  var orderQuantityInputs = document.getElementsByClassName(
    "order-quantity-input",
  );
  for (var i = 0; i < orderQuantityInputs.length; i++) {
    orderQuantityInputs[i].addEventListener("change", quantityChanged);
  }

  document
    .getElementsByClassName("button-purchase")[0]
    .addEventListener("click", purchaseClicked);
}

function addClick(event) {
  var restaurantItemContainer = event.target.parentElement.parentElement;
  var priceString = restaurantItemContainer.getElementsByClassName(
    "restaurant-item-price",
  )[0].innerText;
  var itemName = restaurantItemContainer.getElementsByClassName(
    "restaurant-item-title",
  )[0].innerText;
  var imageUrl = restaurantItemContainer.getElementsByClassName(
    "restaurant-item-image",
  )[0].src;
  addItemToorder(itemName, imageUrl, priceString);
  updateorderTotal();

  var img = restaurantItemContainer.children[1];
}

function deleteItem(event) {
  var buttonElement = event.target;
  buttonElement.parentElement.parentElement.remove();
  updateorderTotal();
}

function quantityChanged(event) {
  var quantityInput = event.target;
  if (isNaN(quantityInput.value) || quantityInput.value <= 0) {
    quantityInput.value = 1;
  }
  updateorderTotal();
}

function purchaseClicked() {
  alert("Thank you for your order!");
  var orderItemContainer = document.getElementsByClassName("order-items")[0];
  while (orderItemContainer.hasChildNodes()) {
    orderItemContainer.removeChild(orderItemContainer.firstChild);
  }
  updateorderTotal();
}

function addItemToorder(itemName, imageUrl, priceString) {
  var orderItemContainer = document.getElementsByClassName("order-items")[0];
  var orderItemNames = orderItemContainer.getElementsByClassName(
    "order-item-title",
  );
  for (var i = 0; i < orderItemNames.length; i++) {
    if (orderItemNames[i].innerText == itemName) {
      alert("This item is already in your order");
      return;
    }
  }
  var orderRow = document.createElement("div");
  orderRow.classList.add("order-row");
  orderRow.innerHTML = `
        <div class="order-item order-column">
            <img class="order-item-image" src="${imageUrl}" width="100" height="100">
            <span class="order-item-title">${itemName}</span>
        </div>
        <span class="order-price order-column">${priceString}</span>
        <div class="order-quantity order-column">
            <input class="order-quantity-input" min="1" type="number" value="1">
            <button class="button button-danger" type="button">REMOVE</button>
        </div>
    `;
  orderItemContainer.append(orderRow);
  orderRow
    .getElementsByClassName("button-danger")[0]
    .addEventListener("click", deleteItem);
  orderRow
    .getElementsByClassName("order-quantity-input")[0]
    .addEventListener("change", quantityChanged);
}

function updateorderTotal() {
  var orderRows = document.getElementsByClassName("order-row");
  var total = 0;
  for (var i = 0; i < orderRows.length; i++) {
    var orderRow = orderRows[i];
    var priceElement = orderRow.getElementsByClassName("order-price")[0];
    var quantityElement = orderRow.getElementsByClassName(
      "order-quantity-input",
    )[0];
    if (priceElement == null || quantityElement == null) continue;
    var price = parseFloat(priceElement.innerText.replace("гривен", ""));
    var quantity = parseInt(quantityElement.value);
    total += price * quantity;
  }

  document.getElementsByClassName("order-total-price")[0].innerText =
    Math.round(total * 100) / 100 + " гривен";
}
