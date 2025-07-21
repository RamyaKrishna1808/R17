import React, { Component } from 'react';
import './MyApp.css'
class MyApp extends Component {
    render() {
        return (
            <div  className='MyInfo'>
              <img className='photo'src='/user logo.jpg'alt='photo/'></img>
                <table>
              <tr>
      <td><label>Name</label></td>
      <td>Ramya Krishna</td>
    </tr>
    <tr>
      <td><label>University</label></td>
      <td>K L University</td>
    </tr>
    <tr>
      <td><label>Course</label></td>
      <td>B.Tech - CSE</td>
    </tr>
    <tr>
      <td><label>Year</label></td>
      <td>1st Year</td>
    </tr>
    <tr>
      <td>Email Id </td>
      <td>ramyakrishnaa1808@gmail.com</td>
    </tr>
  </table>
            </div>
        );
    }
}
export default MyApp;