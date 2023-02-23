import React from 'react';
import './SignIn.css';

const SignIn=()=> {
  return (
    <div className='signContainer'>
      <div className='imageTreatment'>
        <img src='../images/dental-treatment.jpg' alt=''/>
      </div>
      
	  <form>
			<div>
				<input type="text" placeholder='Ihren Name schreiben'  value="" name="myname" />
			</div>
			<div>
				<input type="text" placeholder='Ihre Mobilnummer schreiben' value=""  name="mobile" />
			</div>
			<div>
				<input type="text" placeholder='Ihre E-mail schreiben' value=""  name="email" />
			</div>
			<div>
				<input type="text" placeholder='Ihres Passwort schreiben'  value=""  name="password" />
			</div>
			
			<input type='submit' className='forButton' value="I Want My Smile Back" />
		</form>
	  
    </div>
  )
};

export default SignIn;