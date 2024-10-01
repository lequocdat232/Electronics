import { model, Schema } from "mongoose";
import { TPayloadCustomer } from "../types/modes"
import bcrypt from "bcrypt";

//Cách dùng: https://www.npmjs.com/package/bcrypt#esm-import
const saltRounds = 10;
// Khởi tạo schema
const customerSchema = new Schema<TPayloadCustomer>({
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
        toJSON: { virtuals: true }, // <-- include virtuals in `JSON.stringify()`
        toObject: { virtuals: true },
    })
// Virtual for this genre instance fullName.
customerSchema.virtual('fullName').get(function () {
    return this.first_name + ' ' + this.last_name;
});

customerSchema.pre('save', async function (next) {
    const customer = this;

    const hash = bcrypt.hashSync(customer.password, saltRounds);

    customer.password = hash;

    next();
});
// Export một model

const Customer = model<TPayloadCustomer>('Customer', customerSchema);
export default Customer;