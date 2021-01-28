import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react'
import useCripto from '../hooks/useCripto';
import useMoneda from '../hooks/useMoneda';
import axios from 'axios';
import Error from './Error';

const Boton =styled.input`
    margin-top:20px;
    font-weight:bold;
    font-size:20px;
    padding:10px;
    background-color: #66a2fe;
    border:none;
    width:100%;
    border-radius:10px;
    color:#fff;
    transition: background-color .3s ease;

    &:hover{
        background-color:#326ac0;
        cursor:pointer;
    }
`

const Form = ({setMonedas,setCriptoMonedas}) => {

    const [lista, setLista] = useState([]);
    const [error, setError]=useState(false);

    const MONEDAS =[
        {codigo:'USD', nombre: 'Dolar de Estados Unidos'},
        {codigo:'MXN', nombre: 'Peso Mexicano'},
        {codigo:'EUR', nombre: 'Euro'},
        {codigo:'GBP', nombre: 'Libra esterlina'}

    ]

    const [moneda, SelectMoneda]= useMoneda ('Elige tu Moneda', '', MONEDAS);

    const [criptomoneda, SelecCripto] = useCripto ('Elige tu cripto moneda', '', lista );

    useEffect(() => {
        const constularApi = async ()=>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

            const result  = await  axios.get(url)
            setLista(result.data.Data)
        }
        constularApi();
    }, []);

    const cotizarMoneda = e => {
        e.preventDefault();

        if (moneda === ''|| criptomoneda === ''){
            setError(true);
            return;
        }

        setError(false);
        setMonedas(moneda);
        setCriptoMonedas(criptomoneda);
    }

    return ( <form
        onSubmit = {cotizarMoneda}
    >
        {error? <Error
            mensaje= 'No ha seleccionado nada'
        />:null}

        <SelectMoneda/>
        <SelecCripto/>
        <Boton
        type= 'submit'
        value = 'calcular'
        
        />

    </form> );
}
 
export default Form;