import React, { Fragment } from 'react';
import {revisar}from '../helpers/helper'
import PropTypes from 'prop-types'

const Control = ({presupuesto,restante}) => {
    return ( <Fragment>
        <div className ="alert alert-primary">
            Presupuesto: $ {presupuesto}
        </div>
        <div className ={revisar(presupuesto,restante)}>
            Restante: $ {restante}
        </div>
    </Fragment> );
}

Control.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
 
export default Control;