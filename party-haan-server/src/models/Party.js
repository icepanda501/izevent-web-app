
import { Firestore } from '../database'
import firebase from '../lib/firebase'

const databaseEngine = new Firestore({ firebase })

class Party {
    constructor({ databaseEngine, collectionName }) {
        this.collectionName = collectionName
        this.databaseEngine = databaseEngine
    }
    async getAll() {
        const result = await this.databaseEngine.getAll(this.collectionName)
        return result
    }
    async get(id) {
        const result = await this.databaseEngine.get(id)
        return result
    }
    async create({ title, detail, image, maxJoiner, joinerList: [] }) {
        const result = await this.databaseEngine.create({ title, detail, image, maxJoiner, joinerList  })
        return result
    }
    async join({ userId, partyId }) {
        const party =  await this.get(partyId)
        let newJoinerList = [ ...party.joinerList, userId]
        newJoinerList = Array.from(new Set(newJoinerList)) // uniuqe user id in list
        const updatedParty = { ...party, joinerList: newJoinerList }
        const result = await this.databaseEngine.update(partyId, updatedParty)
        return result
    }
}



export default new Party({ databaseEngine, collectionName : 'partyList' })