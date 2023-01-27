import React from 'react'
import './FormSection.css'

const FormSection = () => {
  return (
    <form>
        <div>
            <input type="text" placeholder='Ihre Name schreiben' />
        </div>
        <div>
            <input type="text" placeholder='Ihre Mobilnummer schreiben' />
        </div>
        <button className="btn btn-dark">Submit</button>
    </form>
  )
}

export default FormSection