const User= require('../model/user');

const signup= async (req,res)=>{
    try{
        const {
            name,
            email,
            phoneNumber,
            registrationType
        }= req.body;
        if(!name || !email || !phoneNumber || !registrationType){
            console.log("please fill all fields");
        }

        let userCount= await User.find({registrationType: "offline"}).count()
        console.log(userCount)
        const userExits= await User.findOne({email: email}).exec()
        console.log("userExits", userExits)
        if(userExits || userExits== "null"){
            return res.send({ message: "email allready registered"})
        }
        const user= new User({name, email, phoneNumber, registrationType})
        if(userCount>=3){
            return res.status(500).send({message: "Sorry Not Invited !!"})
        }
        await user.save();
        res.status(200).send({message:"inserted data success"});
        
    }
    catch(err){
        console.log(err.message)
        res.status(200).send({message: err.message});
    }
}


module.exports={
    signup,
}