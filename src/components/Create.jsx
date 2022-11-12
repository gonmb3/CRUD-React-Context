import { useState } from 'react'; // react state

import { useAppContext } from '../context/appProvider';  // usecontext 

import FloatingLabel from 'react-bootstrap/FloatingLabel'; // bootstrap 
import Form from 'react-bootstrap/Form';// bootstrap 
import Button from 'react-bootstrap/Button';// bootstrap 

const Create = () => {

    const {createStudent} = useAppContext()

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !age){
            alert("Empty field")
        }else{
           createStudent({
            id:Date.now(), 
            name,
            age
        })
        setName("");
        setAge("");  
        }
      
    }


    return (
        <form onSubmit={handleSubmit}>
            <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
            >
                <Form.Control
                onChange={ (e) => setName(e.target.value) }
                    value={name}
                    type="text"
                    placeholder="name"
                />
            </FloatingLabel>

            <FloatingLabel label="Age">

                <Form.Control
                onChange={ (e) => setAge(e.target.value) }
                    value={age}
                    type="number" placeholder="Age"
                />

            </FloatingLabel>

            <div className="d-grid gap-2">

                <Button
                    type="submit"
                    variant="btn btn-primary mt-2"
                    size="lg">
                    <i className="fa-solid fa-circle-plus fa-2x"></i>
                </Button>
            </div>
        </form>
    )
}

export default Create