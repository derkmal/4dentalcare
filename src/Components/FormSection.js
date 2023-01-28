import React,{useState} from 'react'
import './FormSection.css'

const FormSection = () => {
    const [myname, setmyName]=useState("");
    const [mobile, setMobile]=useState("");
    const [newEntry, setNewEntry]=useState([]);

    const myData =(e)=> {
        setmyName(e.target.value);
    }
    const myMobile =(e)=> {
        setMobile(e.target.value);
    }
    const submitData =(e)=> {
        e.preventDefault();
        const newData={myname:myname, mobile:mobile};
        setNewEntry([...newEntry, newData]);
        setmyName("");
        setMobile("");
    }

    return (
    <>
        <div className="containerFormSection">
            <div className="containerForm my-3 text-center">
                <form onSubmit={submitData}>
                    <div>
                        <input type="text" placeholder='Ihre Name schreiben' className='w-50 my-1 py-1' value={myname} onChange={myData} />
                    </div>
                    <div>
                        <input type="text" placeholder='Ihre Mobilnummer schreiben' className='w-50 my-1 py-1' value={mobile} onChange={myMobile} />
                    </div>
                    <button className="btn btn-dark" type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </>
    )
}

export default FormSection;