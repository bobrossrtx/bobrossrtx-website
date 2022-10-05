const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let listingSchema = new Schema(
    {
        listing_id: {
            type: String,
            required: true,
            unique: true,
        },
        listing_title: {
            type: String,
            required: true,
        },
        listing_image: {
            type: String,
            required: true,
        },
        listing_price: {
            type: Number,
            required: true,
        },
        listing_link: {
            type: String,
            required: true,
        },
        last_modified: {
            type: Date,
            required: true,
        },
        session_uuid: {
            type: String,
            required: true,
            unique: true,
        },   
    },
    {
        collection: 'fba_listings'
    }
);

module.exports = mongoose.model('Listing', listingSchema);