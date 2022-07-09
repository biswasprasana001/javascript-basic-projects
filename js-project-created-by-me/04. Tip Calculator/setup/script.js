// When the page loads, the tip value is not shown
document.querySelector(".totalTip").style.display = "none";

// This will run when the calculate button is clicked
document.querySelector("#calculate").onclick = function () {
  calculateTip();
};

const calculateTip = () => {
  const billAmount = document.querySelector("#billAmount").value;
  let serviceQuality;
  if (document.querySelector("#outstanding").checked) {
    serviceQuality = document.querySelector("#outstanding").value;
  }
  if (document.querySelector("#awesome").checked) {
    serviceQuality = document.querySelector("#awesome").value;
  }
  if (document.querySelector("#ok").checked) {
    serviceQuality = document.querySelector("#ok").value;
  }
  let totalPeople = document.querySelector("#totalPeople").value;
  console.log(billAmount, serviceQuality, totalPeople);
  if (billAmount === "") {
    window.alert("Please Enter Some Values");
    location.reload();
    return;
  }
  if (totalPeople === "" || totalPeople <= 1) {
    totalPeople = 1;
    document.querySelector("#each").style.display = "none";
  } else {
    document.querySelector("#each").style.display = "block";
  }
  let total = (billAmount * serviceQuality) / totalPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  document.querySelector(".totalTip").style.display = "block";
  document.querySelector("#tip").innerHTML = `Rs. ${total}`;
};
