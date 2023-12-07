export const utilsService = {
    calculateDistance,
    calculateRating
}

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    const earthRadiusKm = 6371

    const dLat = _degreesToRadians(lat2 - lat1)
    const dLon = _degreesToRadians(lon2 - lon1)

    const radLat1 = _degreesToRadians(lat1)
    const radLat2 = _degreesToRadians(lat2)

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(radLat1) * Math.cos(radLat2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

    const distance = earthRadiusKm * c
    return distance.toFixed(0)
}

function _degreesToRadians(degrees: number) {
    return degrees * (Math.PI / 180)
}

function calculateRating(reviews: { rate: any }[]) {
    const reviewRates = reviews.map(review => review.rate)

    let sum = 0

    reviewRates.forEach((rate) => {
        Object.values(rate).forEach((value: any) => {
            sum += value
        })
    })

    return (sum / reviewRates.length / 6).toFixed(2)
}