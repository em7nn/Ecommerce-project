import React, { useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./accountt.scss"
import Orders from '../OrderComponents/Orders/Orders';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserInfo from '../UserInfo/UserInfo';
import ChangePassword from '../ChangePassword/ChangePassword';
import CloseAccount from '../CloseAccount/CloseAccount';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import ChangeImage from '../ChangeImage/ChangeImage';

const Accountt = () => {
   
    const user = useSelector((state) => state.user.currentUser);
    
    const navigate = useNavigate();

    useEffect(()=>{
        !user && navigate('/')
    });

    return (
        <div className='accountt'>
            <h3 className="accounttTitle">My Account</h3>
            <p className="accounttSubTitle">Welcome back {user.username}</p>
            <Tabs>
                <TabList>
                    <Tab>Info</Tab>
                    <Tab>My Orders</Tab>
                    <Tab>Change Info</Tab>
                    <Tab>Change Password</Tab>
                    <Tab>No Entry</Tab>
                </TabList>

                <TabPanel>
                    <h3 className='accounttContentTitle'>Info</h3>
                    <div className="accounttContentGroups">
                       <UserInfo user={user}/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h3 className='accounttContentTitle'>My Orders</h3>
                    <div className="ordersDiv">
                        <Orders/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h3 className='accounttContentTitle'>Change Info</h3>
                    <div className="accounttContentGroups">
                        <div className="updateInfoSignDiv">
                         <ChangeInfo/>
                        </div>
                        <div className="updateImage">
                          <ChangeImage/>
                        </div>
                    </div>

                </TabPanel>
                <TabPanel>
                    <h3 className='accounttContentTitle'>Change Password</h3>
                    <div className="updateSignDiv">
                       <ChangePassword user={user}/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h3 className='accounttContentTitle'>Close Account</h3>
                    <div className="accounttContentGroups" id='close'>
                        <CloseAccount/>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Accountt