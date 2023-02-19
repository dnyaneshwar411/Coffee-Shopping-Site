document.querySelector("#searchIcon").addEventListener("click", function () {
    document.querySelector("#navigatePage>.searchBar").classList.toggle("display");
})

document.querySelector("#cartIcon").addEventListener("click", function () {
    document.querySelector("#navigatePage>.itemList").classList.toggle("display");
})

document.querySelector("#fa-bars").addEventListener("click", function () {
    document.querySelector("#Home>nav>ul").classList.toggle("display");
})