import { useState } from "react";
import { Form } from "../components/Form";
import { FormGroup } from "../components/FormGroup";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const Vehicles = () => {

    const [clients,setClients] = useState([]);
    const [plans,setPlans] = useState([]);

    useEffect(() => {

        const fetching = async (url,destinity) => {
            const response = await useFetch(url,'GET',"");
            console.log(response.data);
            destinity(response.data);
        }

        fetching("http://localhost:8000/api/client/all",setClients);
        fetching("http://localhost:8000/api/payments",setPlans);
    },[]);

    const initialForm = {
        "client" : "",
        "payment_planes" : "",
        "circulation_card" : "",
        "model" : "",
        "brand":"",
        "license": "",
        "type":"",
        "time_init": "",
        "time_final":"",
    };

    const[form,useForm] = useState(initialForm);

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        console.log(form);
        const response = await useFetch("http://localhost:8000/api/transports",'POST',form);
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
                    <label>Cliente:</label>
                    <select name="client" onChange={handleChangeInput}>
                        <option value="-1" key="-1">Sin seleccion:</option>
                        {
                            clients.map((c) => <option value={c.client_id} key={c.client_id}>{c.first_name}</option>)
                        }
                    </select>
                    <label>Pagos:</label>
                    <select name="payment_planes" onChange={handleChangeInput}>
                        <option value="-1" key="-1">Sin seleccion:</option>
                        {
                            plans.map((p) => <option value={p.payment_plane_id} key={p.payment_plane_id}>{p.hours} - {p.mobility}</option>)
                        }
                    </select>
                    <FormGroup textLabel = "Licencia" type = "text" handleChangeInput = {handleChangeInput} name = "license"/>
                    <FormGroup textLabel = "Tarjeta" type = "number" handleChangeInput = {handleChangeInput} name = "circulation_card"/>
                    <FormGroup textLabel = "Marca" type = "text" handleChangeInput = {handleChangeInput} name = "brand"/>
                    <FormGroup textLabel = "Modelo" type = "text" handleChangeInput = {handleChangeInput} name = "model"/>
                    <FormGroup textLabel = "Tipo" type = "text" handleChangeInput = {handleChangeInput} name = "type"/>
                    <FormGroup textLabel = "Hora de inicio" type = "time" handleChangeInput = {handleChangeInput} name = "time_init"/>
                    <FormGroup textLabel = "Hora de final" type = "time" handleChangeInput = {handleChangeInput} name = "time_final"/>
                </Form>
            </div>
        </div>
    );
}