import joi from 'joi'
// import {validationId} from './../../middleWare/validation.js'
import generalFields from './../../utils/generalFields.js'

export const addSchema = joi.object({
    title  : generalFields.name ,
    description : joi.string().required() ,
     status  : joi.string().required()  ,
     userID : generalFields.id , 
     assignTo  : generalFields.id ,
     deadline : joi.date().required() ,
     authorization : generalFields.authorization 
}) .required()

export const updateSchema = joi.object ({
    taskId : generalFields.id  ,
    description : joi.string().required() ,
    status  : joi.string().required()  ,
    userID : generalFields.id , 
    assignTo  : generalFields.id ,
    authorization : generalFields.authorization
}).required()

export const deleteSchema = joi.object({
    authorization : generalFields.authorization,
    id : generalFields.id
}).required()

export  const allSchema = joi.object({
    authorization : generalFields.authorization
})




export const uploadSchema = joi.object({
    authorization: generalFields.authorization,
    // test: joi.string().required(),
    // image: joi.string().required()
    files: joi.array().items(joi.object({
        size: joi.number().positive().required(),
        path: joi.string().required(),
        filename: joi.string().required(),
        destination: joi.string().required(),
        mimetype: joi.string().required(),
        encoding: joi.string().required(),
        originalname: joi.string().required(),
        fieldname: joi.string().required(),
        finalDest: joi.string().required()
    }).required()).required()
  }).required()