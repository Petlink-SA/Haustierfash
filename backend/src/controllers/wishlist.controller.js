import User from '../models/User.js'


 export const getWishlistByUserId = async (req, res) => {
    try {
        const user = await User.findById(req.params.user_id).populate('wishlist') // Populate: Traer los datos de la relación
        res.json(user.wishlist)
    } catch (error) {
        res.status(500).error(error)
        
    }

}

export const addProductToWishlist = async (req, res) => {
    try {

        await User.findOneAndUpdate(req.body.user_id,
            { $push: { wishlist: req.body.product_id } },
        )
        res.json('Product added')
    } catch (error) {
        res.status(500).error(error)

    }


}
export const removeProductFromWishlist = async (req, res) => {
    try {

        await User.findOneAndUpdate(req.body.user_id,
            { $pull: { wishlist: req.body.product_id } },
        )
        res.json('Product removed')
    } catch (error) {
        res.status(500).error(error)

    }
}

