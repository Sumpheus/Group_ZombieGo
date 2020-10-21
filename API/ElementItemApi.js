export function getElementFromApi() {
  const url = 'http://172.21.201.27:8000/api/v1/element'
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

// Pour faire avoir les item d'un element grace à son "id"
export function getItemByElementIdFromApi(id) {
  return fetch('http://172.21.201.27:8000/api/v1/' + id + '/item')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}





// Pour faire apparaitre les icones des elements
export function getElementIconFromApi(id) {
  return 'http://image.tmdb.org/t/p/w300' + name
}