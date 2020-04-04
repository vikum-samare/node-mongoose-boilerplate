const UserRole = include("models/mongooseSchemas/user")
const TokenManager = include("utils/TokenManager")

const save = ({ userName, email, fullName }) => {
  const userRole = new UserRole({ userName, email, fullName })
  return new Promise((resolve, reject) => {
    const result = userRole.save()
    if (result) {
      resolve(result)
    } else {
      reject(result)
    }
  })
}
const findAll = () => new Promise((resolve, reject) => {
  const result = UserRole.find()
  result ? resolve(result) : reject(result)
})

module.exports = {
  save,
  findAll
}