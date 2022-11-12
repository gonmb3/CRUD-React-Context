import { useState } from 'react';  // react state 

import EditModal from './EditModal';  // modal component

import { useAppContext } from '../context/appProvider';  // usecontext 

import Table from 'react-bootstrap/Table';// bootstrap 



const Show = () => {
  // usecontext 
  const { students, deleteStudent } = useAppContext();

  //row data state
  const [rowData, setRowData] = useState({});

  //bootstrap modal state /show/close/
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = (student) => {
    setRowData(student)
    setShow(true)
  };



  return (
    <>
      <Table striped bordered hover className='table-striped mt-5'>
      <thead className='bg-dark text-white'>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {/* maping students   */}
        {
          students.map(student => (
            <tr key={student.id}>
              <td>{student.name} </td>
              <td>{student.age} </td>
              <td>
                <div className="btn-group">

                  <button
                   onClick={() => handleShow(student)}  
                   className='btn btn-info'>
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>

                  <button 
                  onClick={() => deleteStudent(student.id)}
                  className='btn btn-danger'>
                    <i className="fa-solid fa-trash-can"></i>
                  </button>

                </div>
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>

    <EditModal show={show} onClose= {handleClose} rowData= {rowData} />
    </>
  

  
  )
}

export default Show