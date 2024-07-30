function generateAffirmation(event) {
event.preventDefault();

new Typewriter("#affirmation", {
    strings: "And, when you want something, all the universe conspires in helping you to achieve it.",
    autoStart: true,
    delay: 30,
    cursor: "",
  });

}

let affirmationFormElement = document.querySelector("#affirmation-generator-form");
affirmationFormElement.addEventListener("submit", generateAffirmation);