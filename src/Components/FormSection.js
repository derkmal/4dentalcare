import React,{useState} from 'react'
import './FormSection.css'

const FormSection = () => {
    const [newEntry, setNewEntry]=useState({
        myname:"",
        mobile:"",
        email:"",
        password:""
    });

    const inputData=(e)=> {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setNewEntry((previousData)=> {
            if(name == 'myname') {
                    return {
                        myname:value,
                        mobile:previousData.mobile,
                        email:previousData.email,
                        password:previousData.password
                    }
            } else if(name == 'email') {
                    return {
                        myname:previousData.myname,
                        mobile:previousData.mobile,
                        email:value,
                        password:previousData.password                        
                    }
            } else if(name == 'password') {
                    return {
                        myname:previousData.myname,
                        mobile:previousData.mobile,
                        email:previousData.email,
                        password:value    
                    }
            } else if(name == 'mobile') {
                return {
                    myname:previousData.myname,
                    mobile:value,
                    email:previousData.email,
                    password:previousData.password    
                }
            }
        })
    }

    return (
    <>
        <div className="containerFormSection">
            <div className="containerForm my-3 text-center">
                <form>
                    <div>
                        <input type="text" placeholder='Ihren Name schreiben' className='w-50 my-1 py-1' value={newEntry.myname} name="myname" onChange={inputData} />
                    </div>
                    <div>
                        <input type="text" placeholder='Ihre Mobilnummer schreiben' className='w-50 my-1 py-1' value={newEntry.mobile} name="mobile" onChange={inputData} />
                    </div>
                    <div>
                        <input type="text" placeholder='Ihre E-mail schreiben' className='w-50 my-1 py-1' value={newEntry.email} name="email" onChange={inputData} />
                    </div>
                    <div>
                        <input type="text" placeholder='Ihres Passwort schreiben' className='w-50 my-1 py-1' value={newEntry.password} name="password" onChange={inputData} />
                    </div>
                    <button className="btn btn-dark" type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </>
    )
}

export default FormSection;