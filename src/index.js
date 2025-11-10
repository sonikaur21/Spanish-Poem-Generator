function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#searchInput");
  let apiKey = "79e2b848de54da3deo0aafeff8t7fa08";
  let prompt = `generate a poem about ${searchInputElement.value}`;
  let context =
    "you are a romantic poet expert and love to write short poems. your mission is to generate in basic HTML style and five separate lines. don't show the word html. add a title in the same font as the paragraph. Each time there is a comma, insert a <br> tag so the next part starts on a new line.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class= "generating"> ⌛ Generating a poem about ${searchInputElement.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
