import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Login = () => {
    const [name, setName] = useState("")
    const [pwd, setPwd] = useState("")

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const login = () => {
        const payload = user.find(user => user.name === name && user.pwd === pwd);

        if (payload) {
            dispatch({
                type: "LOGIN",
                payload
            });
        } else {
            alert("Wrong Password");
        }

    }

    return (
        <>
            <form action="" className="registrar">
                <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='name' /><br />
                <input type="password" name='pwd' value={pwd} onChange={(e) => setPwd(e.target.value)} placeholder='Password' /><br />
                <input type="button" value='Reg' onClick={login} />
            </form>
        </>
    )
}