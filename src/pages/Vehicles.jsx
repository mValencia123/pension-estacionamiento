import { useState } from "react";
import { Form } from "../components/Form";
import { FormGroup } from "../components/FormGroup";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export const Vehicles = () => {

    const initialForm = {
        "placas" : "",
        "color" : "",
        "tarjeta" : 0,
        "marca" : "",
        "modelo" : "",
        "anio" : ""
    };

    const[form,useForm] = useState(initialForm);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Felicidades!',
            text: 'Has enviado correctamente la información del vehiculo.',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }

    const handleChangeInput = (e) => {
        e.preventDefault();
        useForm({
            ...form,
            [`${e.target.name}`] : e.target.value
        });
    }

    return(
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="mx-auto flex border-2 border-solid border-gray-400 shadow-xl p-5 rounded-xl">
                <Form handleSubmitForm={handleSubmitForm}>
                    <FormGroup textLabel = "Placas" type = "text" handleChangeInput = {handleChangeInput} name = "placas"/>
                    <FormGroup textLabel = "Color" type = "text" handleChangeInput = {handleChangeInput} name = "color"/>
                    <FormGroup textLabel = "Tarjeta" type = "number" handleChangeInput = {handleChangeInput} name = "tarjeta"/>
                    <FormGroup textLabel = "Marca" type = "text" handleChangeInput = {handleChangeInput} name = "marca"/>
                    <FormGroup textLabel = "Modelo" type = "text" handleChangeInput = {handleChangeInput} name = "modelo"/>
                    <FormGroup textLabel = "Año" type = "number" handleChangeInput = {handleChangeInput} name = "anio"/>
                </Form>
            </div>
        </div>
    );
}