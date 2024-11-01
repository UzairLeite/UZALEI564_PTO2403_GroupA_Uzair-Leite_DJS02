const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  try {
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);

    // Input missing values
    if (!dividend || !divider) {
      result.innerText = "Division not performed. Both values are required in inputs. Try again";
      return;
    }

    // Validation
    const dividendNum = Number(dividend);
    const dividerNum = Number(divider);
    if (isNaN(dividendNum) || isNaN(dividerNum)) {
      console.error("Critical error: Non-numeric input received. Stack trace:");
      throw new Error("Non-numeric input - critical failure");
    }

    if (dividerNum === 0) {
      console.error("Division by zero error.");
      result.innerText = "Division not performed. Invalid number provided. Try again";
      return;
    }

    // Perform division and handle decimal
    const divisionResult = Math.floor(dividendNum / dividerNum);
    result.innerText = divisionResult;
    
  } catch (error) {
    console.error(error);
    document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page.</h1>";
  }
});
