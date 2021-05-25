import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import PetForm from '../components/PetForm';



const Edit = props => {
    const [pet, setPet] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => setPet(res.data.results[0]))
    }, [props])

    const [errors, setErrors] = useState({
        name: "",
        typepet: "",
        desc: ""
    })

    const handleChange = e => {
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${props.id}`, pet)
            .then(res => navigate('/'))
            .catch(err => {
                setErrors(err.response.data.errors)
            })
    }

    return (
        <>
            {pet && <PetForm
                inputs={pet}
                title={`Edit ${pet.name}`}
                submitValue="Add Pet"
                handleInputChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
            />}
        </>
    )
}

export default Edit;