import React, {useState }from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Select from "react-select";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Formm(props) {

    const [firstname,setFirstname]= useState('')
    const [lastname,setLastname]= useState('')
    const [username,setUsername]= useState('')

      
        const [msg,setMsg]= useState('Every field must requird!"')


    console.log(msg,"msgggg")

    let history=useNavigate();







    const obj = {
        firstname,
        lastname,
        username

    }




  const handleSubmit =(e)=>{
    

    
    if(firstname.length && lastname.length && username.length){
      props.fetchdataa(obj)

      setFirstname('')
      setLastname('')
      setUsername('')
      history('/')

    }
    else{
    
        setMsg("Every field must requird!")
        notify()
      
     
      
    
    }
    }

  const notify = () => toast(msg);


  return (
    <>
      <div style={{ margin: "20px" }}>
      <ToastContainer />


        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              First Name
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Last Name
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              User Name
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
            </Col>
          </Form.Group>
        </Form>
        <Button onClick={handleSubmit} style={{ marginLeft: "150px" }} variant="primary">
          Submit
        </Button>{" "}

      </div>
    </>
  );
}
