import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export const Registration = () => {
    const [name, setName] = useState("")
    const [pwd, setPwd] = useState("")
    const [phn, setPhn] = useState("")
    const [fName, setFName] = useState("")
    const [mNAme, setMName] = useState("")

    const dispatch=useDispatch();

    const registrar=()=>{
        console.log(name);
        dispatch({
            type:"REGISTER",
            payload:{
                id:(new Date).getTime(),
                name,pwd,phn,fName,mNAme
            }
        });
    }

    return (
        <>
            <form action="" className="registrar">
                <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='name' /><br />
                <input type="password" name='pwd' value={pwd} onChange={(e) => setPwd(e.target.value)} placeholder='Password' /><br />
                <input type="text" name='phn' value={phn} onChange={(e) => setPhn(e.target.value)} placeholder='Phn' /><br />
                <input type="text" name='fName' value={fName} onChange={(e) => setFName(e.target.value)} placeholder="Father's Name" /><br />
                <input type="text" name='mName' value={mNAme} onChange={(e) => setMName(e.target.value)} placeholder='Mather name' /><br /><br />
                <input type="button" value='Reg' onClick={registrar}/>
            </form>
        </>
    )
}