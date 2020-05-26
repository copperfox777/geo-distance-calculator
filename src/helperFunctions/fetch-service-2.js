const _apiBase1 = 'http://nominatim.openstreetmap.org/search?q=';
const _apiBase2 = '&format=json'

export function fetchUrls(urls) {
  let urlsToRequest = urls.map((item)=>`${_apiBase1}${item}${_apiBase2}`)
  return Promise.all(
    urlsToRequest.map((url) =>
      fetch(url)
        .then(checkStatus)
        .then(parseJSON)
        .then(data => ({ data, url }))
        .catch(error => ({data:[], error, url }))
    )
  )
}

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function parseJSON(response) {
  return response.json();
}