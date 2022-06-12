const adviceIdElement = document.getElementById("advice-id");
const adviceTextElement = document.getElementById("advice-text");
const generateAdviceButton = document.getElementById("generate-advice");
const getAdviceFromAPI = () => {
    const randomAdviceSlipURL = "https://api.adviceslip.com/advice";

    fetch(randomAdviceSlipURL)
    .then(response => response.json())
    .then(adviceSlipResponse => {
        adviceIdElement.innerText = adviceSlipResponse.slip.id;
        adviceTextElement.innerText = adviceSlipResponse.slip.advice;
    })
    
    .catch(err => {
        adviceIdElement.innerText ="Not available!"
        adviceTextElement.innerText = "Could not retrieve now, Please try later! Thanks"
    });
}

window.onload = () => {
    getAdviceFromAPI();
}

generateAdviceButton.addEventListener('click', (event) => {
    getAdviceFromAPI();
});