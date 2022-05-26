import logo from '../asset.jpg';
import '../App.css';
import { useEffect, useState } from 'react';
import React from 'react';

const Register=()=> {
    const [userdata, setUserdata] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        registrationtype: "",
    });
    
    let name, value;
    const handleInputs= async(event)=>{
        name= event.target.name
        value= event.target.value
        setUserdata({...setUserdata, [name]: value})  
    }


    const submitform= async(e)=>{
        e.preventDefault();
        const {name, email, phoneNumber,registrationtype}= userdata ;
            
        console.log("userdata", userdata)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(name, email, phoneNumber, registrationtype)
        };
        const res= await fetch('/signup', requestOptions)
        console.log("res", res)
        if(res.status===400 || !res){
            window.alert("Invalid Registration");
            console.log("Invalid Registration")
        }
        else{
            window.alert("add user successfully!")
            console.log("add user is successfully")
        }
    }

    useEffect(()=>{
        submitform()
    }, [])

  return (
    <>
      <div className="App" style={{ width: "100%", height: "100%", backgroundImage: `url(${logo})` }}>
        <hi>Registration User</hi>
        <div className='container'>
          <form>
            <div class="col-4">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" onChange={handleInputs}  placeholder="Enter Name..." />
            </div>
            <div class="col-4">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" onChange={handleInputs} placeholder="Enter Email..." />
            </div>
            <div class="col-4">
              <label for="phone">Phone Number</label>
              <input type="number" class="form-control" id="phone" onChange={handleInputs} placeholder="Enter Phone Number..." />
            </div>
            <div class="col-4">
              <label for="regtype">Registration Type</label>
              <input type="text" class="form-control" id="regtype" onChange={handleInputs} placeholder="Password" />
            </div>

            <button type="submit" class="btn btn-primary" onSubmit={submitform()}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
