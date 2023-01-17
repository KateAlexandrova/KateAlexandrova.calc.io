let operation;

btn.addEventListener("click", func);

function func() {
  let num1 = document.getElementById("num1").value;

  if (isNaN(Number(num1))) {
    alert("Вы ввели букву в первом поле!");
    return;
  }

  if (!num1.length) {
    alert("Вы не заполнили первое поле!");
    return;
  }

  let num2 = document.getElementById("num2").value;

  if (isNaN(Number(num2))) {
    alert("Вы ввели букву во втором поле!");
    return;
  }

  if (!num2.length) {
    alert("Вы не заполнили второе поле!");
    return;
  }

  let result;

  switch (operation) {
    case "+":
      result = Number(num1) + Number(num2);
      break;
    case "-":
      result = Number(num1) - Number(num2);
      break;
    case "*":
      result = Number(num1) * Number(num2);
      break;
    case "/":
      while (num2 == 0) {
        alert("На ноль делить нельзя! Введите другое число");
        return;
      }
      result = Number(num1) / Number(num2);
      break;
  }

  document.getElementById("result").innerHTML = result;
}
