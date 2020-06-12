import uniuqeArray from '../utils/uniqueArray'

const defaultImage = 'https://firebasestorage.googleapis.com/v0/b/izevent.appspot.com/o/images%2Fpexels-photo-1190298.jpeg?alt=media'

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
        const result = await this.databaseEngine.get(this.collectionName, id)
        return result
    }
    async create({ title, detail = '', image = defaultImage, maxJoiner, joinerList = [], owner}) {
        maxJoiner = parseInt(maxJoiner)
        if(typeof owner !== 'string'){
            throw Error("owner is missing or type is wrong")
        }
        if(typeof title !== 'string'){
            throw Error("title is missing or type is wrong")
        }
        if(isNaN(maxJoiner)){
            throw Error("maxJoiner is missing or type is wrong")
        }
        const partyObject = {
            title,
            detail,
            image,
            maxJoiner,
            joinerList,
            owner,
        }
        const result = await this.databaseEngine.create(this.collectionName, partyObject)
        return result
    }
    async join({ userId, partyId }) {
        if(typeof userId !== 'string'){
            throw Error("userId is missing or type is wrong")
        }
        if(typeof partyId !== 'string'){
            throw Error("partyId is missing or type is wrong")
        }
        const party =  await this.get(partyId)
        const oldJoinerIsMaximum = party.joinerList.length >= party.maxJoiner
        if(oldJoinerIsMaximum){
            throw Error("number of joiner is maximum")
        }
        let newJoinerList = [ ...party.joinerList, userId]
        newJoinerList = uniuqeArray(newJoinerList) // uniuqe user id in list
        const isMaximum = newJoinerList.length >= party.maxJoiner
        const updatedParty = { ...party, joinerList: newJoinerList, isMaximum}
        const result = await this.databaseEngine.update(this.collectionName, partyId, updatedParty)
        return result
    }

    async leave({ userId, partyId }) {
        if(typeof userId !== 'string'){
            throw Error("userId is missing or type is wrong")
        }
        if(typeof partyId !== 'string'){
            throw Error("partyId is missing or type is wrong")
        }
        const party =  await this.get(partyId)
        if(party.joinerList.length <= 0){
            throw Error("joiner list is zero ? cannot leave party")
        }
        let newJoinerList = party.joinerList.filter(joinerId => joinerId !== userId)
        const isMaximum = newJoinerList.length >= party.maxJoiner
        const updatedParty = { ...party, joinerList: newJoinerList, isMaximum}
        const result = await this.databaseEngine.update(this.collectionName, partyId, updatedParty)
        return result
    }
    async delete(partyId) {
        if(typeof partyId !== 'string'){
            throw Error("partyId is missing or type is wrong")
        }
        const result = await this.databaseEngine.delete(this.collectionName, partyId)
        return result
    }
}



export default Party