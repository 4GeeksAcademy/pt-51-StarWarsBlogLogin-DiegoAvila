import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


export const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { store, actions } = useContext(Context);
	const navigate = useNavigate();

    async function handleLogin(e){
        e.preventDefault()

        // console.log(email, password);

        let logged = await actions.login(email, password)
        if (logged){
            navigate("/")
        }else{
            alert("email o contraseña incorrectas")
            navigate("/")
        }
    }
	
    return (
        <form onSubmit={handleLogin}>
            <div className="form-group">
                <label htmlFor="exampleInputemail1">email</label>
                <input type="text" className="form-control" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
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