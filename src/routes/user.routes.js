import {Router} from "express"
import { createUser } from "../controllers/user.controller.ts";

const router = Router();

router.post("/newUs", createUser);

export default router;