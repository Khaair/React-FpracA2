import React, {useState }from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Select from "react-select";

export default function Formm(props) {

    const [firstname,setFirstname]= useState('')
    const [lastname,setLastname]= useState('')
    const [username,setUsername]= useState('')

    const [data,setData]= useState('')
    

    console.log(data,"dataa")





    const obj = {
        firstname,
        lastname,
        username

    }




  const handleSubmit =()=>{
      setData(obj)

     props.fetchdataa(obj)
  }

  return (
    <>
      <div style={{ margin: "20px" }}>
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
