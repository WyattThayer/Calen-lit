import { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [userName,setUserName] = useState('')
    const [password, setPassword]= useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const validateForm = () =>{
        return userName.length > 0 && password.length > 0
    }

    const handleSubmit =(event)=>{
        event.preventDefault()
        dispatch({
            type:'SET_USERNAME',
            payload:userName,
        })
        navigate('/calendar')
    }

    return(
        <div className="Login">
            <Form onSubmit={e => handleSubmit(e)}>
            <Form.Group size='sm' controlId='username'>
            <Form.Label>Username</Form.Label>
                <Form.Control type='text' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            </Form.Group>
            <Form.Group size='sm' controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            
            <Button size="sm" type='submit' disabled={!validateForm()}>
                Login
            </Button>
            </Form>
        </div>
    )
}

export default Login