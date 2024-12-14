const { response } = require('./app');
const User = require('./model')


const addUser = (req, res, next) => {
    const user = new User(
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }

    );

    user.save()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}


exports.addUser = addUser;