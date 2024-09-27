import { model, Schema } from "mongoose";

// Khởi tạo schema
const customerSchema = new Schema({
    first_name: { 
        type: String, 
        maxLength: 50,
        required: true 
    },
    last_name: { 
        type: String, 
        maxLength: 50,
        required: true
    },
    phone: { 
        type: String, 
        maxLength: 50,
        required: true, 
        unique: true 
    },
    email: { 
        type: String, 
        maxLength: 150,
        required: true, 
        unique: true 
    },
    street: { 
        type: String,
        maxLength: 255,
    },
    city: { 
        type: String,
        maxLength: 50
    },
    state: { 
        type: String,
        maxLength: 50,
    },
    zip_code: { 
        type: String, 
        maxlength: 5 
    },
    password: { 
        type: String,
        maxLength: 255,
        default: null 
    },
},
{
    timestamps: true, // Tự động tạo 2 trường createAt và UpdateAt
    //collection: categories
})

// Export một model

const Customer = model('Customer', customerSchema);
export default Customer;