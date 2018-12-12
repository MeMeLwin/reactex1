import React, { Component } from 'react';
import './style.css';

class Project extends Component {

  render() {
    return (
      <div className="Project">
      <h2>User Registration</h2>
      <form>
        <div>
          <table>
            <tr>
              <td>
                <label>First Name: </label>
               </td>
              <td>
                <input type="text" ref="fName" /><br/>
              </td>
            </tr>
            <tr>
              <td>
                <label>Last Name: </label>
              </td>
              <td>
                <input type="text" ref="lName" /><br/>
              </td>
            </tr>
            <tr>
              <td>
                <label>Email: </label>
              </td>
              <td>
                <input type="text" ref="email" /><br/>
              </td>
            </tr>
            <tr>
              <td>
                <label>Password: </label>
              </td>
              <td>
                <input type="password" ref="password" /><br/>
              </td>
            </tr>
            <tr>
              <td colspan='2' align='center'>
                <input type='submit' value='Register'/>
              </td>
            </tr>
          </table>



        </div>
      </form>
      </div>
    );
  }
}

export default Project;
