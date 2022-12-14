import { Router } from "express";
import { getWishlistByUserId, addProductToWishlist, removeProductFromWishlist } from "../controllers/wishlist.controller.js"

const router = Router()

router.get('/:user_id',getWishlistByUserId)
router.put('/', addProductToWishlist)
router.delete('/', removeProductFromWishlist)

export default router