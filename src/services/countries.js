import service from "./index";

export function getAllCountry() {
  return service({
    url: "/all",
    method: "get",
  });
}

export function filterByContinent(continent) {
  console.log(continent);
  return service({
    url: `/continent?${continent.toLowerCase()}`,
    method: "get",
  });
}

export function searchByName(name) {
  console.log(name);
  return service({
    url: `/name/${name.toLowerCase()}`,
    method: "get",
  });
}
// continent / { region };
