const User= require('../model/user');

const signup= async (req,res)=>{
    try{
        // const {
        //     name,
        //     email,
        //     phoneNumber,
        //     registrationType
        // }= req.body;
        const userinf=req.body.users
        console.log(userinf.name, userinf.email, userinf.phoneNumber, userinf.registrationType)
        if(!userinf.name || !userinf.email || !userinf.phoneNumber || !userinf.registrationType){
            console.log("please fill all fields");
        }

        let userCount= await User.find({registrationType: "offline"}).count()
        console.log(userCount)

        const userExits= await User.findOne({email: userinf.email}).exec()
        console.log("userExits", userExits)
        if(userExits ){
            return "email allready registered"
        }
        const user= new User({
            name: userinf.name, 
            email: userinf.email, 
            phoneNumber: userinf.phoneNumber, 
            registrationType: userinf.registrationType
        })
        console.log("Sorry Not Invited !!", user)
        
        if(user.registrationType=="offline"){
            console.log("userCount", userCount)
            if(userCount>=3){
                return res.status(500).send({message: "Sorry Not Invited !!" , data: user})
            }
        }
        await user.save();
        return res.status(200).send({message:"inserted data success", data: user});
    }
    catch(err){
        console.log(err.message)
        res.status(200).send({message: err.message});
    }
}


module.exports={
    signup,
}