const {Router} = require  ('express');
const router = Router ();
const User = require ('../models/user');



router.post("/prueba", async (req, res) => {
    try{
        let {_id} = req.body;
const user = await User.findById({_id : _id}).populate('Datos');
res.json(user)

    } catch (err) {
    res.status(500).json({error: err.message});
    }
});

module.exports = router