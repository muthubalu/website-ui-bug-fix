const menuItems = document.querySelectorAll(".sidebar a");

menuItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
        event.preventDefault();

        menuItems.forEach(function (menu) {
            menu.classList.remove("active");
        });

        item.classList.add("active");
    });
});

const refreshButton = document.getElementById("refreshStats");

refreshButton.addEventListener("click", function () {
    const statValues = document.querySelectorAll(".stat-card p");

    statValues[0].textContent = "1,320";
    statValues[1].textContent = "910";
    statValues[2].textContent = "$26,840";
});