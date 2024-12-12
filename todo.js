const inputBox = document.getElementById("inputBox"); // Variable InputBox
const clearList = document.getElementById("clearList"); // Variable clearList

// this function for input and List
function addTask() {
  //inputBox is empty
  if (inputBox.value === "") {
    alert("Sollen Sie etwas schreiben"); //Alarm
  } else {
    // creat List inside clearList
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    clearList.appendChild(li);
    //creat Span (X)
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
  }
  inputBox.value = ""; // Still again empty
  saveDate(); // savinng the data
}

//AddEventListener for Click
clearList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked"); // Checke the Line
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove(); //Remove this line
    }
  },
  false
);

// for saving the date
function saveDate() {
  localStorage.setItem("data", clearList.innerHTML);
}
function showTask() {
  clearList.innerHTML = localStorage.getItem("data");
}
showTask();
