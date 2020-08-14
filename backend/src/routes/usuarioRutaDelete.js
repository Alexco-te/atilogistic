const {Router} = require  ('express');
const router = Router ();
const User = require ('../models/user');
const auth =  require ('../middleware/auth');

router.delete('/delete',auth, async (req, res) => {
    try{
        const deleteUser = await User.findByIdAndDelete(req.user);
        res.json(deletedUser) 
    }catch(err){
        res.status(500).json({error: err.message});
    }
})

module.exports = router;