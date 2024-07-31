function displayAffirmation(response){
    console.log("affirmation generated");

new Typewriter("#affirmation", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: null,
  });
}

function generateAffirmation(event) {
event.preventDefault();

let userInput = document.querySelector("#user-input");
let apiKey = "d825bd2a96813oc03e814ff3atbaecf8";
let prompt = `User instruction: Generate a positive affirmation using ${userInput.value}`;
let context =
"You are a kind person who believes in your ability to project and manifest your future. You create quality affirmations using the user instructions. The affirmation must be provided in HTML format using <br /> if there is more than one sentence. Example: <p>this is an affirmation. <br /> This continues to be an affirmation</p>";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


console.log("Generating an affirmation");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);
axios.get(apiUrl).then(displayAffirmation);
}

let affirmationFormElement = document.querySelector("#affirmation-generator-form");
affirmationFormElement.addEventListener("submit", generateAffirmation);