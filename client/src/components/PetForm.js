import React from 'react';
import { Link } from '@reach/router';



const PetForm = props => {
    const {
        inputs,
        title,
        handleInputChange,
        handleSubmit,
        submitValue,
        errors
    } = props;

    return (
        <form onSubmit={handleSubmit} className="col-6 mx-auto" >
            <Link to="/" ><h5>back to home</h5></Link>
            <h2 className="text-center" >{title}</h2>
            <div className="form-group" style={{ border: "solid black 1pt" }}>

                <div className="container text-left">
                    <label htmlFor="name" ><h5 className="mt-5" >Pet Name:</h5></label>
                    <input
                        type="text"
                        name="name"
                        className="form-control m-3"
                        style={{ width: "750px" }}
                        onChange={handleInputChange}
                        value={inputs.name}
                    />
                    <span className="text-danger" >
                        {errors.name ? errors.name.message : ""}
                    </span><br />

                    <label htmlFor="typepet" ><h5 className="mt-5" >Pet Type:</h5></label>
                    <input
                        type="text"
                        name="typepet"
                        className="form-control m-3"
                        style={{ width: "750px" }}
                        onChange={handleInputChange}
                        value={inputs.typepet}
                    />
                    <span className="text-danger" >
                        {errors.typepet ? errors.typepet.message : ""}
                    </span><br />

                    <label htmlFor="desc" ><h5 className="mt-5" >Pet Description:</h5></label>
                    <input
                        type="text"
                        name="desc"
                        className="form-control m-3"
                        style={{ width: "750px" }}
                        onChange={handleInputChange}
                        value={inputs.desc}
                    />
                    <span className="text-danger" >
                        {errors.desc ? errors.desc.message : ""}
                    </span><br />
                </div>
                <h5>Skills (optional):</h5>
                <div className="container text-left">
                    <label htmlFor="skill1" ><h5 className="mt-5" >Skill 1:</h5></label>
                    <input
                        type="text"
                        name="skill1"
                        className="form-control m-3"
                        style={{ width: "750px" }}
                        onChange={handleInputChange}
                        value={inputs.skill1}
                    />
                    <label htmlFor="skill2" ><h5 className="mt-5" >Skill 2:</h5></label>
                    <input
                        type="text"
                        name="skill2"
                        className="form-control m-3"
                        style={{ width: "750px" }}
                        onChange={handleInputChange}
                        value={inputs.skill2}
                    />
                    <label htmlFor="skill3" ><h5 className="mt-5" >Skill 3:</h5></label>
                    <input
                        type="text"
                        name="skill3"
                        className="form-control m-3"
                        style={{ width: "750px" }}
                        onChange={handleInputChange}
                        value={inputs.skill3}
                    />

                    <input
                        type="submit"
                        value={submitValue}
                        className="btn btn-primary btn-outline-info"
                        style={{ color: "white" }}
                    />
                </div>

            </div>
        </form>
    )
}

export default PetForm;