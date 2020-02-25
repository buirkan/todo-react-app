const todoModel = require('./todo')

// abstraction of node restful of REST methods to the API use
todoModel.methods(['get', 'post', 'put', 'delete'])
todoModel.updateOptions({ new: true, runValidators: true })

module.exports = todoModel