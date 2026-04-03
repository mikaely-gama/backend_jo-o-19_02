const userModel = require("../models/userModel.js")

const getAllUsers = (req, res) => {
    const users = userModel.findAll()
    
    
    return res.send(users)
}

const createUser = (req, res) => {
    // const {
    //     name,
    //     age
    // } = req.body

    const name = req.body.name
    const age = req.body.age

    // const newUser = {
    //    name
    //    age
    // }

    const newUser = {
        id : Date.now(),
        name : name,
        age : age
    }

    const createdUser = userModel.create(newUser)
    

    res.status(201).json(createdUser)
}

const getUserById = (req, res) =>{

    
    const id =req.params.id

    const user = userModel.findById(id)

    return res.json(user)
}

const updateUser = (req, res) => {
      const {id} = req.params

    const {
        name,
        age
    } = req.body

    const userToUpdate = {
        name : name,
        age: age
    }

   const updateUser =  userModel.update(id, userToUpdate)

   if ( !updateUser ){
    return res.status(404).json({
        menssagem: "Usuário não encontrado"
    })
   }

   return res.json(updateUser )
}

const deleteUser = (req, res) =>{
    const id = Number(req.params.id)

    const user = userModel.remove(id)

  if ( !user ){
    return res.status(404).json({
        menssagem: "Usuário não encontrado"
    })
   }

     return res.json(user)
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}