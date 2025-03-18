//your JS code here. If required.
document.getElementById("submit").addEventListener("click", function () {
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const isbn = document.getElementById("isbn").value.trim();

    if (!title || !author || !isbn) {
        alert("Please fill out all fields!");
        return;
    }

    const table = document.getElementById("book-list");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;

    table.appendChild(row);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";

    row.querySelector(".delete").addEventListener("click", function () {
        row.remove();
    });
});
