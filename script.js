const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

let expression = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "=") {
      try {
        expression = expression
          .replace(/×/g, "*")
          .replace(/÷/g, "/")
          .replace(/−/g, "-")
          .replace(/\^/g, "**");

        expression = eval(expression).toString();
        display.textContent = expression;
      } catch {
        display.textContent = "Error";
        expression = "";
      }
      return;
    }

    if (value === "⌫") {
      expression = expression.slice(0, -1);
      display.textContent = expression;
      return;
    }

    expression += value;
    display.textContent = expression;
  });
});
