const AccessControl = require ('accesscontrol')
const ac = new AccessControl();

exports.Roles = (function(){
    ac.grant('root')
        .createAny('usuario')
        .readAny('usuario')
    
    ac.grant('Administrador')
        .extend('root')
        .deleteAny('usuario')
        .updateAny('usuario')


return ac;

})();
