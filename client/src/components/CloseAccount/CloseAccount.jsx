import React, { useState } from 'react'
import "./closeaccount.scss"
import DeleteModel from './DeleteModel/DeleteModel';


const CloseAccount = () => {
   
    const [open, setOpen] = useState(false);

    return (
        <>
            <p className="accounttCloseText">
                Are you sure you want to delete your account?
            </p>
            <button className='closeBtn' onClick={(e)=> setOpen(true)}>Close Account</button>
            {open && <DeleteModel setOpen={setOpen}/>}
        </>



    )
}

export default CloseAccount