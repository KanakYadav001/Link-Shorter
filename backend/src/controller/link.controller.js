const linkModel = require('../model/link.model');

const uuid = require('uuid');


async function createLink(req, res) {
    const { url } = req.body;

    const link = await linkModel.create({
        url,
        uuid : uuid.v4(),
    });


    res.status(201).json({ message: 'Link created successfully', link : "ty/"+link.uuid });
}


async function getLink(req, res) {
    const { id } = req.params;

    const link = await linkModel.findOne({ uuid : uuid });

    if(!link) {
        return res.status(404).json({ message: 'Link not found' });
    }

    res.redirect(link.url);
}


module.exports = {
    createLink,
    getLink
}