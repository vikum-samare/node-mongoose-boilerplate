const conf = include("utils/config")
const { JWT_SECRET } = conf
const [User, UserRole] = include("models/mongooseSchemas/user")
const TokenManager = include("utils/TokenManager")

const saveUser = async ({ email, password, fullName, contactNumber }) => {
    const user = new User({ email, password, fullName, contactNumber })
    
      try {
        const newUser = await user.save()
        return newUser
      } catch (err) {
        return new Error({ message: err.message })
      }
}

module.exports = {
    saveUser
}