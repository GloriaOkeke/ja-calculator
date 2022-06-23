function myCalc() {
  const operations = ["+", "/", "-", "*", "%"];
  let val1 = prompt("Hey, Zuri mentor, Enter your first number: ");
  let sign = prompt("what operation: +/-*%");
  let val2 = prompt("Hey, Zuri mentor, Enter your second number: ");

  val1 = parseInt(val1);
  val2 = parseInt(val2);

  if (!Number.isInteger(val1) || !Number.isInteger(val2)) {
    alert("Value must be an integer");
  }

  if (!operations.includes(sign)) {
    alert("Zuri mentor, add an operation sign");
  }

  if (val1 == null && val2 == null) {
    alert("Please enter a number, Zuri mentor");
  }

  if (sign == "+") {
    alert(`Sum is ${val1 + val2}`);
  } else if (sign == "-") {
    alert(`Difference is ${val1 - val2}`);
  } else if (sign == "/") {
    alert(`Division value is ${val1 / val2}`);
  } else if (sign == "*") {
    alert(`Product is ${val1 * val2}`);
  } else if (sign == "%") {
    alert(`Modulus is ${val1 % val2}`);
  }
}

myCalc();
