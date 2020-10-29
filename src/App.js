import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Intercom from "react-intercom";

import GlobalStyles from "./GlobalStyles";
import ScrollToTop from "components/ScrollToTop";
import theme from "app-constants/theme";

import store from "store";
import { setListings } from "store/listings";

import gemini1 from "assets/images/gemini/1.jpg";
import gemini2 from "assets/images/gemini/2.jpg";
import gemini3 from "assets/images/gemini/3.jpg";

import mewsOne1 from "assets/images/mews-1/1.jpg";
import mewsOne2 from "assets/images/mews-1/2.jpg";
import mewsOne3 from "assets/images/mews-1/3.jpg";
import mewsOne4 from "assets/images/mews-1/4.jpg";

// import mewsTwo1 from "assets/images/mews-2/1.jpg";
// import mewsTwo2 from "assets/images/mews-2/2.jpg";
// import mewsTwo3 from "assets/images/mews-2/3.jpg";
// import mewsTwo4 from "assets/images/mews-2/4.jpg";

import walaPark1 from "assets/images/wala-park/1.jpg";
import walaPark2 from "assets/images/wala-park/2.png";
import walaPark3 from "assets/images/wala-park/3.jpg";

import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import CovidResponse from "pages/CovidResponse";
import PrivacyPolicy from "pages/PrivacyPolicy";
import TermsOfService from "pages/TermsOfService";
import TermsAndConditions from "pages/TermsAndConditions";

const listingsData = [
  {
    id: 1,
    name: "Appolonia Mews",
    phase: "Phase 1",
    summary: `<p>Appolonia Mews consists of 2 x 2 bedroom semi-detached houses and 2 x 2 bedroom apartments 
      within Appolonia City. The homes are targeted at middle-income earners within Accra looking to 
      purchase their first homes. Interested buyers will be offered competitive payment schedules and access 
      to mortgages. Upon completion, Appolonia Mews will be the most affordable homes in Appolonia City.<br/>
      The first phase is the pilot and it consists of 20 units. <br/><br/> Meqasa.com, The premier property listing 
      platform in Ghana will provide sales support for each unit and receive a commission based on units sold.
      </p>`,
    location: `<p>Appolonia City is a 2,325-acre (941-hectare) inclusive mixed-use new city in Greater Accra. 
      A seamless live-play-work community, Appolonia City offers homes, offices, shopping, schools, healthcare and ample parks and open spaces. 
      High-quality tarred roads, power, ICT, water and storm drains are already available at Appolonia City.  <br/><br/>

      Appolonia City is owned and developed by Rendeavour, the largest new city builder in Africa, with projects in Ghana, Kenya, Nigeria, Zambia, 
      and the Democratic Republic of the Congo.
      Backed by American, Norwegian, New Zealand and British investors, Appolonia City is a partnership with the Chiefs, elders, 
      and residents of the Appolonia community in Greater Accra. <br/><br/>

      Upon completion, Appolonia City will feature the following amenities:
      <br/><br/>
      <ul>
        <li>25,000 housing units (100,000 residents)</li>
        <li>A 200-acre modern business and industrial park</li>
        <li>A 100-acre central business district</li>
        <li>Over 300-acres of public parks and gardens</li>
      </ul>
      <br/>
      
      Appolonia City is located within the Greater Accra Metropolitan Area of Ghana – 20km east of Accra, between the towns of Oyibi and Afienya.
      Distances and times to Appolonia City:
      <br/><br/>
      <ul>
        <li>40 minutes from Kotoka International Airport</li>
        <li>40 minutes from Tema</li>
        <li>30 minutes from Tetteh Quarshie Interchange</li>
        <li>15 minutes from Adenta</li>
        <li>5 minutes from Valley View University, Oyibi</li>
      </ul>
      <br/><br/>
      <b>Why choose an investment within Appolonia City?</b>
      <br/><br/>
      <ul>
        <li>Credibility and community shareholding</li>
        <li>Ready infrastructure</li>
        <li>Approved masterplan</li>
        <li>Clean land titles</li>
        <li>Long lease term (80 years)</li>
      </ul>
      <br/><br/>
      </p>`,
    details: {
      price: 250, currency: "USD", roi: 0.15,
      sharePrice: "$250",
      structure: "Debt",
      projectedReturn: "15%",
      holdPeriod: "12 months",
      primaryMaterial: "Concrete mix",
    },
    images: [mewsOne2, mewsOne1, mewsOne3, mewsOne4],
    disclaimer: `<p>*The house models are just estimations of what the homes will look like after they 
      are built. The final product might look different and Cofundie will keep updating the images with 
      recent and up to date models which are closer to the final results</p>`,
  },
  {
    id: 2,
    name: "Wala Park",
    phase: "LandBanking Project",
    summary: `<p>The Wala Park Landbanking project is an opportunity for you to save your money in a real and solid asset like land.<br/><br/>
    Over the last 5 years, properties within Appolonia City have recorded a steady appreciation rate per annum. 
    Cofundie is giving you the opportunity to benefit from this appreciation by buying a percentage of a plot of land which we expect to have 
    a steady appreciation rate of at least 12% every year while the neighbourhood around it continues to develop. <br/><br/> 
    Buying a Slot means that you own 1% of the plot of land and will be able to benefit from an annual appreciation and the eventual liquidation of the property in 5 years. 
    <br/><br/>*Wala Park is priced in Ghana Cedis and all returns will be priced in Ghana Cedis.
      </p>`,
    location: `<p>Wala Park is a new 76-acre residential neighbourhood by Appolonia Development Company Ltd (ADCL), the owner and developer of Appolonia City, 
      in partnership with Chiefs, leaders and residents of the Appolonia Community.<br/><br/>
      Wala Park is located between Oyibi and Afienya, bordering Appolonia City, Greater Accra's new city where more than 700 homes are already occupied or 
      under development and schools and dozens of businesses are under construction.<br/><br/>
      Wala Park is situated 2.5km from current residential developments in Appolonia City, such as Nova Ridge, The Oxford and Bijou Homes.
      <br/><br/>Sales for Phase 1 of Wala Park have commenced and demand is high.<br/><br/>
      
      <b>Infrastructure</b> <br/><br/>

      The government, through the Electricity Company of Ghana, will provide power, as is its obligation once there is a critical mass of homeowners. ADCL is also exploring extending its own internal power network to Wala Park.<br/><br/>
      ADCL will clear and provide access roads but with no concrete drains and tarmac.  These will be provided by the government over time.<br/><br/>
      Residents will however benefit from the services within Appolonia City like schools, shops, medical & recreational facilities and parks and open spaces.<br/><br/>

      Appolonia City is located within the Greater Accra Metropolitan Area of Ghana – 20km east of Accra, between the towns of Oyibi and Afienya.
      Distances and times to Appolonia City:
      <br/><br/>
      <ul>
        <li>40 minutes from Kotoka International Airport</li>
        <li>40 minutes from Tema</li>
        <li>30 minutes from Tetteh Quarshie Interchange</li>
        <li>15 minutes from Adenta</li>
        <li>5 minutes from Valley View University, Oyibi</li>
      </ul>
      <br/><br/>
      <b>Why choose an investment within Appolonia City?</b>
      <br/><br/>
      <ul>
        <li>Credibility and community shareholding</li>
        <li>Ready infrastructure</li>
        <li>Approved masterplan</li>
        <li>Clean land titles</li>
        <li>Long lease term (80 years)</li>
      </ul>
      <br/><br/>
      </p>`,
    details: {
      price: 600, currency: "GHC", roi: 0.5,
      sharePrice: "Ghc600",
      structure: "Equity",
      projectedReturn: "20 - 50%",
      holdPeriod: "2 - 5 years",
      primaryMaterial: "Land",
    },
    images: [walaPark1, walaPark2, walaPark3],
    disclaimer: `<p>*Wala Park is priced in Ghana Cedis and all returns will be priced in Ghana Cedis.</p>`,
  },
  {
    id: 3,
    name: "Gemini Housing Project",
    phase: "Phase 1",
    summary: `<p>The Gemini housing project (GHP) is a housing development planned for the suburbs of Accra, Ghana. 
      It consists of 3-4 units of 3 bed bungalows made with a mixture of earth bricks and concrete. 
      Targetted homebuyers are middle income earners and 4 person families who want to buy their first or second homes, with their own yards or compounds.
      The project will be built with sustainable practices in mind and is designed to be cost & energy efficient. 
      The developer is a veteran with using earth bricks to create beautiful structures and will be bringing that expertise to the GHP.    
      </p>`,
    location: `<p>TBD</p>`,
    details: {
      price: 200, currency: "USD", roi: 0.2,
      sharePrice: "$200",
      structure: "Debt",
      projectedReturn: "20%",
      holdPeriod: "12 months",
      primaryMaterial: "Earth bricks",
    },
    images: [gemini1, gemini2, gemini3],
    disclaimer: `<p>*The house models are just estimations of what the homes will look like after they 
      are built. The final product might look different and Cofundie will keep updating the images with 
      recent and up to date models which are closer to the final results</p>`,
  },
  // {
  //   id: 3,
  //   name: "Appolonia Mews",
  //   phase: "Phase 2",
  //   summary: `<p>Appolonia Mews consists of 2 x 2 bedroom semi-detached houses and 2 x 2 bedroom apartment 
  //     houses within Appolonia City. The homes are targeted at middle-income earners within Accra looking to 
  //     purchase their first homes. Interested buyers will be offered competitive payment schedules and access 
  //     to mortgages. Upon completion, Appolonia Mews will be the most affordable homes in Appolonia City.<br/>
  //     The first phase is the pilot and it consists of 20 units. <br/><br/> Meqasa.com, The premier property listing 
  //     platform in Ghana will provide sales support for each unit and receive a commission based on units sold.
  //     </p>`,
  //   location: `<p>Appolonia City is a 2,325-acre (941-hectare) mixed-use and mixed-income urban development 
  //     just 20km from the centre of Accra. The project includes a variety of social infrastructure underpinned 
  //     by world-class construction and estate management services. Residential sales with a range of financing 
  //     options are available by purchasing a plot to build your own house in Nova Ridge or an existing home at 
  //     the Oxford development. <br/><br/>
  //     Appolonia Business Park offers 70 acres (30 hectares) of modern commercial areas. The park is designed 
  //     to accommodate a range of uses including manufacturing, processing, storage, logistics and service companies.
  //     Appolonia city aspires to be a multi-functional, fully integrated & self-sustaining city in Accra, to 
  //     that end, the strategy is to make it possible for people in different economic demographics to afford 
  //     housing within the city. <br/><br/>
  //     Upon completion, Appolonia City will feature the following amenities:
  //     <br/><br/>
  //     <ul>
  //       <li>25,000 housing units (100,000 residents)</li>
  //       <li>A 200-acre modern business and industrial park</li>
  //       <li>A 100-acre central business district</li>
  //       <li>Over 300-acres of public parks and gardens</li>
  //     </ul>
  //     <br/>
  //     Appolonia City is 30 minutes from Tetteh Quarshie and Accra Mall and 5 minutes from Valley View University Oyibi.
  //     It’s also 15 minutes from Adenta and 40 minutes from Tema.<br/>
  //     Eastern Ridge International School, an international boarding school which will offer British and 
  //     Ghanaian curriculum which will host 2,000 students upon completion is also going to be located at Appolonia City.
  //     </p>`,
  //   details: {
  //     sharePrice: "$250",
  //     structure: "Debt",
  //     projectedReturn: "15%",
  //     holdPeriod: "12 months",
  //     primaryMaterial: "Concrete mix",
  //   },
  //   images: [mewsTwo3, mewsTwo1, mewsTwo2, mewsTwo4],
  //   disclaimer: `<p>*The house models are just estimations of what the homes will look like after they 
  //     are built. The final product might look different and Cofundie will keep updating the images with 
  //     recent and up to date models which are closer to the final results</p>`,
  // },
];

function App() {
  React.useEffect(() => {
    store.dispatch(setListings(listingsData));
    // return () => {
    //   cleanup
    // }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Intercom appID="kr96mkb4" />
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/details/:id" component={DetailsPage}></Route>
          <Route path="/covid-19" component={CovidResponse}></Route>
          <Route path="/terms-of-service" component={TermsOfService}></Route>
          <Route path="/privacy-policy" component={PrivacyPolicy}></Route>
          <Route
            path="/terms-and-conditions"
            component={TermsAndConditions}
          ></Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
