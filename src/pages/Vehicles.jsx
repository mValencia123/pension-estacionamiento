import { useState } from "react";
import { Form } from "../components/Form";
import Input from "../components/Input";

export const Vehicles = () => {

    const initialForm = {
        "email" : "",
        "password" : ""
    };

    const[form,useForm] = useState(initialForm);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log("submit");
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
                    <Input type="email" placeholder="Email..." handleChangeInput={handleChangeInput} name="email" id="email"/>
                    <Input type="email" placeholder="Email..." handleChangeInput={handleChangeInput} name="email" id="email"/>
                    <Input type="email" placeholder="Email..." handleChangeInput={handleChangeInput} name="email" id="email"/>
                    <Input type="email" placeholder="Email..." handleChangeInput={handleChangeInput} name="email" id="email"/>
                    <Input type="email" placeholder="Email..." handleChangeInput={handleChangeInput} name="email" id="email"/>
                    <Input type="email" placeholder="Email..." handleChangeInput={handleChangeInput} name="email" id="email"/>
                </Form>
            </div>
        </div>
    );
}