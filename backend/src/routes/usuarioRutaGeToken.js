const {Router} = require  ('express');
const jwt = require ('jsonwebtoken')
const router = Router ();
const User = require ('../models/user')

router.post("/getoken", async (req,res)=> {
    try{
        const token = req.header ('x-auth-token');
        if (!token) return res.json (false)

        const verified = jwt.verify (token, process.env.JWT_SECRET,{expiresIn: '1s'})
        if (!verified) return res.jason(false)

        const user = await User.findById(verified.id);
        if (!user) return res.json (false);
    
        return res.json(true)

    } catch (err) {
        res.status(500).json({error: err.message});

    }
})

module.exports = router