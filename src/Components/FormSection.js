import React,{useState} from 'react'
import './FormSection.css'

const FormSection = () => {
    const [myname, setmyName]=useState("");
    const [mobile, setMobile]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [newEntry, setNewEntry]=useState([]);

    const myData =(e)=> {
        setmyName(e.target.value);
    }
    const myMobile =(e)=> {
        setMobile(e.target.value);
    }
    const myEmail =(e)=> {
        setEmail(e.target.value);
    }
    const myPassword =(e)=> {
        setPassword(e.target.value);
    }
    const submitData =(e)=> {
        e.preventDefault();
        if(myname,mobile,email,password) {

            const newData={myname:myname, mobile:mobile, email:email, password:password};
            setNewEntry([...newEntry, newData]);
            setmyName("");
            setMobile("");
            setEmail("");
            setPassword("");
        } else {
            alert("Bitte füllen Sie das Formular aus");
        }
    }

    return (
    <>
        <div className="containerFormSection">
            <div className="containerForm my-3 text-center">
                <form onSubmit={submitData}>
                    <div>
                        <input type="text" placeholder='Ihren Name schreiben' className='w-50 my-1 py-1' value={myname} onChange={myData} />
                    </div>
                    <div>
                        <input type="text" placeholder='Ihre Mobilnummer schreiben' className='w-50 my-1 py-1' value={mobile} onChange={myMobile} />
                    </div>
                    <div>
                        <input type="text" placeholder='Ihre E-mail schreiben' className='w-50 my-1 py-1' value={email} onChange={myEmail} />
                    </div>
                    <div>
                        <input type="text" placeholder='Ihres Passwort schreiben' className='w-50 my-1 py-1' value={password} onChange={myPassword} />
                    </div>
                    <button className="btn btn-dark" type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </>
    )
}

export default FormSection;