import { form, usernameInput, emailInput, resultDiv } from "./variables.js";
import { apiUrl } from "./scripts/url.js";

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const email = emailInput.value;

  try {
    const response = await fetch(`${apiUrl}/?${username}&email=${email}`);
    const data = await response.json();

    if (data.length > 0) {
      resultDiv.textContent = "Авторизация успешна!";
    } else {
      resultDiv.textContent = "Такого пользователя не существует.";
    }
  } catch (error) {
    console.error("Ошибка:", error);
  }
});
