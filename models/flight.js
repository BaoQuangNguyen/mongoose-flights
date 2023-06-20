const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        required: true,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    flightNo: {
        type: Number,
        required: true,
    },
    departureDate: {
        type: Date,
        default: function() {
            const currentDate = new Date();
            currentDate.setFullYear(currentDate.getFullYear() + 1);
            return currentDate;
        }
    },
})

module.exports = mongoose.model('Flight', flightSchema);