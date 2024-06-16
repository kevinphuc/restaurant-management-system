import React from 'react'
import axios from 'axios'
import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [role, setRole] = useState([])

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/login", user)
            .then(res => {
                if (res.data.Status === "Success") {
                    setRole(res.data.Role.user_role[0])
                    navigate("/base", { state: res.data.Role.user_role[0] })
                }
                else {
                    alert(res.data.Error)
                }
            })
            .then(err => console.log(err))
    }

    return (
        <>
            <div className='flex flex-cols h-screen items-center'>

                <form onSubmit={handleSubmit} className='mx-auto rounded-xl px-6 py-1 border-2 border-backgroundColor text-backgroundColor'>
                    <h2>Sign in</h2>
                    <div>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="Enter email" name="email"
                            onChange={e => setUser({ ...user, email: e.target.value })}></input>
                    </div>
                    <div>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="Enter password" name="password"
                            onChange={e => setUser({ ...user, password: e.target.value })}></input>
                    </div>
                    <button type="submit">Log in</button>
                </form>
            </div>
        </>
    )
}

export default Login