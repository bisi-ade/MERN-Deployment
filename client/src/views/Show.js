import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';



const Show = props => {
    const [pet, setPet] = useState([])
    

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => setPet(res.data.results[0]))
            .catch(err => console.log(err))
    }, [props.id])

    const handleDestroyPet = (petId) => {
        axios.delete(`http://localhost:8000/api/pets/${petId}`)
            .then(() => {
                navigate('/')
            })
            .catch(err=>console.log(err))
    }

    return(
        <div>
            <Link to="/" ><h5>back to home</h5></Link>
            <h1>Details about: {pet.name}</h1>
            <div className="card col-4 mx-auto" >
                <div className="card-body text-left" >
                    <h2 className="card-title" >
                    <table className="table table-hover">
                        <tbody>
                                    <tr>
                                        <td>Pet type: </td>
                                        <td>{pet.typepet}</td>
                                    </tr>
                                    <tr>
                                        <td>Description: </td>
                                        <td>{pet.desc}</td>
                                    </tr>                                
                                    <tr>
                                        <td>Skills: </td>
                                        <td>
                                            <p>{pet.skill1}</p>
                                            <p>{pet.skill2}</p>
                                            <p>{pet.skill3}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        
                                    </tr>
                        </tbody>
                    </table>
                    </h2>
                    <div>
                        <button 
                            className="btn btn-danger btn-outline-dark m-5 " 
                            style={{color:"white"}}
                            onClick={()=>{handleDestroyPet(pet._id)}}
                        >
                            Adopt {pet.name}
                        </button>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Show;