const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://admin:admin@cluster0.ei45n.mongodb.net/?retryWrites=true&w=majority")

        console.log(('DB connected: '+conn.connection.host))
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB