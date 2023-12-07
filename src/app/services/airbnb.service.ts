import axios from 'axios'
import fs from 'fs'
// import { Space } from '../types'

export const airbnbService = {
    getSpaces,
    getSpaceById
}

function getSpaces() {
    const jsonString = fs.readFileSync('src/app/services/spaces.json', 'utf-8')
    const data = JSON.parse(jsonString)
    return data
}

function getSpaceById(spaceId: string) {
    const spaces = getSpaces()
    const space = spaces.find(space => space._id === spaceId)
    return space
}

// async function getSpaces() {

//     const options = {
//         method: 'GET',
//         url: 'https://airbnb13.p.rapidapi.com/search-location',
//         params: {
//             location: 'europe',
//             checkin: '2023-12-13',
//             checkout: '2023-12-19',
//             adults: '1',
//             children: '0',
//             infants: '0',
//             pets: '0',
//             page: '1',
//             currency: 'USD'
//         },
//         headers: {
//             'X-RapidAPI-Key': process.env.RAPID_API_KEY,
//             'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
//         }
//     }

//     try {
//         const response = await axios.request(options)
//         return response.data.results
//     } catch (error) {
//         console.error(error)
//     }
// }