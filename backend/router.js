import express from 'express';
import { addUser, deleteUser, getUsers, editUser, getUserById } from './controllers.js';

const router = express.Router();

router.get('/users', getUsers)
router.get('/edit/:id', getUserById)
router.post('/users', addUser)
router.put('/edit/:id', editUser)
router.delete('/users/:id', deleteUser)

export default router
