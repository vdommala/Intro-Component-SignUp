const signupBtn = document.querySelector(".btn-primary");

signupBtn.addEventListener("click", formValidation);

function formValidation(event) {
  event.preventDefault();
  const inputElements = document.querySelectorAll(".form-input-text");
  console.log(inputElements);
  inputElements.forEach((inputElement) => {
    if (inputElement.value.length < 3) {
      console.log("testing length");
      addErrorClass(inputElement);
    } else if (
      inputElement.name === "firstName" ||
      inputElement.name === "lastName"
    ) {
      console.log(`hey name`);
      if (inputElement.value.match(/\d+/)?.length > 0) {
        addErrorClass(inputElement);
        inputElement.parentElement.children[3].textContent =
          " Name should contain alphabets";
      } else {
        removeErrorClass(inputElement);
      }
    } else if (inputElement.name === "userEmail") {
      console.log(`hey email`);
      const emailREgex =
        /^[a-zA-z][a-zA-Z0-9\_\*\.\-]+\@+[a-zA-z]+\.+[a-z]{2,3}/g;
      if (inputElement.value.match(emailREgex) === null) {
        addErrorClass(inputElement);
        inputElement.style.color = "hsl(0, 100%, 74%)";
        inputElement.parentElement.children[3].textContent =
          "Looks like this is not an email";
      } else {
        inputElement.style.removeProperty("color");
        removeErrorClass(inputElement);
      }
    } else {
      removeErrorClass(inputElement);
    }
  });

  function addErrorClass(inputElement) {
    inputElement.blur();
    inputElement.classList.add("error");
    inputElement.parentElement.children[2].classList.remove("hidden");
    inputElement.parentElement.children[3].classList.remove("hidden");
    inputElement.focus();
  }

  function removeErrorClass(inputElement) {
    inputElement.classList.remove("error");
    inputElement.parentElement.children[2].classList.add("hidden");
    inputElement.parentElement.children[3].classList.add("hidden");
  }

  console.log(event);
}
