import React, { Component } from 'react';
import './Myapp.css';

class Myapp extends Component {
    render() {
        return (
            <div className='myInfo'>
               <img className='photo' src='image.jpg' alt='photo' /><br/>
                <label > KL University student profile</label>  
               <table>
                <tr>
                    <td><label>Name</label></td>
                    <td><label>Jayasree</label></td>
                </tr>
                <tr>
                    <td><label>program</label></td>
                    <td><label>B-tech CSE</label></td>
                </tr>
                <tr>
                    <td><label>id</label></td>
                    <td> <label>2400031749</label></td>
                </tr>
                <tr>
                    <td><label>mail</label></td>
                    <td> <label>abcdjdb@mail.com</label></td>
                </tr>
                <tr>
                    <td><label>mobile</label></td>
                    <td><label>1234567891</label></td>
                </tr>
               </table>
                           

            </div>
        );
    }
}

export default Myapp;

