export const APILINK = "https://zombieapi.promo-41.codeur.online"

// Pour faire apparaitre les icones des elements ou des items
export function getElementIconFromApi(name) {
  var name = name.toLowerCase();
  return APILINK + '/images/' + name + '.png'
}














// export function getElementFromApi() {
//   const url = 'http://172.21.201.27:8000/api/v1/element'
//   return fetch(url, {
//     headers:  {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }})
//     .then((response) => response.json())
//     .catch((error) => console.error(error));
// }

// Pour faire avoir les item d'un element grace à son "id"
export function getItemByElementIdFromApi(id) {
  return fetch('http://172.21.201.27:8000/api/v1/' + id + '/item')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}