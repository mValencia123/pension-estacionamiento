import { useState } from "react";
import { Form } from "../components/Form";
import { FormGroup } from "../components/FormGroup";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export const Check = () => {

    const initialForm = {
        "placas" : "",
        "hora" : ""
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
                    <FormGroup textLabel = "Placas del Vehiculo" type = "text" handleChangeInput = {handleChangeInput} name = "placas"/>
                    <FormGroup textLabel = "Hora" type = "time" handleChangeInput = {handleChangeInput} name = "hora"/>
                </Form>
            </div>
        </div>
    );
}