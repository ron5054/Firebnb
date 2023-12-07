// export interface Space {
//     address: string
//     amenityIds: number[]
//     bathrooms: number
//     bedrooms: number
//     beds: number
//     cancelPolicy: string
//     city: string
//     deeplink: string
//     hostThumbnail: string
//     id: string
//     images: string[]
//     isSuperhost: boolean
//     lat: number
//     lng: number
//     name: string
//     persons: number
//     position: number
//     previewAmenities: string[]
//     price: {
//         rate: number
//         currency: string
//         total: number
//         priceItems: any[] // might want to define a more specific type for price items
//     }
//     rareFind: boolean
//     rating: number
//     reviewsCount: number
//     type: string
//     url: string
//     userId: number
// }

export interface Space {
    _id: string,
    amenities: string[],
    bathrooms: number,
    bedrooms: number,
    capacity: number,
    host: {
        _id: string,
        fullname: string,
        imgUrl: string
    }
    imgUrls: string[],
    likedByUsers: string[],
    loc: {
        address: string,
        city: string,
        country: string,
        countryCode: string,
        lat: number,
        lan: number
    }
    name: string,
    price: number,
    reviews: [
        {
            at: string,
            _id: string,
            by: {
                _id: string,
                id: string,
                fullname: string,
                imgUrl: string
            }
            rate: {
                Accuracy: number,
                'Check-in': number,
                Cleanliness: number,
                Communication: number,
                Location: number,
                Value: number
            }
            txt: string
        }
    ]
    roomType: string,
    summary: string,
    type: string
}