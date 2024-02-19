import Router from 'express'
import {asyncHandler} from './../../utils/asyncHandeller.js'
import validation from '../../middleware/validation.js'
import uploadFile from './../../utils/multer.js' 
import {validationTypes} from './../../utils/multer.js'
 import { addSchema , allSchema, deleteSchema, updateSchema , uploadSchema} from './task.validatin.js'
import { addtask, allNOtDone, allUser, deleteUser, oneUser, updateTask , attachment } from './controller/task.controller.js'
import auth from '../../middleWare/auth.js'
const router = Router()

router.post('/add' ,validation(addSchema) ,auth,asyncHandler(addtask))
router.put('/update/:id' ,validation(updateSchema), auth ,asyncHandler(updateTask))
router.delete('/delete/:id',validation(deleteSchema) ,auth, asyncHandler(deleteUser))
router.get('/all' ,validation(allSchema) , auth,allUser)
router.get('/one' ,validation(allSchema),auth,asyncHandler(oneUser))
router.get('/deade' ,validation(allSchema),asyncHandler(allNOtDone))
router.patch('/pdf' , auth ,uploadFile({customTypes : validationTypes.pdf  , customPath : "task/attachment"}).single("pdf") ,validation(uploadSchema), asyncHandler(attachment))

export default router 