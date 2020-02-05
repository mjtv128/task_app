require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate("5e38cf341df9bd08146ec1ab", { age: 55 })
//     .then(user => {
//         console.log(user);
//         return User.countDocuments({ age: 55 });
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => console.log(error));


const updateAgeAndCount = async(id, age) => {
    const user = await User.findByIdAndUpdate("5e38cf341df9bd08146ec1ab", { age: age });
    const count = await User.countDocuments({ age: age })

    return count
}

updateAgeAndCount("5e38cf341df9bd08146ec1ab", 66)
    .then(count => console.log(count))
    .catch(error => console.log(error))