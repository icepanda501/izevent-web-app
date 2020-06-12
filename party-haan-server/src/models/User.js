
import { Firestore } from '../database'
import firebase from '../lib/firebase'
import { bcryptPassword,comparePassword } from '../lib/bcrypt'
import { encode } from '../lib/passport'

const databaseEngine = new Firestore({ firebase })

class User {
    constructor({ databaseEngine, collectionName }) {
        this.collectionName = collectionName
        this.databaseEngine = databaseEngine
    }
    async getAll() {
        const result = await this.databaseEngine.getAll(this.collectionName)
        return result
    }
    async create({ username, email, password, needPromotion }) {
        const passwordEncrypted = await bcryptPassword(password)
        const result = await this.databaseEngine.create({ 
            username, 
            email, 
            password: passwordEncrypted, 
            needPromotion }, this.collectionName)
        return result
    }
    async get(id) {
        const result = await this.databaseEngine.get(id)
        return result
    }
    async login({ username, password }) {
        const user = await this.databaseEngine.getOne({ username })
        const isMatch = comparePassword(password, user.password)
        if(!isMatch){
            throw new Error("login fail password is not match")
        }else {
            delete user.password
            return {
                ...user,
                token: encode({ id: user.id })
            }
        }
    }
}



export default new User({ databaseEngine, collectionName : 'userList' })