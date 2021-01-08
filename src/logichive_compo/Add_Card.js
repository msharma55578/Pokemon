import React,{useState} from 'react'
import {Button,Form} from 'react-bootstrap'
import axios from 'axios'

export default function Add_Card() {
    const [title,settitle]=useState("");
    const [description, setdescription] = useState("");
    // const [img, setimg] = useState("");

    function validateForm() {
        return title.length > 0 && description.length > 0;
      }
    function handleSubmit(event) {
        // event.preventDefault();
        axios.post("http://localhost:8080/add",{
          title:title,
          description:description,
        })
        .then( (response)=>{
          console.log(response.data)
          alert("successfully inserted");
        })
      }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
            <Form.Label>Tile</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                />
                <Form.Label>description</Form.Label>
                <Form.Control
                    type="text"
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
                />
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                ADD
                </Button>
                {/* <Link to="/">
                    <label >Existing user Login</label>
                </Link> */}
            </Form>
        </div>
    )
}
