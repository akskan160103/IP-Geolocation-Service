import React from 'react'
import {useState} from 'react' /* Importing the 'useState' hook */
import '../InputForm/InputForm.css'

function InputForm() {
  const[ipAddress, SetIpAddress] = useState('')
  const[error, SetError]=useState(null)

  //This is the syntax for an 'arrow function:' Since the variable is const, it cannot be reassigned to anything else.
  /* 1.validateIP is the name of a variable assigned to this function:
     2.ip is the name of the variable which stores the value passed to the function
     3.In JavaScript, the type of the variable {in this case ip} need not be explicitly stated:
  */

  /* Return true if the IP address is valid, false otherwise */
  const validateIP = (ip) => {
    // Defines a format which is of the form X.X.X.X where X can be from 0-255 for the ipFormat string variable
    let ipFormat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    //Returns true if the format of ip (inputed ip address) matches what we have defined -> Means that ip is a valid IP address
    return ipFormat.test(ip)
  };


  const handleSubmit = (e) => {
    e.preventDefault(); //preventDefault is a member method of an event object. It prevents the default behavior associated with an event from taking place.
    //In this case, the event is: 'Form Submission' and the default behavior is: 'Refreshing the page when the form has been submitted'
  
    if (validateIP(ipAddress)) {
    SetError(null); /* Clear the error message if the IP address is valid */
    } 
    else {
    SetError('Please enter a valid IP address.'); /* Set an error message if the IP address is not valid */
    }
}

return (
    <section className='InputFormContainer'>

      {/*Block-Level Element*/}
      <form onSubmit={handleSubmit}> {/*Refers to handleSubmit (Assigned to a function) when the 'Submit' event is called on this element*/}
      {/*In-Line Element*/}
      <input type='text' value={ipAddress} onChange={(e) => SetIpAddress(e.target.value)} placeholder='Enter an IP address' className='InputContainer'> 
      {/*type attribute specifies the type of input control to display */} 
      {/*value attribute sets the initial value of the input field to the value contained in ipAddress*/}
      {/*onChange attribute triggers the SetIpAddress function when the value of the input field is changed: When value of input
      field is changed, it updates the current value of ipAddress*/}
      </input>

      <div></div>

      <button type='submit' className='ButtonContainer'> {/*In-Line element*/}
      Submit                 {/*The type attribute being set to submit triggers the submit event on the ancestral form element*/}
      </button>

      {error && <p className='ErrorMessageContainer'>{error}</p>} {/*This is called conditional rendering: The && operation means that the first falsy value will be rendered. If none of the 
      values are falsy, it renders(returns) the last truthy value.*/}
      {/*If error == null, that is a falsy, and error will be returned. But since this is not an element, nothing will be displayed. <p> --- </ p> will always be
      truthy since it is a valid HTML element, hence if error is not null (truthy), the last truthy value [element p] will be rendered. */}

    </form>
    </section>
     
  )
};

export default InputForm

/* JavaScript has two syntaxes for functions: Arrow syntax and Traditional syntax.
The arrow sytax is a lot more concise than the traditional syntax. Traditional and arrow syntax can be used interchangeably (by itself, inside another function), but they have
few minor differences.
*/

/* Types of variables in JavaScript:
let: Keyword used to declare block level variables. 
const: Keyword used to declare block level variables which can't be reassigned.
var: Keyword used to declare global level variables. 
*/

