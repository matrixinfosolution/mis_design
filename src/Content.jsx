import React,{useState} from 'react';
import { Container,Row,Col,Form,Button,Table} from 'react-bootstrap';
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import './Review.css';

const Content=()=>{
    return(
<Container fluid>
    <Table  striped bordered hover responsive="xl" className="w-100">
        <thead style={{backgroundColor:"black",color:"white"}}>
            <th style={{width:"20%"}}>Name</th>
            <th style={{width:"20%"}}>Email</th>
            <th>Affilation</th>
        </thead>
        <tbody>
            <tr>
                <td>Santosh B.Kadam</td>
                <td>santosh@gmail.com</td>
                <td className='d-flex justify-content-between'>
                 <p>CCA,Shivaji,Pune,IND</p>
                 <div>
                    <Row>
                        <Col lg={1}>
                        <MdModeEdit />
                        </Col>
                        <Col lg={1}>
                        <RiDeleteBinFill />
                        </Col>
                    </Row>
                 
                
                 </div>
                </td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </Table>
</Container>
    );
}
export default Content;