
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
    const prices = document.querySelectorAll(".price");
    let sum = 0;

    for (let i = 0; i < prices.length; i++) {
        sum += Number(prices[i].textContent.trim());
    }

    // Remove the previous total row, if it exists
    const oldRow = document.querySelector("#total-row");
    if (oldRow) {
        oldRow.remove();
    }

    // Create a new row with a single cell
    const lastRow = document.createElement("tr");
    lastRow.id = "total-row";

    const totalCell = document.createElement("td");
    totalCell.textContent = sum;

    lastRow.appendChild(totalCell);
    document.querySelector("table").appendChild(lastRow);
};

getSumBtn.addEventListener("click", getSum);
