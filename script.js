function addStudent() {
    // Get form values
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const course = document.getElementById("course").value;
    const email = document.getElementById("email").value;

    // Create a new row
    const table = document.getElementById("studentTable").querySelector("tbody");
    const row = table.insertRow();

    // Insert cells
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = age;
    row.insertCell(2).textContent = course;
    row.insertCell(3).textContent = gender;
    row.insertCell(4).textContent = email;

    // Create delete button
    const deleteCell = row.insertCell(5);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded";
    deleteButton.onclick = function () {
        table.deleteRow(row.rowIndex - 1); // Adjust for header row
    };
    deleteCell.appendChild(deleteButton);

    // Clear form
    document.getElementById("studentForm").reset();
}
