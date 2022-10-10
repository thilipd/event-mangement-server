const Events = require('../models/events');

const eventController = {
    create: async (req, res) => {

        try {
            await new Events(req.body).save();
            return res.json(`Event craeted succefully `);

        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },

    list: async (req, res) => {

        try {
            const list = await Events.find().exec();
            return res.status(200).json(list)

        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }

    },

    read: async (req, res) => {
        try {
            const id = req.params.id;

            console.log(id)

            const eve = await Events.find({ _id: id }).exec();

            return res.status(200).json({ eve });

        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },

    delete: async (req, res) => {
        try {

            const id = req.params.id;

            await Events.findOneAndDelete({ _id: id });

            res.status(200).json({ msg: `Succesfully deleted ` });

        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },

    update: async (req, res) => {
        try {

            const id = req.params.id;

            console.log(req.body)

            const { title, description, eventStart, eventEnd } = { ...req.body }

            await Events.findOneAndUpdate({ _id: id }, { title: title, description: description, eventStart: eventStart, eventEnd: eventEnd }, { new: true });
            return res.status(200).json({ msg: `Event has been updated` });

        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }


}

module.exports = eventController;