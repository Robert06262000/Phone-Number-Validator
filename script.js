const input = document.getElementById("user-input");
const clearBtn = document.getElementById("clear-btn");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("results-div");
const phoneRegex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;

const validityCheck = () => {
  const answer = input.value;
  if(answer === ''){
    alert("Please provide a phone number");
    return;
  }
  result.textContent = phoneRegex.test(answer) ? `Valid US number: ${answer}` : `Invalid US number: ${answer}`;
}

const clearInput = () => {
  input.textContent = '';
  input.value = '';
  result.textContent = '';
}

checkBtn.addEventListener("click", validityCheck);

clearBtn.addEventListener("click", clearInput)