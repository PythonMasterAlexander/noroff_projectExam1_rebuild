//By Alexander Hardeland
//
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

const spaceCompanyApiAddress = "https://strapideployapp.herokuapp.com/api/space-companies";

async function getSpaceCompanyApi() {
  try {
    const response = await fetch(spaceCompanyApiAddress);
    const apiResult = await response.json();

    const apiResultData = apiResult.data;

    for(let i = 0; i < apiResult.data.length; i++) {

      const companyName = apiResultData[i].attributes.name;
      const companyService = apiResultData[i].attributes.service;
      const companyGoal = apiResultData[i].attributes.goal;

      const foundingOfCompany = apiResultData[i].attributes.founded;
      const founderOfCompany = apiResultData[i].attributes.founder;
      const nationalityOfCompany = apiResultData[i].attributes.nationality;

      let html = "";
      html = `
      <section class="main__spaceCompanyInformationContainer--spaceCompany">
        <h2>${companyName}</h2>
        <h3>Service</h3>
        <p>${companyService}</p>
        <h4>Company goal</h4>
        <p>${companyGoal}</p>
        <section class='spaceCompanyInformationContainer--sectionFlexContainer'>
          <div>
            <h5>Founded</h5>
            <p>${foundingOfCompany}</p>
          </div>
          <div>
            <h5>Founder</h5>
            <p>${founderOfCompany}</p>
          </div>
          <div>
            <h5>Nationality</h5>
            <p>${nationalityOfCompany}</p>
          </div>
        </section>
      </section>
      `;

      document.querySelector('.main__spaceCompanyInformationContainer').innerHTML += html;
    }
  }

  catch(error) {
  }
}
getSpaceCompanyApi();

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

const pageLocation = document.location.pathname;
const pageNavigationLinks = document.querySelectorAll('nav a');
pageNavigationLinks.forEach(links => {
  if(links.href.includes(`${pageLocation}`)) {
    links.classList.add('activeLink');
    links.style.textDecoration = "none";
  }
});

