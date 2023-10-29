import User from '../model/user_model.js'
import bcrypt from 'bcrypt'
import { errorHandler } from '../utils/error.js'
import Jwt from 'jsonwebtoken'

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body
    const hashedPassword = bcrypt.hashSync(password, 10)
    const newUser = new User({ username, email, password: hashedPassword })
    try {
        await newUser.save()
        res.status(201).json({ message: "user created successfully" })
    } catch (error) {
        next(errorHandler(404,'falied to register'))
    }
}

export const signin = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const validUser = await User.findOne({ email })
        if (!validUser) {
            return next(errorHandler(411, 'email is not registered'))
        }
        const validPassword = bcrypt.compareSync(password, validUser.password)
        if (!validPassword) {
            return next(errorHandler(401, 'wrong credentials'))
        }
        const token = Jwt.sign({ id:validUser._id }, process.env.SECRET_KEY, { expiresIn: '3d' })
        res.status(200).json({validUser,token:token})

    } catch (error) {
        next(error)
    }
}
