import React, { useState, useEffect } from 'react'; // react usestate

import { useAppContext } from '../context/appProvider'; //react usecontext

import { Form } from 'react-bootstrap';  // bootstrap 
import Button from 'react-bootstrap/Button';  // bootstrap 
import Modal from 'react-bootstrap/Modal';  // bootstrap 


const EditModal = ({show, onClose, rowData}) => {

  const {updateStudent} = useAppContext();

  const [formData, setFormData] = useState({
    id: "",
    name:"",
    age:""
  })

  const handleOnChange= (key, value) =>{
    setFormData({
      ...formData,
      [key]:value
    })
  }
  const handleSubmit = e => {
    e.preventDefault();
    updateStudent(formData)
    onClose();
  }

  useEffect(() => {
    setFormData(rowData)
  },[rowData])

  const {name, age} = rowData;

  return (
    <>
  <form >
     <Modal show={show} onHide={onClose}>
      <Modal.Header className='bg-info text-white' closeButton>
        <Modal.Title>Update Student</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form.Group className="mb-3">
              <Form.Control
              defaultValue={name} 
              onChange={e => handleOnChange("name", e.target.value)}
              type="text"
              />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Control 
              onChange={e => handleOnChange("age", e.target.value)}
              defaultValue={age}
              type="number"
              />
          </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button 
        onClick={handleSubmit}
        variant="primary" >
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  </form>
   
  </>
  )
}

export default EditModal