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