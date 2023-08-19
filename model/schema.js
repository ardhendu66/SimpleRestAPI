const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema({
    rank: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    dob: {
        type: Date,
        required: true,
    },
    country: {
        type: String,
        required: true,
        validate(val){
            if(val.length > 2){
                throw new Error(`${val} is not a valid Country-Code`)
            }
        }
    },
    mcap: {
        type: Number,
        required: true
    },
    ceo: {
        type: String,
        required: true,
        unique: true,
    }
})

module.exports = mongoose.model('CompanyRecord', CompanySchema)