import React from 'react';
import { Form } from 'react-bootstrap';
function Login(props) {
  return (

    <div>
      <Form action="">
        <table className='row'>
        <tbody className='col'>

        <tr>
          <td>
            <label htmlFr="">username</label>
            <input type="text" />
          </td>
          
          <td>
            <label htmlFor="">username</label>
            <input type="text" />
          </td>
          </tr>
        </tbody>
        </table>
        <button>Log-in</button>
      </Form>
    </div>
  );
}

export default Login;