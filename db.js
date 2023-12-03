let mongoose = require('mongoose')

mongoose
.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUniFiedTopology: true,  
})
.then(() => console.log("Database connected"))
.catch((error) => console.log(error))

module.exports = mongoose;