console.log("testing...");

console.log(num1);

var add = document.getElementById("add")
console.log(add)


add.addEventListener("click", addLogic)


function addLogic(){
  console.log("Calculating....");
  var num1  = document.getElementById("num1").value

  console.log((parseInt(num1) / parseInt(16.19)) * 3000);
  res = (parseInt(num1) / parseInt(16.19) * 3000)
  document.getElementById("result").innerText = " " + res

}