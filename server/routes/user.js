import express from "express"
// controllers
import { GetAllUsers, GetAnUserByID, signUp } from "../controllers/user.js"
const router = express.Router()

// routes
router.post('/signup', signUp)
router.get('/all', GetAllUsers)
router.get('/:id', GetAnUserByID)

export default router