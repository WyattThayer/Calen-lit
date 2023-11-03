import { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const Login = () => {
    const [userName,setUserName] = useState('')
    const [password, setPassword]= useState('')
    const validateForm = () =>{
        return userName.length > 0 && password.length > 0
    }

    const handleSubmit =(event)=>{
        event.preventDefault()
    }

    return(
        <div className="Login">
            <Form onSubmit={handleSubmit}>
            <Form.Group size='sm' controlId='username'>
                <Form.Control autoFocus type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group size='sm' controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            
            <Button block size="sm" type='submit' disabled={!validateForm()}>
                Login
            </Button>
            </Form>
        </div>
    )
}

export default Login