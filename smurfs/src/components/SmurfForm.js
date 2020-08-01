import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurfs } from "../actions/index";


const SmurfForm = (props) => {
    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

const inputHandler = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value})
}
const submitHandler = e => {
    e.preventDefault();
    props.postSmurfs(smurf)
}

    return (
        <div>
            <form id="smurfForm">
                <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        label="name"
                        placeholder="Enter Name"
                        value={props.name}
                        onChange={inputHandler}
                        className="input"
                        />
                <label htmlFor="age">Age</label>
                        <input
                            type="text"
                            name="age"
                            label="age"
                            placeholder="Enter Name"
                            value={props.age}
                            onChange={inputHandler}
                            className="input"
                        />
                <label htmlFor="height">Height</label>
                        <input
                            type="text"
                            name="height"
                            label="height"
                            placeholder="Enter Name"
                            value={props.height}
                            onChange={inputHandler}
                            className="input"
                        />
                        <button onClick={submitHandler}> Add Smurf </button>
            </form>

        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        smurfs: state.smurf,
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(mapStateToProps, {postSmurfs})(SmurfForm)