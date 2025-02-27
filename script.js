function loadPage(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error("Page not found: " + page);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.error("Error loading page:", error));
}

document.addEventListener("DOMContentLoaded", function () {
    loadPage("home.html");
});

function askForPassword(page) {
    let password = prompt("Enter Password");
    if (password === "admin") {
        loadPage(page);
    } else {
        alert("Incorrect Password");
    }
}