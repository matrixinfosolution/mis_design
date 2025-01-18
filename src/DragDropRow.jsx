import React,{useState,useRef} from "react";
import { Container,Row,Col,Form,Table } from 'react-bootstrap';
import { FaEnvelope } from "react-icons/fa";
import './DropnDrag.css';
const DropDragRow=()=>{
    const [rows, setRows] = useState([
        { id: '1st', name: 'Durgaprasad B.Kadam',author:"Coresponding Author",email:"durgaprasadkadam@gmail.com",descrip:'computer,COE Sangli,IND', selected: false },
        { id: '2nd', name: 'A X B', descrip:"Very Good Test sangli,IND",email:"abcd@gmil.com",selected: false },
       
      ]);
      const [draggedIndex, setDraggedIndex] = useState(null);
      const tableRef = useRef(null);
    
      // Handle drag start
      const handleDragStart = (index) => {
        setDraggedIndex(index);
      };
    
      // Handle drag over
      const handleDragOver = (event) => {
        event.preventDefault();
      };
    
      // Handle drop
      const handleDrop = (event, targetIndex) => {
        event.preventDefault();
        if (draggedIndex === targetIndex) return;
    
        const updatedRows = [...rows];
        const [draggedRow] = updatedRows.splice(draggedIndex, 1); // Remove dragged row
        updatedRows.splice(targetIndex, 0, draggedRow); // Insert at new position
    
        setRows(updatedRows);
        setDraggedIndex(null);
      };
    
      // Handle radio button change
      const handleRadioChange = (index) => {
        const updatedRows = [...rows];
        updatedRows.forEach((row, idx) => {
          row.selected = idx === index; // Only one row can be selected at a time
        });
        setRows(updatedRows);
      };
    
      // Scroll handling for dragging
      const handleDragEnter = (event) => {
        const table = tableRef.current;
        const rect = table.getBoundingClientRect();
        const offset = event.clientY - rect.top;
    
        if (offset > rect.height - 50) {
          table.scrollTop += 10;
        } else if (offset < 50) {
          table.scrollTop -= 10;
        }
      };
return(
    <Container>
        <Row>
        <Col>
        <div
          ref={tableRef}
          style={{height:"300px",width:"100%"}}
          onDragEnter={handleDragEnter} className="table-container"
        >

<Table   striped bordered hover responsive className="pale-table">
                <thead className="table-header1">
                    <tr>
                         <th></th>
                        <th>Poa.</th>
                        <th><FaEnvelope/></th>
                        <th>Author Details</th>
                    </tr>
                </thead>
                <tbody>
                {(() => {
                const renderedRows = [];
                for (let i = 0; i < rows.length; i++) {
                  const row = rows[i];
                  renderedRows.push(
                    <tr
                      key={row.id}
                      draggable
                      onDragStart={() => handleDragStart(i)}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, i)}
                      style={{
                        backgroundColor: draggedIndex === i ? '#f0f0f0' : 'transparent',
                        cursor: 'move',
                      }}
                    >
                   <td
                className="drag-handle"
                onDragStart={(e) => e.preventDefault()} // Prevent dragging the entire row by clicking on the handle
              >
                <span>:::</span> {/* Drag handle (three dots) */}
              </td>
                    <td>{row.id}</td>
                      <td><input
                          type="radio"
                          checked={row.selected}
                          onChange={() => handleRadioChange(i)}
                        />
                        </td>
                        <td className='d-flex justify-content-between align-items-center gap-1'>
                          <div>
                            <span><b>{row.name}</b> <span style={{fontSize:"12px",color:"blue"}}>{row.author}</span></span>
                            <p style={{fontSize:"12px"}}>{row.descrip}</p>
                            <p style={{fontSize:"12px"}}>{row.email}</p>
                            </div>
                            <div>
                        <button className="button1">Edit</button>
                        </div>
                        </td>
                                    </tr>
                                    );
                                  }
                                  return renderedRows;
                                })()}
                          
                                  </tbody>
                </Table>
                </div>
                </Col>
                </Row>
                </Container>
)
}
export default DropDragRow;