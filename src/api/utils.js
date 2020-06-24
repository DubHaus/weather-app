const makeRequest = async (url) => fetch(url);

export const getResponce = (url) => {
  return makeRequest(url)
    .then(responce => responce.json())
    .then(data => ({
      isError: false,
      data
    }))
    .catch(data => ({
      isError: true,
      data
    }))
}