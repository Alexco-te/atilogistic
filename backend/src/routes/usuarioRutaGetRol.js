const {Router} = require  ('express');
const router = Router ();
const User = require ('../models/user');
const auth =  require ('../middleware/auth');

router.post("/elUsuario",auth, async (req,res)=> {
    const user = await User.findById(req.user);
    if (!user) return res.json (false);
    return res. json(user.rol)
    })

module.exports = router