import React from 'react';

const Form = () => {
    return ( <form>
        <fieldset className = "text-center">
            <legend>Busca bebidas por categoria o ingrediente</legend>
        </fieldset>
        <div className="row">
            <div className = "col-md-4">
                <input
                    name="nombre"
                    className="form-control"
                    type="text"
                    placeholder="Buscar por ingrediente"
                />
            </div>
            <div className = "col-md-4">
                <select
                
                >

                </select>
            </div>
        </div>
    </form>);
}
 
export default Form;