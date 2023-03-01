import React from 'react'
import "./userinfo.scss"

const UserInfo = ({user}) => {


    return (
        <>
            <div className="accountContentGroupsLeft">
                <div className="accounttContentGroup">
                    <span className="accounttLight">Username:</span>
                    <span className="accounttBold">{user.username}</span>
                </div>
                <div className="accounttContentGroup">
                    <span className="accounttLight">Email:</span>
                    <span className="accounttBold">{user.email}</span>
                </div>
                <div className="accounttContentGroup">
                    <span className="accounttLight">Country:</span>
                    <span className="accounttBold">{user.country}</span>
                </div>
                <div className="accounttContentGroup">
                    <span className="accounttLight">City:</span>
                    <span className="accounttBold">{user.city}</span>
                </div>
                <div className="accounttContentGroup">
                    <span className="accounttLight">Address:</span>
                    <span className="accounttBold">{user.address}</span>
                </div>
                <div className="accounttContentGroup">
                    <span className="accounttLight">Phone:</span>
                    <span className="accounttBold">{user.phone}</span>
                </div>
            </div>
            <div className="accountContentGroupsRight">
                <img src={`./assets/uploads/${user.image}`} alt={user.username} />
            </div>
        </>
    )
}

export default UserInfo