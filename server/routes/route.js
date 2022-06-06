import express from "express";
import { userSignUp, userLogIn, postProfile } from "../controller/user-controller.js";
import {
  getProducts,
  getProductById
 
} from "../controller/product-controller.js";


const router = express.Router();

//login & signup
router.post("/signup", userSignUp);
router.post("/login", userLogIn);
router.get("/products", getProducts);

router.get(`/product/:id`, getProductById);

//profile routing

router.post('/user-profile',postProfile);

export default router;
