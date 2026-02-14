// ================= ELEMENTS =================

const addInput = document.getElementById('toggleAdd');
const addDiv = document.querySelector(".add");

const nameInput = document.getElementById("ExpenseName");
const amountInput = document.getElementById("amount");
const dateInput = document.getElementById("expenseDate");
const typeInput = document.getElementById("ExpenseType");
const paymentInput = document.getElementById("paymentMethod");
const noteInput = document.getElementById("note");

const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("expenseBody");
const tableFoot = document.getElementById("expensefoot");
const exportBtn = document.getElementById("exportBtn");

const filters = document.querySelectorAll(".filter");
const headers = document.querySelectorAll("thead th");


addInput.addEventListener("click", ()=>{
    addDiv.style.display = addInput.checked ? "flex" : "none";
});


let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

headers.forEach(header => {

    const input = header.querySelector(".filter");

    if(input){

        header.addEventListener("click", (e)=>{

            // Prevent double trigger
            if(e.target.tagName === "INPUT") return;

            // Hide all filters first
            filters.forEach(f => {
                if(f !== input){
                    f.style.display = "none";
                    f.value = "";
                }
            });

            // Toggle current filter
            if(input.style.display === "block"){
                input.style.display = "none";
                input.value = "";
                render();
            } else {
                input.style.display = "block";
                input.focus();
            }
        });
    }
});

filters.forEach(input => {
    input.style.display = "none"; // hidden by default
    input.addEventListener("input", applyFilters);
});


function applyFilters(){

    const filterValues = {};

    filters.forEach(input => {
        const key = input.dataset.filter;
        filterValues[key] = input.value.toLowerCase();
    });

    tableBody.innerHTML = "";
    let total = 0;

    expenses.forEach((item,index)=>{

        let show = true;

        for(let key in filterValues){

            if(filterValues[key] !== ""){

                const itemValue = String(item[key]).toLowerCase();

                if(!itemValue.includes(filterValues[key])){
                    show = false;
                    break;
                }
            }
        }

        if(show){

            total += item.amount;

            const row = document.createElement("tr");

            row.innerHTML = `
            <td data-label="Sr No">${index +1}</td>
            <td data-label="Expense Name">${item.name}</td>
            <td data-label="Amount">${item.amount}</td>
            <td data-label="Date">${item.date}</td>
            <td data-label="Type">${item.type}</td>
            <td data-label="Payment">${item.pay}</td>
            <td data-label="Note">${item.note}</td>
            <td data-label="Action" ><button onclick="remove(${index})">🗑</button></td>
            `;

            tableBody.appendChild(row);
        }
    });

    tableFoot.textContent = "₹" + total;
}

addBtn.addEventListener("click", addExpense);

function addExpense(){

    const name = nameInput.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;
    const type = typeInput.value;
    const pay = paymentInput.value;
    const note = noteInput.value;

    if(name === "" || amount === 0){
        alert("Please enter Name and Amount");
        return;
    }

    const expense = { name, amount, date, type, pay, note };

    expenses.push(expense);

    save();
    render();
    clearForm();
}

function render(){

    filters.forEach(f => f.value = "");
    applyFilters();
}

function remove(index){
    expenses.splice(index,1);
    save();
    render();
}

function save(){
    localStorage.setItem("expenses", JSON.stringify(expenses));
}


function clearForm(){
    nameInput.value = "";
    amountInput.value = "";
    dateInput.value = "";
    typeInput.value = "";
    paymentInput.value = "";
    noteInput.value = "";
}

exportBtn.addEventListener("click", ()=>{

    let csv = "Sr No,Name,Amount,Date,Type,Payment,Note\n";

    expenses.forEach((item,index)=>{
        csv += `${index+1},${item.name},${item.amount},${item.date},${item.type},${item.pay},${item.note}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "expenses.csv";
    a.click();

    window.URL.revokeObjectURL(url);
});

render();
