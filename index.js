let myLeads = [];
const inputEL = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEL.value);
    renderLeads();
});

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a href="https://${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`;
    }
    ulEl.innerHTML = listItems;
    inputEL.value = "";
}