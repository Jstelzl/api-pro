const { Thought, Reaction, User} = require('./models');

const thoughtController = {
    getAllThoughts(req,res) {
        Thought.find({})
            .populate({
                path: 'Thought',
                select: '-__v'
            })
            .select('-__v')
            .sort({ id: -1 })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.sendStatus(404);
            });
    },

    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
            .populate({
                path: 'Thoughts',
                select: '-__v'
            })
            .select('-__v')
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.sendStatus(404);
            });
    },

    // Create Reaction here
    createReaction() {

    },

    createNewThought({ body }, res) {
        Thought.create(body)
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => res.json(err));
    },

    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.id }, body, 
            { new: true, runValidators: true }
        )
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'Could not find a Thought with that id!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },

    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.json(err));
    },

    // Delete reaction route here
    deleteReaction() {

    }


};

module.exports = thoughtController;
// const thoughtController = {
//     createNewThought({ params, body }, res) {
//         console.log(body);
//         Thought.create(body)
//           .then(({ _id }) => {
//             return Thought.findOneAndCreate(
//                 { _id: params.thoughtsId },
//                 { $push: { comments: _id } },
//                 { new: true }
//             )
//         })
//     }
// };