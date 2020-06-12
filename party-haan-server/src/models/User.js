
import { Firestore } from '../database'
import firebase from '../lib/firebase'
import { bcryptPassword, comparePassword } from '../lib/bcrypt'
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
        if(typeof username !== 'string'){
            throw Error("username is missing or type is wrong")
        }
        if(typeof email !== 'string'){
            throw Error("email is  missing or type is wrong")
        }
        if(typeof password !== 'string'){
            throw Error("password is  missing or type is wrong")
        }
        if(typeof needPromotion !== 'boolean'){
            throw Error("needPromotion is missing or type is wrong")
        }
        const passwordEncrypted = await bcryptPassword(password)
        const userObject = { 
            username, 
            email, 
            password: passwordEncrypted, 
            needPromotion 
        }
        const user = await this.databaseEngine.create(this.collectionName, userObject)
        delete user.password
        return {
            ...user,
            token: encode({ id: user.id })
        }
    }
    async get(id) {
        const result = await this.databaseEngine.get(this.collectionName, id)
        return result
    }
    async login({ username, password }) {
        if(typeof username !== 'string'){
            throw Error("username is missing or type is wrong")
        }
        if(typeof password !== 'string'){
            throw Error("password is  missing or type is wrong")
        }
        const user = await this.databaseEngine.getOne(this.collectionName, { username })
        const isMatch = await comparePassword(password, user.password)
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