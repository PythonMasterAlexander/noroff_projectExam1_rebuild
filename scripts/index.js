const peopleInSpaceUrlAddress = "http://api.open-notify.org/astros.json";

async function getPeopleInSpace() {
  try {
    const response = await fetch(peopleInSpaceUrlAddress);
    const apiResult = await response.json();

    const peopleInSpace = apiResult.number;
    let createHtml = "";
    createHtml = `
    <h4 class="logoFontStyle whiteTextColor">People in space</h4>
    <h5 class="logoFontStyle whiteTextColor">${peopleInSpace}</h5>`;

    document.querySelector('.main__peopleInSpaceContainer').innerHTML = createHtml;
  }

  catch(error) {
  }
}
getPeopleInSpace();

const astronomyImageApiAddress = "https://api.nasa.gov/planetary/apod?api_key=WcKK4b9OlOmzYSUyfiWpHxGL6kVkR2dzJ2oHeqYR";

async function getAstronomyImageOfTheDayApi(){

  try{
    const response = await fetch(astronomyImageApiAddress);
    const apiResult = await response.json();

    const apiImage = apiResult.url;

    let html = "";
    html = `
    <h4>Astronomy picture of the day</h4>
    <img src="${apiImage}" alt="Astronomy of the day, presented by api key from Nasa">
    `;

    document.querySelector('.astronomyImageContainer').innerHTML += html;
  }
  catch(error) {
  }
};
getAstronomyImageOfTheDayApi();