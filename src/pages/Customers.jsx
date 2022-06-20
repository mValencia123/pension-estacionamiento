import { useState } from "react";
import { Form } from "../components/Form";
import { FormGroup } from "../components/FormGroup";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useFetch } from "../hooks/useFetch";

export const Customers = () => {

    const initialForm = {
        "first_name" : "",
        "last_name" : "",
        "contact_email" : "",
        "rfc" : "",
        "curp" : "",
        "birthday_date" : "",
        "discharge_date" : (new Date().getFullYear()) + "-" + (new Date().getMonth() + 1) + "-" + (new Date().getDate()),
        "state" : "",
        "suburb" : "",
        "municipality" : "",
        "int_num" : 0
    };

    const[form,useForm] = useState(initialForm);

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        console.log(form);
        const response = await useFetch("http://localhost:8000/api/client",'POST',form);
        console.log(response);
        if(!response.error)
            Swal.fire({
                title: 'Felicidades!',
                text: response.message,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        else
            Swal.fire({
                title: 'Error!',
                text: response.message,
                icon: 'error',
                confirmButtonText: 'Chale'
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
                    <FormGroup textLabel = "Nombre" type = "text" handleChangeInput = {handleChangeInput} name = "first_name"/>
                    <FormGroup textLabel = "Apellido" type = "text" handleChangeInput = {handleChangeInput} name = "last_name"/>
                    <FormGroup textLabel = "Curp" type = "text" handleChangeInput = {handleChangeInput} name = "curp"/>
                    <FormGroup textLabel = "RFC" type = "text" handleChangeInput = {handleChangeInput} name = "rfc"/>
                    <FormGroup textLabel = "Fecha Nac." type = "date" handleChangeInput = {handleChangeInput} name = "birthday_date"/>
                    <FormGroup textLabel = "Email" type = "email" handleChangeInput = {handleChangeInput} name = "contact_email"/>
                    <FormGroup textLabel = "Estado" type = "text" handleChangeInput = {handleChangeInput} name = "state"/>
                    <FormGroup textLabel = "Municipio" type = "text" handleChangeInput = {handleChangeInput} name = "suburb"/>
                    <FormGroup textLabel = "Calle" type = "text" handleChangeInput = {handleChangeInput} name = "municipality"/>
                    <FormGroup textLabel = "Numero" type = "int" handleChangeInput = {handleChangeInput} name = "int_num"/>
                </Form>
            </div>
        </div>
    );
}