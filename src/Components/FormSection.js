import React from 'react'
import './FormSection.css'

const FormSection = () => {
  return (
    <>
        <div className="containerFormSection">
            <div className="containerForm my-3 text-center">
                <form>
                    <div>
                        <input type="text" placeholder='Ihre Name schreiben' className='w-50 my-1 py-1' />
                    </div>
                    <div>
                        <input type="text" placeholder='Ihre Mobilnummer schreiben' className='w-50 my-1 py-1' />
                    </div>
                    <button className="btn btn-dark" type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default FormSection;