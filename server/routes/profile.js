import express from "express"
// controllers
import { AddProfile, GetAllProfiles, GetAProfileByUserID, AddList, AddTask, AddNote } from "../controllers/profile.js"
const router = express.Router()

// routes
router.post('/addprofile', AddProfile)
router.get('/all', GetAllProfiles)
router.get('/:id', GetAProfileByUserID)
router.put('/list/:userID', AddList)
router.put('/task/:userID', AddTask)
router.put('/note/:userID', AddNote)

export default router