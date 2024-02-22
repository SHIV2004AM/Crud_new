import express from 'express' ; 

import { createUser, deleteUser, editUser, getUsers, home } from '../controllers/userController.js';

const router = express.Router() ; 

router.get("/" , home)

router.post('/createUser' , createUser)

router.get('/getusers' , getUsers)

router.delete('/deleteuser/:id' , deleteUser)

router.put('/edituser/:id' , editUser)
export default router ; 