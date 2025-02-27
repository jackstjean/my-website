function loadPage(page) {
    let path;

    // If the page is already in a subfolder (contains '/') use it as is
    if (page.includes('/')) {
        path = page;
    }
    // If it's a wiki page, add the 'wiki/' prefix
    else if (page.startsWith('wiki')) {
        path = `wiki/${page}.html`;
    }
    // Otherwise assume its a normal site page in root directory 
    else {
        path = page;
    }

    fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error("Page not found: " + path);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.error("Error loading path:", error))
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