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
           return{
                ...previousData,
                [name]: value
           }
        })
    }

    return (
    <>
        <div className="containerFormSection">
            <div className="containerForm my-3 text-center">
                <form>
                    <div>
                        <input type="text" placeholder='Ihren Name schreiben' className='w-50 my-1 py-2 rounded' value={newEntry.myname} name="myname" onChange={inputData} />
                    </div>
                    <div>
                        <input type="text" placeholder='Ihre Mobilnummer schreiben' className='w-50 my-1 py-2 rounded' value={newEntry.mobile} name="mobile" onChange={inputData} />
                    </div>
                    <div>
                        <input type="text" placeholder='Ihre E-mail schreiben' className='w-50 my-1 py-2 rounded' value={newEntry.email} name="email" onChange={inputData} />
                    </div>
                    <div>
                        <input type="text" placeholder='Ihres Passwort schreiben' className='w-50 my-1 py-2 rounded' value={newEntry.password} name="password" onChange={inputData} />
                    </div>
                    <button className="btn btn-warning rounded-bottom-1 px-5 btn-lg" type='submit'>I Want My Smile Back</button>
                </form>
            </div>
        </div>
    </>
    )
}

export default FormSection;