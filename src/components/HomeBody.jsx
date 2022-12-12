import React, { useContext } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from 'react-bootstrap';
import TableField from './TableField';
import { UserContext } from '../App';


const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const HomeBody = () => {
    const value = useContext(UserContext);
    function onChange(value) {
        console.log("Captcha value:", value);
    }
    return (
        <div>
            <h5 className='text-center py-4 text-white font-weight-bold' style={{ backgroundColor: '#9B1FE9' }}>Notice Here</h5>
            <div className='p-5 container sm-row'>
                <h2 className='fs-1' style={{ color: '#9B1FE9', fontWeight: 'bold' }}>Request testnet LINK</h2>
                <p className='w-100 w-md-75 w-lg-50 col-8 col-md-4 col-lg-4 text-muted'>Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract</p>
                <div>
                    <p className='fs-6'>Your wallet is connected to <span className='fw-bold'>{value ? value : "name"}</span>, so you are requesting <span className='fw-bold'>{value ? value : "name"}</span> Link/ETH.</p>
                    <div className="mb-3 w-50 border border-1">
                        <label for="exampleFormControlInput1" className="form-label fw-bold" style={{ color: '#9B1FE9' }}>Wallet Address</label>
                        <input type="email" className="form-control" placeholder="Wallet Address..." />
                        <label for="exampleFormControlInput1" className="form-label fw-bold" style={{ color: '#9B1FE9' }}>Request Type</label><br />
                        <span className='pe-5 fw-light'>20 Test Link</span>   <span className='ps-5 fw-light'>0.5 ETH</span>
                    </div>

                    <ReCAPTCHA className='mt-4' sitekey={TEST_SITE_KEY} onChange={onChange} />
                    <Button className='my-3' style={{ backgroundColor: '#9B1FE9' }}>Send Request</Button>{' '}
                    <p className='fw-bold'>Request History </p>
                    <Button style={{ backgroundColor: '#0000FF' }}>ETH Transaction History</Button>{' '}
                    <Button variant="light">TestLink Transaction History</Button>{' '}
                    <div className='ps-4 pt-3'>
                        <TableField></TableField>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomeBody;



