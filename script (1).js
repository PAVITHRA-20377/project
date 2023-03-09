function showAddCategory() {
  document.getElementById("empty").innerText = "";
  // document.getElementById("addCategory").classList.toggle("View")
  document.getElementById("addCategory").classList.add("View");
  document.getElementById("addProduct").classList.remove("View");
  document.getElementById("updateCategory").classList.remove("View");
  document.getElementById("updateProduct").classList.remove("View");
  if (Id !== null) {
    document.getElementById(Id).classList.remove("View");
  }
}

function showAddProduct() {
  document.getElementById("empty").innerText = "";
  // document.getElementById("addProduct").classList.toggle("View")
  document.getElementById("addProduct").classList.add("View");
  document.getElementById("addCategory").classList.remove("View");
  document.getElementById("updateCategory").classList.remove("View");
  document.getElementById("updateProduct").classList.remove("View");
  if (Id !== null) {
    document.getElementById(Id).classList.remove("View");
  }
}

Id = null;
function showProducts(show) {
  document.getElementById("addProduct").classList.remove("View");
  document.getElementById("addCategory").classList.remove("View");
  document.getElementById("updateCategory").classList.remove("View");
  document.getElementById("updateProduct").classList.remove("View");
  catId = show.target.parentElement.attributes.id.value;
  if (Products !== null) {
    let product = Products.filter((item) => {
      return item.Id == catId;
    });
    if (product.length == 0) {
      document.getElementById("empty").innerText = "Products are Empty";
    } else {
      document.getElementById("empty").innerText = "";
    }
  } else {
    document.getElementById("empty").innerText = "Products are Empty";
  }
  if (Id == null) {
    Id = show.target.hash;
    Id = Id.slice(1);
    document.getElementById(Id).classList.add("View");
  } else {
    document.getElementById(Id).classList.remove("View");
    Id = null;
    Id = show.target.hash;
    Id = Id.slice(1);
    document.getElementById(Id).classList.add("View");
  }
}

var categories = JSON.parse(localStorage.getItem("Category"));
var Products = JSON.parse(localStorage.getItem("Product"));
var Cart = JSON.parse(sessionStorage.getItem("Cart"));

if (categories == null) {
  document.getElementById("empty").innerText =
    "Category and Products are Empty";
}

var user = JSON.parse(sessionStorage.getItem("user"))
if (user!==null) {
  document.getElementById("toast").innerText = "Welcome "+ user.name
}

function logout(){
  window.location.href = "file:///D:/Besant%20Technology/JavaScript/Task/loginPage.html"
  sessionStorage.clear()
}

function showUpdateCategory() {
  // document.getElementById("updateCategory").classList.toggle("View")
  document.getElementById("empty").innerText = "";
  document.getElementById("addCategory").classList.remove("View");
  document.getElementById("addProduct").classList.remove("View");
  document.getElementById("updateProduct").classList.remove("View");
  document.getElementById("updateCategory").classList.add("View");
  if (Id !== null) {
    document.getElementById(Id).classList.remove("View");
  }
  if (categories !== null) {
    if (document.getElementById("updateCategorySelect").options.length == 1) {
      for (let i = 0; i < categories.length; i++) {
        let category = categories[i].Name;
        let categoryID = categories[i].Id;
        let optionElement = document.createElement("option");
        optionElement.setAttribute("value", categoryID);
        optionElement.innerText = category;
        document
          .getElementById("updateCategorySelect")
          .appendChild(optionElement);
      }
    } else {
      document.getElementById("catdefault").removeAttribute("disabled");
      document.getElementById("catdefault").setAttribute("selected", "");
      document.getElementById("catName").value = "";
      document.getElementById("catId").value = "";
      for (let index = 0; index < categories.length; index++) {
        // document.getElementById("updateCategorySelect").children[1].remove()
        document.getElementById("updateCategorySelect").options.remove(1);
      }
      for (let i = 0; i < categories.length; i++) {
        let category = categories[i].Name;
        let categoryID = categories[i].Id;
        let optionElement = document.createElement("option");
        optionElement.setAttribute("value", categoryID);
        optionElement.innerText = category;
        document
          .getElementById("updateCategorySelect")
          .appendChild(optionElement);
      }
      document.getElementById("catdefault").setAttribute("disabled", "");
    }
  }
}

function showUpdateProduct() {
  document.getElementById("empty").innerText = "";
  // document.getElementById("updateProduct").classList.toggle("View")
  document.getElementById("addCategory").classList.remove("View");
  document.getElementById("addProduct").classList.remove("View");
  document.getElementById("updateCategory").classList.remove("View");
  document.getElementById("updateProduct").classList.add("View");
  if (Id !== null) {
    document.getElementById(Id).classList.remove("View");
  }
  if (categories !== null) {
    if (document.getElementById("selectProductCategory").options.length == 1) {
      for (let i = 0; i < categories.length; i++) {
        let category = categories[i].Name;
        let categoryID = categories[i].Id;
        let optionElement = document.createElement("option");
        optionElement.setAttribute("value", categoryID);
        optionElement.innerText = category;
        document
          .getElementById("selectProductCategory")
          .appendChild(optionElement);
      }
    } else {
      document.getElementById("prodefault").removeAttribute("disabled");
      document.getElementById("prodefault").setAttribute("selected", "");
      document.getElementById("default").removeAttribute("disabled", "");
      document.getElementById("default").removeAttribute("selected");
      document.getElementById("catchange").removeAttribute("disabled");
      document.getElementById("catchange").setAttribute("selected", "");
      document.getElementById("Name").value = "";
      document.getElementById("Image").value = "";
      document.getElementById("Price").value = "";
      document.getElementById("MRP").value = "";
      for (let index = 0; index < categories.length; index++) {
        document.getElementById("selectProductCategory").options.remove(1);
      }
      for (let i = 0; i < categories.length; i++) {
        let category = categories[i].Name;
        let categoryID = categories[i].Id;
        let optionElement = document.createElement("option");
        optionElement.setAttribute("value", categoryID);
        optionElement.innerText = category;
        document
          .getElementById("selectProductCategory")
          .appendChild(optionElement);
      }
      var length =
        document.getElementById("updateProductSelect").options.length - 1;
      for (let index = 0; index < length; index++) {
        document.getElementById("updateProductSelect").options.remove(1);
      }
      var length1 =
        document.getElementById("productCategoryChange").options.length - 1;
      for (let index = 0; index < length1; index++) {
        document.getElementById("productCategoryChange").options.remove(1);
      }
      document.getElementById("prodefault").setAttribute("disabled", "");
      document.getElementById("default").setAttribute("selected", "");
      // document.getElementById("catchange").setAttribute("disabled","")
    }
  }
}

if (categories !== null) {
  for (let i = 0; i < categories.length; i++) {
    let category = categories[i].Name;
    let categoryID = categories[i].Id;

    let categoryElement = document.createElement("div");
    categoryElement.setAttribute("id", "categoryList" + i);
    categoryElement.setAttribute("class", "categoryList");
    // categoryElement.setAttribute("name","categoryList")

    let divElement = document.createElement("div");
    divElement.setAttribute("id", category);

    let divElement1 = document.createElement("div");
    divElement1.setAttribute("id", "categoryName");

    let headElement = document.createElement("h3");
    headElement.innerText = category;

    let divElement2 = document.createElement("div");
    divElement2.setAttribute("id", category + i);
    divElement2.setAttribute("class", "productCategory");

    divElement1.appendChild(headElement);
    divElement.appendChild(divElement1);
    document.getElementById("categoryDetails").appendChild(categoryElement);
    document.getElementById("categoryList" + i).appendChild(divElement);
    document.getElementById("categoryList" + i).appendChild(divElement2);

    let anchorElement = document.createElement("a");
    let listElement = document.createElement("li");
    listElement.setAttribute("id", i);
    anchorElement.setAttribute("href", "#" + "categoryList" + i);
    anchorElement.setAttribute("onclick", "showProducts(event)");
    anchorElement.innerHTML = category;

    listElement.appendChild(anchorElement);
    document.getElementById("sideCategory").appendChild(listElement);

    let optionElement = document.createElement("option");
    optionElement.setAttribute("value", categoryID);
    optionElement.innerText = category;
    document.getElementById("categorySelect").appendChild(optionElement);
  }
}

if (Products !== null) {
  
  for (let i = 0; i < categories.length; i++) {
    let categoryID = categories[i].Id;
    // let findCategory = categories.findIndex((item)=>item.Id == categories[i].Id)
    let category = categories[i].Name;

    window[category] = Products.filter(function (item) {
      return item.Id == categoryID;
    });

    if (window[category].length > 0) {
      for (let index = 0; index < window[category].length; index++) {
        let divElement = document.createElement("div");
        divElement.setAttribute("class", "card");

        let divElement1 = document.createElement("div");
        let ImageElement = document.createElement("img");
        ImageElement.setAttribute("class", "img");
        ImageElement.setAttribute("src", window[category][index].Image);
        ImageElement.setAttribute("alt", "image");

        let nameElement = document.createElement("div");
        // nameElement.setAttribute("id","name")
        nameElement.innerText = window[category][index].Name;

        let priceElement = document.createElement("div");
        priceElement.setAttribute("id", "price");
        priceElement.setAttribute("class", "price");
        priceElement.innerText = "₹" + window[category][index].Price;

        let divElement2 = document.createElement("div");
        let buttonElement = document.createElement("button");
        buttonElement.innerHTML = "Add";
        buttonElement.setAttribute("onclick", "addCart(event)");
        buttonElement.setAttribute("class", "btn btn-primary");

        divElement1.appendChild(ImageElement);
        divElement.appendChild(divElement1);
        divElement.appendChild(nameElement);
        if (window[category][index].MRP !== "") {
          let mrpElement = document.createElement("div");
          let strikeElement = document.createElement("strike");
          strikeElement.innerText = "M.R.P ₹" + window[category][index].MRP;
          mrpElement.appendChild(strikeElement);
          divElement.appendChild(mrpElement);
        }
        divElement.appendChild(priceElement);
        divElement2.appendChild(buttonElement);
        divElement.appendChild(divElement2);
        document.getElementById(category + i).appendChild(divElement);
      }
    }
  }
}

function findCategoryIndex(cat) {
  var category = JSON.parse(localStorage.getItem("Category"));
  if (category == null) {
    let findCategory = -1;
    return findCategory;
  }
  if (category.length >= 1) {
    let findCategory = category.findIndex((item) => item.Name === cat);
    return findCategory;
  }
}

function addCategory() {
  var category = JSON.parse(localStorage.getItem("Category")) || [];
  var catName = document.getElementById("addCate").value;

  var findCategory = findCategoryIndex(catName);
  if (findCategory >= 0) {
    alert("Cetagory already existed");
  } else {
    if (catName == "") {
      alert("Category name can't be empty.");
    } else {
      category.push({ Id: category.length, Name: catName });
      localStorage.setItem("Category", JSON.stringify(category));
      document.location.reload(true);
    }
  }
}

function findName(name) {
  var category = JSON.parse(localStorage.getItem("Product"));
  if (category == null) {
    let findName = -1;
    return findName;
  }
  if (category.length >= 1) {
    let findName = category.findIndex((item) => item.Name === name);
    return findName;
  }
}

function addProduct() {
  var Product = JSON.parse(localStorage.getItem("Product")) || [];
  // var length = Product.length

  var Category = document.querySelector("#categorySelect").value;
  var Image = document.getElementById("addImage").value;
  var Name = document.getElementById("addName").value;
  var MRP = document.getElementById("addMRP").value;
  var Price = document.getElementById("addPrice").value;
  // console.log(Category)
  if (Category == "Select Category") {
    alert("Select a Categoty to Save");
  } else {
    var repeatedName = findName(Name);
    if (repeatedName >= 0) {
      alert("Name Already Existed");
    } else {
      Product.push({ Id: Category, Image, Name, MRP, Price });
      localStorage.setItem("Product", JSON.stringify(Product));
      document.location.reload(true);
    }
  }
}
function selectCategory() {
  var select = document.querySelector("#updateCategorySelect");
  var categoryId = select.value;
  var categoryName = select.options[select.selectedIndex].text;

  document.getElementById("catName").value = categoryName;
  document.getElementById("catId").value = categoryId;
  document.getElementById("catdefault").setAttribute("disabled", "");
}

function updateCategory() {
  var select = document.querySelector("#updateCategorySelect");
  var Id = select.value;
  // var categoryName = select.options[select.selectedIndex].text;
  var updatedName = document.getElementById("catName").value;

  if (updatedName !== categories[Id].Name) {
    categories[Id].Name = updatedName;
    localStorage.setItem("Category", JSON.stringify(categories));
  }
  location.reload();
}

function deleteCategory() {
  var Product = JSON.parse(localStorage.getItem("Product"));
  var select = document.querySelector("#updateCategorySelect");
  var Id = select.value;
  // if (Product!==null){
  //    var findProducts = Product.filter((item)=>{return item.Id==Id})
  // }
  if (Product == null) {
    if (categories.length > 1) {
      categories.splice(Id, 1);
      localStorage.setItem("Category", JSON.stringify(categories));
    } else {
      localStorage.clear();
    }
  } else {
    var deleteProduct = Product.filter((item) => {
      return item.Id !== Id;
    });

    // if(categories!==null){
    if (deleteProduct.length !== 0) {
      for (let index = 0; index < categories.length; index++) {
        if (categories[index].Id == Id) {
          categories.splice(index, 1);
        }
      }
      localStorage.setItem("Category", JSON.stringify(categories));
      localStorage.setItem("Product", JSON.stringify(deleteProduct));
    } else {
      localStorage.clear();
    }
  }
  window.location.reload(true);
}

function selectProductCategory() {
  document.getElementById("default").removeAttribute("disabled", "");
  document.getElementById("default").removeAttribute("selected");
  var select = document.querySelector("#selectProductCategory");
  var categoryId = select.value;
  let product = Products.filter((item) => {
    return item.Id == categoryId;
  });
  var length = document.getElementById("updateProductSelect").options.length;

  for (let index = 0; index < length; index++) {
    document.getElementById("updateProductSelect").options.remove(1);
  }
  for (let i = 0; i < product.length; i++) {
    let showProduct = product[i].Name;
    let id = product[i].Id;
    let optionElement = document.createElement("option");
    optionElement.setAttribute("value", id);
    optionElement.innerText = showProduct;
    document.getElementById("updateProductSelect").appendChild(optionElement);
  }
  document.getElementById("default").setAttribute("selected", "");
}

function changeProductCategory() {
  var select = document.querySelector("#updateProductSelect");
  var catId = select.value;
  var name = select.options[select.selectedIndex].text;
  let product = Products.filter((item) => {
    return item.Id == catId;
  });
  let i = product.findIndex((item) => item.Name == name);
  // if (document.getElementById('changeProductCategory').options.length == 1) {
  var length = document.getElementById("productCategoryChange").options.length;

  for (let index = 0; index < length; index++) {
    document.getElementById("productCategoryChange").options.remove(1);
  }
  for (let idx = 0; idx < categories.length; idx++) {
    let category = categories[idx].Name;
    let categoryID = categories[idx].Id;
    let optionElement = document.createElement("option");
    optionElement.setAttribute("value", categoryID);
    optionElement.innerText = category;
    if (catId == categoryID) {
      optionElement.setAttribute("selected", "selected");
    }
    document.getElementById("productCategoryChange").appendChild(optionElement);
  }
  document.getElementById("Name").value = product[i].Name;
  document.getElementById("Image").value = product[i].Image;
  document.getElementById("Price").value = product[i].Price;
  document.getElementById("MRP").value = product[i].MRP;
  document.getElementById("default").setAttribute("disabled", "");
  // }
}

function updateProduct() {
  var Category = document.querySelector("#productCategoryChange").value;
  var Image = document.getElementById("Image").value;
  var Name = document.getElementById("Name").value;
  var MRP = document.getElementById("MRP").value;
  var Price = document.getElementById("Price").value;

  var i = document.querySelector("#updateProductSelect").options.selectedIndex;
  var name = document.querySelector("#updateProductSelect").options[i]
    .innerText;
  let index = Products.findIndex((item) => item.Name == name);

  if (Category !== Products[index].Id) {
    Products[index].Id = Category;
  }
  if (Image !== Products[index].Image) {
    Products[index].Image = Image;
  }
  if (Name !== Products[index].Name) {
    Products[index].Name = Name;
  }
  if (MRP !== Products[index].MRP) {
    Products[index].MRP = MRP;
  }
  if (Price !== Products[index].Price) {
    Products[index].Price = Price;
  }
  localStorage.setItem("Product", JSON.stringify(Products));
  location.reload();
}

function deleteProduct() {
  var Name = document.getElementById("Name").value;
  var index = Products.findIndex((item) => item.Name == Name);

  Products.splice(index, 1);
  localStorage.setItem("Product", JSON.stringify(Products));
  location.reload();
}

if (Cart !== null) {
  document.getElementById("rightTop").classList.add("View");
  document.getElementById("rightBottom").classList.add("View");
  document.getElementById("cartEmpty").classList.add("None");

  // if (cart!==null) {
  // var Cart = JSON.parse(sessionStorage.getItem("Cart"))
  // let idx = Cart.findIndex((item)=>item.Name===Name)
  for (let index = 0; index < Cart.length; index++) {
    var Name1 = Cart[index].Name;

    var Price1 = Cart[index].Price;
    var Np = Cart[index].NP;

    let trElement = document.createElement("tr");
    trElement.setAttribute("style", "font-size: small");
    let snoElement = document.createElement("td");
    snoElement.innerText =
      document.getElementById("tbody").childElementCount + 1;
    let productElement = document.createElement("td");
    productElement.innerText = Name1;

    let priceElement = document.createElement("td");
    priceElement.innerText = Price1;
    let quantityElement = document.createElement("td");
    let divElement = document.createElement("div");
    divElement.setAttribute("style", "display:flex");
    let spanElemnent1 = document.createElement("span");
    spanElemnent1.innerText = "remove";
    spanElemnent1.setAttribute("class", "material-symbols-outlined");
    spanElemnent1.setAttribute("onclick", "subQuantity(event)");
    let inputElement = document.createElement("input");
    inputElement.setAttribute("size", "1");
    inputElement.setAttribute("maxlength", "3");
    inputElement.setAttribute("value", Np / Price1);
    inputElement.setAttribute("min", "1");
    inputElement.setAttribute("id", "ip");
    inputElement.setAttribute("onchange", "netPrice(event)");
    inputElement.setAttribute("style", "text-align:center");
    let spanElemnent2 = document.createElement("span");
    spanElemnent2.innerText = "add";
    spanElemnent2.setAttribute("class", "material-symbols-outlined");
    spanElemnent2.setAttribute("onclick", "addQuantity(event)");
    let netpriceElement = document.createElement("td");
    netpriceElement.innerText = Np;

    trElement.appendChild(snoElement);
    trElement.appendChild(productElement);
    if (Cart[index].MRP !== null || "") {
      var MRP1 = Cart[index].MRP;
      let mrpElement = document.createElement("td");
      mrpElement.innerText = MRP1;
      trElement.appendChild(mrpElement);
    }
    trElement.appendChild(priceElement);
    trElement.appendChild(quantityElement);
    quantityElement.appendChild(divElement);
    divElement.appendChild(spanElemnent1);
    divElement.appendChild(inputElement);
    divElement.appendChild(spanElemnent2);
    trElement.appendChild(netpriceElement);
    document.getElementById("tbody").appendChild(trElement);
  }
  document.getElementById("total").value = totalCost();
  document.getElementById("totalsave").value = totalSaving();
}

function addCart(add) {
  document.getElementById("rightTop").classList.add("View");
  document.getElementById("rightBottom").classList.add("View");
  document.getElementById("cartEmpty").classList.add("None");
  // console.log(add)

  var cart = JSON.parse(sessionStorage.getItem("Cart")) || [];
  selectedCard = add.target.parentElement.parentElement;
  var Name = selectedCard.children[1].innerText;

  let i = Products.findIndex((item) => item.Name === Name);
  var length = document.getElementById("tbody").childElementCount;
  let MRP = Products[i].MRP;
  let Price = Products[i].Price;
  let categoryId = Products[i].Id;
  if (cart !== null) {
    let idx = cart.findIndex((item) => item.Name === Name);

    if (length == 0 || idx == -1) {
      cart.push({ Name, categoryId, MRP, Price, NP: Price });
      sessionStorage.setItem("Cart", JSON.stringify(cart));
      var Cart = JSON.parse(sessionStorage.getItem("Cart"));
      // if (cart!==null) {
      // let idx = Cart.findIndex((item)=>item.Name===Name)
      for (let index = Cart.length - 1; index < Cart.length; index++) {
        var Name1 = Cart[index].Name;
        var MRP1 = Cart[index].MRP;
        var Price1 = Cart[index].Price;
        var Np = Cart[index].NP;

        let trElement = document.createElement("tr");
        trElement.setAttribute("style", "font-size: small");
        let snoElement = document.createElement("td");
        snoElement.innerText =
          document.getElementById("tbody").childElementCount + 1;
        let productElement = document.createElement("td");
        productElement.innerText = Name1;
        let mrpElement = document.createElement("td");
        mrpElement.innerText = MRP1;
        let priceElement = document.createElement("td");
        priceElement.innerText = Price1;
        let quantityElement = document.createElement("td");
        let divElement = document.createElement("div");
        divElement.setAttribute("style", "display:flex");
        let spanElemnent1 = document.createElement("span");
        spanElemnent1.innerText = "remove";
        spanElemnent1.setAttribute("class", "material-symbols-outlined");
        spanElemnent1.setAttribute("onclick", "subQuantity(event)");
        let inputElement = document.createElement("input");
        inputElement.setAttribute("size", "1");
        inputElement.setAttribute("maxlength", "3");
        inputElement.setAttribute("value", "1");
        inputElement.setAttribute("min", "1");
        inputElement.setAttribute("readonly", "");
        inputElement.setAttribute("onchange", "netPrice(event)");
        inputElement.setAttribute("style", "text-align:center");
        let spanElemnent2 = document.createElement("span");
        spanElemnent2.innerText = "add";
        spanElemnent2.setAttribute("class", "material-symbols-outlined");
        spanElemnent2.setAttribute("onclick", "addQuantity(event)");
        let netpriceElement = document.createElement("td");
        // netpriceElement.setAttribute("onchange","totalCost()")
        netpriceElement.innerText = Np;

        trElement.appendChild(snoElement);
        trElement.appendChild(productElement);
        trElement.appendChild(mrpElement);
        trElement.appendChild(priceElement);
        trElement.appendChild(quantityElement);
        quantityElement.appendChild(divElement);
        divElement.appendChild(spanElemnent1);
        divElement.appendChild(inputElement);
        divElement.appendChild(spanElemnent2);
        trElement.appendChild(netpriceElement);
        document.getElementById("tbody").appendChild(trElement);
      }
    }
    if (idx >= 0) {
      var Cart = JSON.parse(sessionStorage.getItem("Cart"));
      let idx = Cart.findIndex((item) => item.Name === Name);
      var tbody = document.getElementById("tbody");
      var tr = tbody.children[idx];
      var price = Number(tr.cells[3].innerText);
      var input = Number(tr.cells[4].children[0].children[1].value);
      var output = input + 1;
      tr.cells[4].children[0].children[1].value = output;
      var np = output * price;
      tr.children[5].innerHTML = np;
      if (np !== Cart[idx].NP) {
        Cart[idx].NP = np;
      }
      sessionStorage.setItem("Cart", JSON.stringify(Cart));
    }
    document.getElementById("total").value = totalCost();
    document.getElementById("totalsave").value = totalSaving();
  }
}

function subQuantity(sub) {
  var Cart = JSON.parse(sessionStorage.getItem("Cart"));
  selectedTr = sub.target.parentElement.parentElement.parentElement;
  var Name = selectedTr.cells[1].innerText;
  var ip = sub.target.parentElement.children[1].value;
  var input = Number(ip);
  var output = input - 1;
  sub.target.parentElement.children[1].value = output;
  if (output == 0) {
    trdelete = selectedTr.remove();
    var table = document.getElementById("tbody").childElementCount;
    for (let index = 0; index < table; index++) {
      document.getElementById("tbody").children[index].cells[0].innerText =
        index + 1;
    }
    if (Cart.length == 1) {
      sessionStorage.clear();
    } else {
      let i = Cart.findIndex((item) => item.Name === Name);
      Cart.splice(i, 1);
      sessionStorage.setItem("Cart", JSON.stringify(Cart));
    }
  } else {
    var Name = selectedTr.children[1].innerText;
    let i = Cart.findIndex((item) => item.Name === Name);
    var Price = selectedTr.children[3].innerText;
    var np = Price * output;
    selectedTr.cells[5].innerHTML = np;
    if (Price !== np) {
      Cart[i].NP = np;
    }
    sessionStorage.setItem("Cart", JSON.stringify(Cart));

    // selectedTr=null;
  }
  var table = document.getElementById("tbody").childElementCount;
  if (table == 0) {
    document.getElementById("rightTop").classList.remove("View");
    document.getElementById("rightBottom").classList.remove("View");
    document.getElementById("cartEmpty").classList.remove("None");
  } else {
    document.getElementById("total").value = totalCost();
    document.getElementById("totalsave").value = totalSaving();
  }
}

function addQuantity(add) {
  var Cart = JSON.parse(sessionStorage.getItem("Cart"));
  var ip = add.target.parentElement.children[1].value;
  var input = Number(ip);
  var output = input + 1;
  add.target.parentElement.children[1].value = output;
  selectedTr = add.target.parentElement.parentElement.parentElement;
  var Name = selectedTr.children[1].innerText;
  let i = Cart.findIndex((item) => item.Name === Name);
  var Price = selectedTr.children[3].innerText;
  var np = Price * output;
  selectedTr.cells[5].innerHTML = np;
  if (Price !== np) {
    Cart[i].NP = np;
  }
  sessionStorage.setItem("Cart", JSON.stringify(Cart));
  document.getElementById("total").value = totalCost();
  document.getElementById("totalsave").value = totalSaving();
  // console.log(add)
}

function totalCost() {
  var Cart = JSON.parse(sessionStorage.getItem("Cart"));
  var totalcost = null;
  for (let index = 0; index < Cart.length; index++) {
    var total = Number(
      document.getElementById("tbody").children[index].cells[5].innerText
    );
    totalcost = total + totalcost;
  }
  return totalcost;
}

function totalSaving() {
  var table = document.getElementById("tbody").childElementCount;
  var totalmrp = null;
  var totalcost = null;
  for (let index = 0; index < table; index++) {
    var mrp = Number(
      document.getElementById("tbody").children[index].cells[2].innerText
    );
    // if(document.getElementById("tbody").children[index].cells[2].innerText ==""){
    //     var price = document.getElementById("tbody").children[index].cells[3].innerText
    //     totalCost() = totalCost()-price
    // }
    if (
      document.getElementById("tbody").children[index].cells[2].innerText !== ""
    ) {
      var Q =
        document.getElementById("tbody").children[index].cells[4].children[0]
          .children[1].value;
      var total = mrp * Q;
      totalmrp = total + totalmrp;
      var total = Number(
        document.getElementById("tbody").children[index].cells[5].innerText
      );
      totalcost = total + totalcost;
      var totalsave = totalmrp - totalcost;
    }
  }
  return totalsave;
}

function checkOut() {
  var Cart = JSON.parse(sessionStorage.getItem("Cart"));
  var table = document.getElementById("modtbody").childElementCount;
  if (table !== 0) {
    for (let i = 0; i < table; i++) {
      document.getElementById("modtbody").children[0].remove();
    }
    // document.getElementById("modtbody").children.remove()
  }
  for (let index = 0; index < Cart.length; index++) {
    var Name = Cart[index].Name;
    var MRP = Cart[index].MRP;
    var Price = Cart[index].Price;
    var Np = Cart[index].NP;

    let trElement = document.createElement("tr");
    trElement.setAttribute("style", "font-size: small");
    let snoElement = document.createElement("td");
    snoElement.innerText = index + 1;
    let productElement = document.createElement("td");
    productElement.innerText = Name;
    let mrpElement = document.createElement("td");
    mrpElement.innerText = MRP;
    let priceElement = document.createElement("td");
    priceElement.innerText = Price;
    let quantityElement = document.createElement("td");
    quantityElement.innerText = Np / Price;
    let netpriceElement = document.createElement("td");
    netpriceElement.innerText = Np;

    trElement.appendChild(snoElement);
    trElement.appendChild(productElement);
    trElement.appendChild(mrpElement);
    trElement.appendChild(priceElement);
    trElement.appendChild(quantityElement);
    trElement.appendChild(netpriceElement);
    document.getElementById("modtbody").appendChild(trElement);
  }
  document.getElementById("total1").value = totalCost();
  document.getElementById("totalsave1").value = totalSaving();
}

function balanceAmount() {
  var amount = document.getElementById("amount").value;
  var balance = amount - totalCost();
  if (amount == "") {
    document.getElementById("balance").value = "";
  } else {
    document.getElementById("balance").value = balance;
  }
}

var Day = new Date().getDate().toString();
var Month = (new Date().getMonth() + 1).toString();
var Year = new Date().getFullYear().toString();

function confirmOrder() {
  var orders = JSON.parse(localStorage.getItem("Orders")) || [];
  var orderLists = JSON.parse(localStorage.getItem("OrderList")) || [];
  var Cart = JSON.parse(sessionStorage.getItem("Cart"));
  var Date = Year + Month + Day;
  var Name = "G3RMSL";
  // var length = orders.length + 01
  var length = orderLists.length + 1;
  var Id = Name.concat(Date).concat(length);
  var Phno = document.getElementById("phno").value;
  var Total = totalCost();
  var Saving = totalSaving();
  for (let index = 0; index < Cart.length; index++) {
    Cart[index].Id = Id;
  }
  if (Phno == "") {
    alert("Phone Number is empty");
  } else {
    for (let index = 0; index < Cart.length; index++) {
      var Id = Cart[index].Id;
      var Category = Cart[index].categoryId;
      var Name = Cart[index].Name;
      var MRP = Cart[index].MRP;
      var Price = Cart[index].Price;
      var NP = Cart[index].NP;
      orders.push({ Id, Category, Name, MRP, Price, NP });
    }
    orderLists.push({ Id, orderNo: "Order" + length, Phno, Total, Saving });
    localStorage.setItem("Orders", JSON.stringify(orders));
    localStorage.setItem("OrderList", JSON.stringify(orderLists));
    sessionStorage.clear();
  }
  var orderList = JSON.parse(localStorage.getItem("OrderList"));
  var idx = orderList.length - 1;
  window.open(
    "file:///D:/Besant%20Technology/JavaScript/Project/grid2/order.html#orderdetails" +
      "?" +
      idx
  );
  location.reload();
}

function ordersDetail() {
  var orders = JSON.parse(localStorage.getItem("OrderList"));
  var table = document.getElementById("orderstbody").childElementCount;
  if (table !== 0) {
    for (let i = 0; i < table; i++) {
      document.getElementById("orderstbody").children[0].remove();
    }
    // document.getElementById("modtbody").children.remove()
  }
  if (orders !== null) {
    for (let index = 0; index < orders.length; index++) {
      var Id = orders[index].Id;
      var orderNo = orders[index].orderNo;
      var Phno = orders[index].Phno;
      var Total = orders[index].Total;

      let trElement = document.createElement("tr");
      trElement.setAttribute("style", "font-size: small");
      let snoElement = document.createElement("td");
      snoElement.innerText = index + 1;
      let idElement = document.createElement("td");
      idElement.innerText = Id;
      let orderNoElement = document.createElement("td");
      orderNoElement.innerText = orderNo;
      let phnoElement = document.createElement("td");
      phnoElement.innerText = Phno;
      let totalElement = document.createElement("td");
      totalElement.innerText = Total;

      trElement.appendChild(snoElement);
      trElement.appendChild(idElement);
      trElement.appendChild(orderNoElement);
      trElement.appendChild(phnoElement);
      trElement.appendChild(totalElement);
      document.getElementById("orderstbody").appendChild(trElement);
    }
  }
}
