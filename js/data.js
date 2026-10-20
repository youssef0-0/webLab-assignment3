const people = [
    { name: "Mona", age: 21, city: "Cairo" },
    { name: "Omar", age: 19, city: "Giza" },
    { name: "Sara", age: 24, city: "Alexandria" },
    { name: "Ali", age: 22, city: "Cairo" },
    { name: "Nour", age: 20, city: "Mansoura" },
    { name: "Hana", age: 18, city: "Giza" }
];

const searchInput = document.querySelector("#search");
const tableBody = document.querySelector("#people-table");
const resultCount = document.querySelector("#result-count");
const sortNameButton = document.querySelector("#sort-name");
const sortAgeButton = document.querySelector("#sort-age");

let currentPeople = [...people];
let nameAscending = true;
let ageAscending = true;

function renderTable(list) {
    tableBody.innerHTML = "";

    list.forEach(function (person) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = person.name;

        const ageCell = document.createElement("td");
        ageCell.textContent = person.age;

        const cityCell = document.createElement("td");
        cityCell.textContent = person.city;

        row.append(nameCell, ageCell, cityCell);
        tableBody.appendChild(row);
    });

    resultCount.textContent = list.length + " people found.";
}

function searchPeople() {
    const searchText = searchInput.value.trim().toLowerCase();

    const filteredPeople = currentPeople.filter(function (person) {
        return person.name.toLowerCase().includes(searchText) ||
            String(person.age).includes(searchText) ||
            person.city.toLowerCase().includes(searchText);
    });

    renderTable(filteredPeople);
}

searchInput.addEventListener("input", searchPeople);

sortNameButton.addEventListener("click", function () {
    currentPeople.sort(function (a, b) {
        return nameAscending
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
    });

    nameAscending = !nameAscending;
    searchPeople();
});

sortAgeButton.addEventListener("click", function () {
    currentPeople.sort(function (a, b) {
        return ageAscending ? a.age - b.age : b.age - a.age;
    });

    ageAscending = !ageAscending;
    searchPeople();
});

renderTable(currentPeople);
