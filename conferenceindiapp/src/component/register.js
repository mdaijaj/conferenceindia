import logo from '../asset.jpg';
import '../App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Register=()=> {
    const [userdata, setUserdata] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        registrationType: "",
    });
    let name, value;
    const handleInputs= async(event)=>{
        name= event.target.name
        value= event.target.value
        console.log("value", value)
        setUserdata({...userdata, [name]: value})  
    }


    const submitform= async(e)=>{
      console.log(e)
        e.preventDefault();

        const {name, email, phoneNumber,registrationType}= userdata ;
        const users={name, email, phoneNumber,registrationType}

        const apicall= await axios.post(`signup`, {users} )
        console.log("apicall", apicall)
        if(!apicall.status=="200" || !apicall.status=="201"){
          window.alert("Invalid Registration");
        }
        window.alert("add user successfully!")
    }

    // useEffect(()=>{
    //     submitform()
    // }, [])

  return (
    <>
      <div className="App" style={{ width: "100%", height: "100%", backgroundImage: `url(${logo})` }}>
        <hi>Registration User</hi>
        <div className='container'>
          <form method='Post' className="register-form" id='register-form'>
            <div className="col-md-4 col-md-offset-5 ">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" name='name' id="name" onChange={handleInputs}  placeholder="Enter Name..." />
            </div>
            <div className="col-4">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" name='email' id="email" onChange={handleInputs} placeholder="Enter Email..." />
            </div>
            <div className="col-4">
              <label htmlFor="phone">Phone Number</label>
              <input type="number" className="form-control" id="phone" name='phoneNumber' onChange={handleInputs} placeholder="Enter Phone Number..." />
            </div> 

            <div className="col-4">
              <label htmlFor="regtype">Registration Type</label>
              <input type="text" className="form-control" id="regtype" name='registrationType' onChange={handleInputs} placeholder="Enter Registration Type" />
            </div>

            {/* <label className="" for="customRadioInline1">Registration Type:-  </label>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline1" name="registrationType" value={userdata.registrationType} onChange={handleInputs} className="custom-control-input"/>
                <label className="custom-control-label" for="customRadioInline1">Virtual</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline2" name="registrationType" value={userdata.registrationType} onChange={handleInputs} className="custom-control-input"/>
                <label className="custom-control-label" for="customRadioInline2">Offline</label>
              </div>     */}

            <div className="form-group form-button">
                <input type="submit" name="signup" id="signup" className="form-submit" onClick={submitform} value="Register" />
            </div>          
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
