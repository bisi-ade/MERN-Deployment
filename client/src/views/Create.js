import React, {useState} from 'react';
import axios from 'axios';
import PetForm from '../components/PetForm';
import {navigate} from '@reach/router';

const Create = props => {
    const [pet, setPet] = useState({
        name:"",
        typepet:"",
        desc:"",
        skill1:"",
        skill2:"",
        skill3:""
    })

    const [errors, setErrors] = useState({
        name:"",
        typepet:"",
        desc:""
    })

    const handleChange = e => {
        setPet({
            ...pet,
            [e.target.name] : e.target.value
        })}

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets", pet)
            .then(res => navigate('/'))
            .catch(err => {
                setErrors(err.response.data.errors)
            })
    }

    return(
        <>
            <h1>Pet Shelter</h1>
            <PetForm
                inputs={pet}
                title="Know a pet needing a home?"
                submitValue="Add Pet"
                handleInputChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
            />
        </>
    )
}

export default Create;