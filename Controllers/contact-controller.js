const Contacts =require('../models/contactmodel')
const contactController={
    async getAllContacts(req,res){
        const contacts= await Contacts.find()
        res.json(contacts);
    },
    async getContactID(req,res){
        const id =req.params.id
        const contact=await Contacts.findById(id)
        if (!contact){
            res.status(404)
            throw new Error("Contact not found")
        }
        res.json(contact);
    },
    async addContacts(req,res){
        const {name,email,phone}=req.body
        if (!name || !email ||!phone){
            const error= new Error("All fields are mandotory")
            error.status=400
            throw error
        }
        const contact = await Contacts.create({
            name,
            email,
            phone,
            user_id:req.user.id,
        })
        res.json({message:"Add a Contact"});
    },
    async updateContacts(req,res){
        const id =req.params.id
        const contact=await Contacts.findById(id)
        if (!contact){
            res.status(404)
            throw new Error("Contact not found")
        }
        const updateContact=await Contacts.findByIdAndUpdate(id,req.body,{new:true})
        res.send(updateContact)

    },
    async deleteContacts(req,res){
        const id =req.params.id
        const contact=await Contacts.findById(id)
        if (!contact){
            res.status(404)
            throw new Error("Contact not found")
        }
        await Contacts.findByIdAndRemove(id)
        res.send("Contact Deleted")
    },
}
module.exports=contactController