import Contenedor from "../components/Contenedor";
import CuadroSombreado from "../components/CuadroSombreado";
import Imagen from "../components/Imagen";
import Input from "../components/Input";
import imagenEncabezado from "../assets/images/imagen-encabezado.png";
import { Boton } from "../components/Boton";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { logIn } from '../state/park/parkSlice'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Login = () => {

    const dispatch = useDispatch();

    const initialForm = {
        "email" : "",
        "password" : ""
    };

    const[form,useForm] = useState(initialForm);

    const handleClickLogin = () => {
        if ([form.email,form.password].includes("")) {
            return Swal.fire({
                title: 'Error',
                text: 'Llena todos los campos.',
                icon: 'error',
                confirmButtonText: 'Entendido'
              })
        }
        dispatch(logIn());
    }

    const handleChangeInput = (e) => {
        e.preventDefault();
        useForm({
            ...form,
            [`${e.target.name}`] : e.target.value
        });
    }

    return(
        <Contenedor>
            <CuadroSombreado>
                <Imagen alt="..." src={imagenEncabezado} />
                {/* <Label text="Email" htmlFor="email"/> */}
                <Input type="email" placeholder="Email..." handleChangeInput={handleChangeInput} name="email" id="email"/>
                {/* <Label text="Password" htmlFor="password"/> */}
                <Input type="password" placeholder="Password..." handleChangeInput={handleChangeInput} name="password" id="password"/>
                <Boton texto="Entrar al sistema" class="boton-login" handleClickLogin={handleClickLogin}/>
            </CuadroSombreado>
        </Contenedor>
    );
}

export default Login;