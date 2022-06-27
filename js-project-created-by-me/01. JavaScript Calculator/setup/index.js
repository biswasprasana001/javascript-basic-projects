const input = document.getElementById("input");
buttons = document.querySelectorAll("button");

function display(data = "") {
  if (data === "=") {
    input.value = eval(input.value);
  } else if (data == "X") {
    input.value += "*";
  } else if (data == "C") {
    input.value = "";
  } else {
    input.value += data;
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => display(e.target.innerText));
});

window.onerror = function () {
  alert("Please Input a Valid Expression");
  input.value = "";
};
