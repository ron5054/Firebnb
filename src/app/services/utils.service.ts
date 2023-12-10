export const utilsService = {
    calculateDistance,
    calculateRating,
    calcAvgCategories
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

function calcAvgCategories(reviews: { rate: any }[]) {

    let accuracyTotal = 0
    let checkInTotal = 0
    let cleanlinessTotal = 0
    let communicationTotal = 0
    let locationTotal = 0
    let valueTotal = 0


    reviews.forEach(review => {

        accuracyTotal += review.rate.Accuracy
        checkInTotal += review.rate['Check-in']
        cleanlinessTotal += review.rate.Cleanliness
        communicationTotal += review.rate.Communication
        locationTotal += review.rate.Location
        valueTotal += review.rate.Value
    })


    const totalReviews = reviews.length
    const Accuracy = (accuracyTotal / totalReviews).toFixed(1)
    const CheckIn = (checkInTotal / totalReviews).toFixed(1)
    const Cleanliness = (cleanlinessTotal / totalReviews).toFixed(1)
    const Communication = (communicationTotal / totalReviews).toFixed(1)
    const Location = (locationTotal / totalReviews).toFixed(1)
    const Value = (valueTotal / totalReviews).toFixed(1)


    return {
        Accuracy,
        'Check-in': CheckIn,
        Cleanliness,
        Communication,
        Location,
        Value
    }
}
