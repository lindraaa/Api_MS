const Gundam = require("../models/gundam_models")

module.exports.indexController = async (req,res)=>{
    // const MobileSuit = new Gundam({
    //     name:"Strike Freedom Gundam",
    //     description:"From Gundam Seed Destiny Series",
    //     catergory:"HG",
    //     price:1000
    // })
    // await MobileSuit.save()
    const Gundams = await Gundam.find({})
    res.json(Gundams)

}

module.exports.newGController = async (req,res)=>{
    try{
        // console.log(req.body)
        // const {name,description,category,price} = req.body;
        // const new_gundam = new Gundam({name,description,category,price})
        const new_gundam = new Gundam({...req.body})
        await new_gundam.save();
        return res.status(201).json({
            message:"New Gundam Successfully Created"
        })
    }catch(err){
        console.log("Failed",err.message)
        return res.status(500).json({
            message:"Failed to Create Gundam"
            
        })
    }
}