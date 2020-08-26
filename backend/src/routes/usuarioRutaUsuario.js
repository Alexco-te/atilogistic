const {Router} = require  ('express');
const router = Router ();
const User = require ('../models/user');
const auth =  require ('../middleware/auth');

router.get("/",auth, async (req, res) => {
const user = await User.findById(req.user);
res.json({displayName : user.displayName,
user: user._id,
rol: user.rol}
)

})

module.exports = router