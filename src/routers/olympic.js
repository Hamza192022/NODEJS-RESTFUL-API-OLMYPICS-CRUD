const express= require("express");
const routers = new express.Router()
const Olympics = require("../model/olympics")

routers.post("/olympics", async (req, res) => {
    try {
        console.log(req.body);
        const user = new Olympics(req.body);

        const result = await user.save()
        res.status(201).send(result)
    } catch (e) { res.status(400).send(e) }
})

routers.patch("/olympics/:_id", async(req,res)=>{
    try{
        const {_id} = req.params;
        console.log(`type of object Id: `,typeof _id);
        // const addColor = "skyblue"
        console.log(req.body.color);
        let elem =  (req.body.color);
        
        const updateResult = await Olympics.findByIdAndUpdate(_id , {
            '$push' : {'color': `${elem}`}
        },{
            new : true
        })

        updateResult;
        res.status(201).send(updateResult)

    }catch(e){

        console.log(`Error @ olympic.js > abcFunction: `, e)
        res.status(500).json({
            error: true,
            data:{}
        });
    }
})

module.exports =routers
