const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')
const token = require('../util/generateToken')

//Desc Post api/user/login
//route api/user/login
//access Public

const loginUser = asyncHandler( async(req, res) => {
  const {email, password} = req.body
  const user = await User.findOne({email})
  if (user && (await user.matchPassword(password))) {
   res.json({
    _id : user._id,
    name : user.name,
    email : user.email,
    isAdmin : user.isAdmin,
    token : token(user._id)
   })

    
  } else { 
    res.status(404)
    .json({message: 'email or password is incorrect'})
  }

})

//Desc Post api/user/login
//route api/user/login
//access Public

const registerUser = asyncHandler( async(req, res) => {
  const {name, email, password} = req.body
  const userExist = await User.findOne({email})
  if (userExist) {
     res.status(404) 
      throw new Error('user already exist')
  }
    const user = await User.create({
      name,
      email,
      password
    })
    if (user) {
      res.status(201).json({
       _id : user._id,
       name : user.name,
       email : user.email,
       isAdmin : user.isAdmin,
       token : token(user._id)
      })
    } else{
      res.status(401).json('invalid user data')
    }

})





 module.exports = {loginUser, registerUser}