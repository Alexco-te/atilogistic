const jwt = require ('jsonwebtoken');

const auth = (req, res, next) => {
    try{
        const token = req.header("x-auth-token");
            if (!token)
                return  res. status (501).json({msg: "No hay autenticacion token, acceso denegado"})
        const verified = jwt.verify(token, process.env.JWT_SECRET);
            if (!verifed)
                return res
                .status(401)
                .json({msg: "No verificacion de token"})
    } catch (err){
        res.status(500).json({error: err.message})
    }
}