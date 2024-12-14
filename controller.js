const users = [
    {
        name: 'Kasun',
        email: "kasun@gmail.com",
    },

    {
        name: 'sanjeewa',
        email: "sanjeewa@gmail.com",
    }
]

const getUser = (cb) => {
    cb(users);
}


exports.getUser = getUser;