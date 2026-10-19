const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	const prices = document.querySelectorAll('.price');
	let sum = 0;
	for(int i = 0; i < prices.length; i++)
	{
		sum += Number(prices[i].textContent.trim());
	}

	const oldRow = document.querySelector("#total-row")
	if(oldRow) oldRow.remove();

	const lastRow = document.createElement("tr");
	lastRow.id = "#total-row";
	
	const totalCell = document.createElement("td");
	totalCell.textContent = sum;

	lastRow.appendChild(totalCell);
	document.querySelector("table").appendChild("lastRow");
};

getSumBtn.addEventListener("click", getSum);

