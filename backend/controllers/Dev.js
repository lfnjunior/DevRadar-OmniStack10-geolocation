const axios = require('axios');
const Dev = require('../models/Dev')
const parseStringAsArray = require('./Utils/parseStringAsArray')

module.exports = {

    async index(req, res) {
        const { user } = req.headers;

        // const loggedDev = await Dev.findById(user);

        // const users = await Dev.find({
        //     $and: [
        //         { _id: { $ne: user } },//Não ser igual a ele mesmo ($ne Not Equal)
        //         //{ _id: { $nin: loggedDev.likes } },//Não deu likes ($nin Not In)
        //         //{ _id: { $nin: loggedDev.dislikes } },//Não deu dislikes ($nin Not In)
        //     ],
        // });
        return res.json(users);
    },

    async store(req, res) {
        
        const { github_username, techs, latitude, longitude } = req.body

        const devExists = await Dev.findOne({ user: username.toLowerCase() });

        if (!devExists) {
            return res.json(devExists);
        }
        
        const apiRes = await axios.get(`https://api.github.com/users/${username}`)
        
        const { name = login, avatar_url, bio } = apiRes.data;

        const techsArray = parseStringAsArray(techs,',')

        const location = {
            type : 'Point',
            coordinates:[longitude,latitude]
        }

        const dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location
        }) 

        return res.json(dev)

    }
}