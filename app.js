"use strict";

import { countries } from "./countries.js";
creatingOptions(countries);

const myHeaders = new Headers();
myHeaders.append("apikey", "NE9Tbq2Vh61zQoV3dEXkPMRCCnM1HEN1");

const requestOption = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();
  // const alphacodeInput = e.target.alphacode.value.toUpperCase();
  const alphacodeInput = document.querySelector("#alphacode").value;
  fetchingAPI(alphacodeInput);
});

const fetchingAPI = (data) => {
  fetch(
    `https://api.apilayer.com/geo/country/top_level_domain/${data}`,
    requestOption
  )
    .then((response) => response.json())
    .then((result) => createCountryCard(result))
    .catch((error) => console.log("error", error));
  const main = (document.querySelector("main").innerHTML = "");
};
function createCountryCard(data) {
  const country = data[0];
  //
  const countryCard = document.createElement("div");
  countryCard.className = "country-card";

  //image
  const image = document.createElement("div");
  const img = document.createElement("img");
  img.src = `https://flagcdn.com/80x60/${country.alpha2code.toLowerCase()}.png`;
  img.setAttribute("alt", `${country.name} flag image`);
  image.append(img);

  //name
  const name = document.createElement("div");
  name.innerHTML = `Name: <span>${country.name}</span>`;

  //native name
  const nativeName = document.createElement("div");
  nativeName.innerHTML = `Native name: <span>${country.native_name}</span>`;

  //capital
  const capital = document.createElement("div");
  capital.innerHTML = `Capital: <span>${country.capital}</span>`;

  //alpha2code
  const alpha2code = document.createElement("div");
  alpha2code.innerHTML = `Alpha2code: <span>${country.alpha2code}</span>`;

  //alpha3code
  const alpha3code = document.createElement("div");
  alpha3code.innerHTML = `Alpha3code: <span>${country.alpha3code}</span>`;

  //language
  const language = document.createElement("div");
  language.innerHTML = `Language: <span>${country.languages[0].name}</span>`;

  //language native name
  const languageNative = document.createElement("div");
  languageNative.innerHTML = `Language native name:: <span>${country.languages[0].native_name}</span>`;

  //region
  const region = document.createElement("div");
  region.innerHTML = `Region: <span>${country.region}</span>`;

  //population
  const population = document.createElement("div");
  population.innerHTML = `Population: <span>${country.population}</span>`;

  //area
  const area = document.createElement("div");
  area.innerHTML = `Area: <span>${country.area}</span>`;

  //borders
  const borders = document.createElement("div");
  borders.innerHTML = `Borders: <span>${country.borders}</span>`;

  //Timezones
  const timezones = document.createElement("div");
  timezones.innerHTML = `Timezones: <span>${country.timezones}</span>`;

  //Calling code
  const callingCode = document.createElement("div");
  callingCode.innerHTML = `Calling Code: <span>${country.calling_codes}</span>`;

  //appending
  countryCard.append(
    image,
    name,
    nativeName,
    capital,
    alpha2code,
    alpha3code,
    language,
    languageNative,
    region,
    population,
    area,
    borders,
    timezones,
    callingCode
  );
  document.querySelector("main").append(countryCard);
}

function creatingOptions(countries) {
  countries.forEach((country) => {
    const countryName = Object.values(country);
    const alpha2code = Object.keys(country);
    //
    const newOption = document.createElement("option");
    newOption.value = alpha2code[0];
    newOption.text = countryName[0].name;
    //
    document.querySelector("select").append(newOption);
  });
  const btn = document.createElement("button");
  btn.textContent = "Submit";
  btn.type = "submit";
  document.querySelector("form").append(btn);
}
