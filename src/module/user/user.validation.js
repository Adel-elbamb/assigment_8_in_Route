import joi from 'joi'
// import {validationId} from './../../middleWare/validation.js'
import generalFields from './../../utils/generalFields.js'

 export const upadateSchema =  joi.object({
    email : generalFields.email,
    userName : generalFields.name ,
    authorization : generalFields.authorization
 }).required()


 export const cahangePasswordSchema = joi.object({
    oldpassword : generalFields.password ,
    newpassword : generalFields.password
 }).required()

 export const unsubscriptionSchema = joi.object({
   email : generalFields.email
 })

 export const forgetSchema  = joi.object({
   email : generalFields.email
 })


 export const uploadProfilImageSchema = joi.object({
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