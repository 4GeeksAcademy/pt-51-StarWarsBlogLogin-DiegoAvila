import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


export const LoginForm = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const { store, actions } = useContext(Context);
	const navigate = useNavigate();

    function handleLogin(e){
        e.preventDefault()
        console.log(name, password);
        let logged = actions.login(name, password)
        if (logged){
            actions.get_profile()
            navigate("/")
        }
    }
	
    return (
        <form onSubmit={handleLogin}>
            <div className="form-group">
                <label htmlFor="exampleInputName1">Name</label>
                <input type="text" className="form-control" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            {/* <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" className="btn btn-primary">Login</button>
            <button type="submit" className="btn btn-primary">Crear Usuario</button>
        </form>
    )
}