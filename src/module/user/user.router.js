import { Router } from "express";
import {asyncHandler} from './../../utils/asyncHandeller.js'
// import generalFields from './../../utils/generalFields.js'
import uploadFile from './../../utils/multer.js'
import {validationTypes} from './../../utils/multer.js'
import validation   from   '../../middleWare/validation.js' ;
import auth from './../../middleWare/auth.js'
import{chanagePassword, deleteUser, softDelete, updateUser , logOut , forgetUser,unsubscription , profilePic , coverPic} from './controller/user.controller.js'
import { upadateSchema , cahangePasswordSchema , unsubscriptionSchema, forgetSchema , uploadProfilImageSchema} from "./user.validation.js";
const router = Router()
router.patch('/update' , validation(upadateSchema) ,auth,asyncHandler(updateUser))
router.patch('/updatepassword', validation(cahangePasswordSchema) , auth,asyncHandler(chanagePassword))
router.get('/delete' ,auth,asyncHandler(deleteUser))
router.get('/softdelete',auth,asyncHandler(softDelete))
router.get('/logout' , asyncHandler(logOut))
router.post('/forgetUser' ,validation(forgetSchema),  asyncHandler(forgetUser))
router.patch ('/unsubscription' ,validation(unsubscriptionSchema) ,asyncHandler(unsubscription))
router.patch('/profilepic' ,auth,uploadFile({customTypes : validationTypes.image , customPath : "user/cover"}).single("image"),validation(uploadProfilImageSchema),asyncHandler(profilePic))
router.put('/coverpic' ,auth ,uploadFile({customTypes : validationTypes.image , customPath : "user/cover"}).array("image" , 5),validation(uploadProfilImageSchema),   coverPic)

export default router 