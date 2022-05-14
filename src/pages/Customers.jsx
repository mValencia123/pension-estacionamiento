import { useState } from "react";
import { Form } from "../components/Form";
import { FormGroup } from "../components/FormGroup";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export const Customers = () => {

    const initialForm = {
        "nombre" : "",
        "paterno" : "",
        "materno" : "",
        "rfc" : "",
        "curp" : "",
        "nacimiento" : new Date()
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
                    <FormGroup textLabel = "Nombre" type = "text" handleChangeInput = {handleChangeInput} name = "nombre"/>
                    <FormGroup textLabel = "A. Paterno" type = "text" handleChangeInput = {handleChangeInput} name = "paterno"/>
                    <FormGroup textLabel = "A. Materno" type = "number" handleChangeInput = {handleChangeInput} name = "materno"/>
                    <FormGroup textLabel = "Curp" type = "text" handleChangeInput = {handleChangeInput} name = "curp"/>
                    <FormGroup textLabel = "RFC" type = "text" handleChangeInput = {handleChangeInput} name = "rfc"/>
                    <FormGroup textLabel = "Fecha Nac." type = "date" handleChangeInput = {handleChangeInput} name = "nacimiento"/>
                </Form>
            </div>
        </div>
    );
}