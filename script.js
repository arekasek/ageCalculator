let incorrect = document.getElementById("incorrect");
let send = document.getElementById("send");
const Yinfo = document.querySelector(".date :nth-child(3)");

console.log(incorrect);

send.addEventListener("click", () => {
  let day = document.getElementById("day1").value;
  let month = document.getElementById("month1").value;
  let year = document.getElementById("year1").value;

  if (day !== "" && month !== "" && year !== "") {
    console.log(day);
  } else {
    incorrect.style.visibility = "visible";
    incorrect.innerHTML = "This field is required";
    console.log(Date(day, month, year));
  }
});
