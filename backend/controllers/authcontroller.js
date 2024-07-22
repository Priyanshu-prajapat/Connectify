import { Router } from "express";
import { userSignin, userSignout, userSignup } from "../services/authServices.js";

const router = Router();

router.post('/signin', userSignin)
router.post('/signup', userSignup)
router.post('/signout', userSignout)

export default router 