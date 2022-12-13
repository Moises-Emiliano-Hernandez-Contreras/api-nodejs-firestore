const {db}= require('../firebase')
const {Router}=require('express')
const router = Router()
router.get('/', async (req, res) => {
      const result=await db.collection('contacts').get()      
      const cont=result.docs.map((item)=>({
            contacto:item.id,...item.data()
      }))      
      return res.send('Hello World!')
})
router.post('/',async(req,res)=>{      
      const {firstname,lastname,email,phone}=req.body
      await db.collection("contacts").add({
            firstname,
            lastname,
            email,
            phone
      })
      res.send("Metodo post")
})
router.put('/:id',async (req,res)=>{
      const id=req.params.id
      const {firstname,lastname,email,phone} = req.body
      const doc=await db.collection('contacts').doc(id).update(
            {
                  firstname,
                  lastname,
                  email,
                  phone
            }
      )
      return res.send("Editando...")
})
router.delete('/:id',async (req,res)=>{
      const id=req.params.id
      const doc=await db.collection('contacts').doc(id).delete()      
      return res.send("Eliminando...")
})
module.exports=router