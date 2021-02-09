const AccessControl = require ('accesscontrol')
const ac = new AccessControl();

exports.Roles = (function(){
    ac.grant('601d8e967932ee6a65c66b85')
        .createAny('usuario')
        .readAny('usuario')
    
    ac.grant('601d8f4d7932ee6a65c66b86')
        .extend('601d8e967932ee6a65c66b85')
        .deleteAny('usuario')
        .updateAny('usuario')


return ac;

})();
