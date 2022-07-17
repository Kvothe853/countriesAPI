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

  //name
  const name = document.createElement("div");
  name.textContent = "Name:";
  const nameSpan = document.createElement("span");
  nameSpan.textContent = country.name;
  name.append(nameSpan);

  //native name
  const nativeName = document.createElement("div");
  nativeName.textContent = "Native name:";
  const nativeNameSpan = document.createElement("span");
  nativeNameSpan.textContent = country.native_name;
  nativeName.append(nativeNameSpan);

  //capital
  const capital = document.createElement("div");
  capital.textContent = "Capital:";
  const capitalSpan = document.createElement("span");
  capitalSpan.textContent = country.capital;
  capital.append(capitalSpan);

  //alpha2code
  const alpha2code = document.createElement("div");
  alpha2code.textContent = "Alpha2code:";
  const alpha2codeSpan = document.createElement("span");
  alpha2codeSpan.textContent = country.alpha2code;
  alpha2code.append(alpha2codeSpan);

  //alpha3code
  const alpha3code = document.createElement("div");
  alpha3code.textContent = "Alpha3code:";
  const alpha3codeSpan = document.createElement("span");
  alpha3codeSpan.textContent = country.alpha3code;
  alpha3code.append(alpha3codeSpan);

  //language
  const language = document.createElement("div");
  language.textContent = "Language:";
  const languageSpan = document.createElement("span");
  languageSpan.textContent = country.languages[0].name;
  language.append(languageSpan);

  //   language native name
  const languageNative = document.createElement("div");
  languageNative.textContent = "Language native name:";
  const languageNativeSpan = document.createElement("span");
  languageNativeSpan.textContent = country.languages[0].native_name;
  languageNative.append(languageNativeSpan);

  //region
  const region = document.createElement("div");
  region.textContent = "Region:";
  const regionSpan = document.createElement("span");
  regionSpan.textContent = country.region;
  region.append(regionSpan);

  //population
  const population = document.createElement("div");
  population.textContent = "Population:";
  const populationSpan = document.createElement("span");
  populationSpan.textContent = country.population;
  population.append(populationSpan);

  //area
  const area = document.createElement("div");
  area.textContent = "Area:";
  const areaSpan = document.createElement("span");
  areaSpan.textContent = country.area;
  area.append(areaSpan);

  //borders
  const borders = document.createElement("div");
  borders.textContent = "Borders:";
  const bordersSpan = document.createElement("span");
  bordersSpan.textContent = country.borders;
  borders.append(bordersSpan);

  //Timezones
  const timezones = document.createElement("div");
  timezones.textContent = "Timezones:";
  const timezonesSpan = document.createElement("span");
  timezonesSpan.textContent = country.timezones;
  timezones.append(timezonesSpan);

  //Calling code
  const callingCode = document.createElement("div");
  callingCode.textContent = "Calling Code:";
  const callingCodeSpan = document.createElement("span");
  callingCodeSpan.textContent = country.calling_codes;
  callingCode.append(callingCodeSpan);

  countryCard.append(
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
