import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';


const App=() =>{
  const [show, setShow] = useState(false);
  const [datas,setdata]=useState([]);
  
  const[expensename,setexpensename]=useState ("")
  const[expenseamount,setexpenseamount]=useState("")

  const handleAddexpense=()=>{
    if(expensename && expenseamount){
      setdata([...datas,{expensename,expenseamount}]);
    }
    setexpensename("");
    setexpenseamount("");

  };
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  



  return (
   <div className='container'>
   <h1 className="text-center mt-">Expense Tracker</h1>

 

      


   
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Expense Tracker </Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Expensename</Form.Label>
        <Form.Control type="email" placeholder="Enter the Expensename" 
          onChange={(e)=>setexpensename(e.target.value)}
        />
         
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Expense Amount</Form.Label>
      <Form.Control type="email" placeholder="Enter the Expenseamount" 
        onChange={(e)=>setexpenseamount(e.target.value)}
      />
      </Form.Group>
    </Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


     

      
   
    <div className='text-center'>
    <Button 
    variant="primary"
    onClick={handleAddexpense}
    onClick={handleShow}>

    Submit
    </Button>{' '}
    </div>
    <Table striped bordered hover>
    <thead>
        <tr>
          <th>SI/no</th>
          <th>ExpenseName</th>
          <th>Expense Amount</th>
          
        </tr>
      </thead>
      <tbody>
    {
      datas && 
      datas.map((data,index)=>(
      
     
      
        <>
        <tr>
          <td>{index+1}</td>
          <td>{data.expensename}</td>
          <td>{expenseamount}</td>
          
        </tr>



        <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
       
        </>
      
      ))
    }
   
    </tbody>
    </Table>

   </div>
  );
};

export default App