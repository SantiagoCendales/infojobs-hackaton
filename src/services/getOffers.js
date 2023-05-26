const infojobsToken = import.meta.env.VITE_INFOJOBS_TOKEN ?? ''

const getOffers = async () => {
  const data = await fetch('api/api/9/offer', {
    headers: {
      "Authorization": `Basic ${infojobsToken}`,
      "Content-Type": "application/json"
    }
  })
  const res = await data.json()
  return res.offers
}

export default getOffers