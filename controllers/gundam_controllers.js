const Gundam = require("../models/gundam_models")

module.exports.index = async (req,res)=>{
    const MobileSuit = new Gundam({
        name:"Strike Freedom Gundam",
        description:"From Gundam Seed Destiny Series",
        catergory:"HG",
        price:1000
    })
    await MobileSuit.save()
    res.json(MobileSuit)

}