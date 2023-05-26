
const getOffers = async () => {
  const data = await fetch('api/api/9/offer', {
    headers: {
      "Authorization": "Basic MTZmMGM2ZTM0ODYyNDc4Mjg1MDc1MDg0MGNiZjNjMjA6RE5nK0JHMzl0M3dzSWRSLzRNWmNqaGtDVmJhTW5kMFNIRW5oQXdyK2lsUTJsYzJSbW8=",
      "Content-Type": "application/json"
    }
  })
  const res = await data.json()
  return res.offers
}

export default getOffers