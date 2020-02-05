require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.deleteOne({ _id: "5e38c8ff7465e2573324e68b" })
//     .then(task => {
//         return Task.find({ completed: false })
//     })
//     .then(result => console.log(result.length))
//     .catch(error => console.log(error))

// Task.findByIdAndDelete({ _id: "5e38c8ff7465e2573324e68b" })
//     .then(task => {
//         return Task.countDocuments({ completed: false });
//     })
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false })

    return count
}

deleteTaskAndCount("5e38dd40a3c27273eff0babd")
    .then(result => console.log(result))
    .catch(error => console.log(error));