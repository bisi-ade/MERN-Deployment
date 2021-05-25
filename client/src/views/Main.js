import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const Main = props => {
    const [pets, setPets] = useState({
        cat: [],
        dog: [],
        other: []
    });
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                setPets({
                    cat: res.data.results.filter(a => a.typepet === "Cat"),
                    dog: res.data.results.filter(a => a.typepet === "Dog"),
                    other: res.data.results.filter(a => a.typepet !== "Cat" && a.typepet !== "Dog")
                })
            })
            .catch(err => console.log(err))
    }, [toggle,setToggle])


    return (
        <div>
            <h3>These pets are looking for a good home</h3>
            <Link to="/pets/new" ><h5>Add a pet to the shelter</h5></Link>
            <div className="container" style={{ border: "black solid 1pt" }}>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th><h3>Name</h3></th>
                            <th><h3>Type</h3></th>
                            <th><h3>Actions</h3></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pets && pets.cat.map((j, i) => {
                                return <tr key={i}>
                                    <td><h4>{j.name}</h4></td>
                                    <td><h4>{j.typepet}</h4></td>
                                    <td>
                                        <Link className=" m-4" to={`/pets/${j._id}`}>Details</Link>
                                        <Link className=" m-4" to={`/pets/${j._id}/edit`}>Edit</Link>

                                    </td>
                                </tr>
                            })
                        }

                        {
                            pets && pets.dog.map((j, i) => {
                                return <tr key={i}>
                                    <td><h4>{j.name}</h4></td>
                                    <td><h4>{j.typepet}</h4></td>
                                    <td>
                                        <Link className=" m-4" to={`/pets/${j._id}`}>Details</Link>
                                        <Link className=" m-4" to={`/pets/${j._id}/edit`}>Edit</Link>

                                    </td>
                                </tr>
                            })
                        }

                        {
                            pets && pets.other.map((j, i) => {
                                return <tr key={i}>
                                    <td><h4>{j.name}</h4></td>
                                    <td><h4>{j.typepet}</h4></td>
                                    <td>
                                        <Link className=" m-4" to={`/pets/${j._id}`}>Details</Link>
                                        <Link className=" m-4" to={`/pets/${j._id}/edit`}>Edit</Link>

                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Main;