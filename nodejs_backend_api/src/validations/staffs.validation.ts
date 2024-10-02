import Joi from "joi"

const createRecord = {
    
    body: Joi.object().keys({
        first_name : Joi.string().min(2).required().label('First name phải có ít nhất 2 ký tự'),
        last_name : Joi.string().min(2).required().label('Last name phải có ít nhất 2 ký tự'),
        phone: Joi.string().min(10).max(10).required(),
        email: Joi.string().email().required(),
        active: Joi.boolean().optional(),
        password: Joi.string().min(6).required()
    }),
    
}

const updateRecord = {
    body: Joi.object().keys({
        first_name : Joi.string().min(2).label('First name phải có ít nhất 2 ký tự'),
        last_name : Joi.string().min(2).label('Last name phải có ít nhất 2 ký tự'),
        phone: Joi.string().min(10).max(10),
        email: Joi.string().email(),
        active: Joi.boolean().optional(),
        password: Joi.string().min(6)
    }),
    
}
export default {
    createRecord,
    updateRecord
}