import React from 'react';
import './SignIn.css';

const SignIn=()=> {
  return (
    <div className='signContainer'>
      <div className='imageTreatment'>
        {/* <img src='../images/dental-treatment.jpg' alt=''/> */}
		<div className="overlay"></div>
      </div>
      {/* https://thenounproject.com/ */}
	  <form>
		   <div className="formContainer">
				<div>
					<img src="images/name-vector.PNG" alt="name-photo" /> 
					<input type="text" placeholder='Ihren Name schreiben'  value="" name="myname" />
				</div>
				<div>
					<img src="../images/telephone-vector.png" alt="telephone-photo" />
					<input type="text" placeholder='Ihre Mobilnummer schreiben' value=""  name="mobile" />
				</div>
				<div>
					<img src="../images/email-vector2.png" alt="email-photo" />
					<input type="text" placeholder='Ihre E-mail schreiben' value=""  name="email" />
				</div>
				<div>
					<img src="../images/password-vector2.png" alt="password-photo" />
					<input type="text" placeholder='Ihres Passwort schreiben'  value=""  name="password" />
				</div>
				
				<div>
					<input type='submit' className='forButton' value="I Want My Smile Back" />
				</div>
			</div>
		</form>
	  
    </div>
  )
};

export default SignIn;