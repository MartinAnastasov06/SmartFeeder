// Извлекаме бутона и мястото, където ще се покаже съобщението
const button = document.getElementById("myButton");
const messageBox = document.getElementById("messageBox");

// Добавяме слушател на събитието "click" към бутона
button.addEventListener("click", function() {
  // Показваме съобщение в div с id "messageBox"
  messageBox.innerHTML = "Съобщението се появи!";
});