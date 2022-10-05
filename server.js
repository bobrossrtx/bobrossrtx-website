require('dotenv').config({path: '.env.local'});
// const dbo = require('./mongodb');
const assert = require('assert');
const crypto = require('crypto');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const slugify = require('slugify');

const listingModel = require('./models/fba/listing');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.ATLAS_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const db = mongoose.connection;

db.once('open', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Connected to MongoDB");
});

const slugifyOptions = {
    replacement: '_',
    remove: /[*+~.()'"!:@]/g,
    lower: true,
    strict: false,
    locale: 'en',
    trim: true,
}



app.use(bodyParser.json());
app.listen(port, () => console.log(`Listening on port ${port}`));

const apiRouter = express.Router();

apiRouter.get("/test", (req, res) => {
    res.send({
        status: {
            code: 200,
            message: "OK",
            connected: true
        }
    });
});

apiRouter.route("/fba/listings").get(async function (req, res) {
    listingModel.find({}, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});

apiRouter.post("/fba/listings/new", function (req, res) {
    const listing = new listingModel({
        listing_id: slugify(req.body.title, slugifyOptions),
        listing_title: req.body.title,
        listing_image: req.body.imageUrl,
        listing_price: req.body.price,
        listing_link: req.body.link,
        last_modified: new Date(),
        session_uuid: crypto.randomUUID()
    });

    listing.save(function(err, result) {
        if (err) {
            res.status(500).send(err);
            console.log(err);
        } else {
            res.status(204).send();
        }
    });
});

apiRouter.delete("/fba/listings/:slug", function (req, res) {
    listingModel.deleteOne({listing_id: req.params.slug}, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(204).send();
        }
    });
});

app.use('/api', apiRouter);
