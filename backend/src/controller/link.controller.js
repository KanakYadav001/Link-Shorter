const linkModel = require('../model/link.model');

const {nanoid} = require('nanoid');


async function createLink(req, res) {
    const { url } = req.body;

    const link = await linkModel.create({
        url,
        nanoid : nanoid(8),
    });


    res.status(201).json({ message: 'Link created successfully', link : "ty/"+link.nanoid });
}


async function getLink(req, res) {
    const { id } = req.params;

    const link = await linkModel.findOne({ nanoid : id });

    if(!link) {
        return res.status(404).json({ message: 'Link not found' });
    }

    res.redirect(link.url);
}


module.exports = {
    createLink,
    getLink
}