
import uuid from 'uuid/v4'

export default class Firebase {
    constructor({ firebase }) {
        this.db = firebase.firestore()
    }

    buildQuery(collectionName, query) {
        let queryBuilder = this.db.collection(collectionName)
        Object.keys(query).forEach(key=> {
            const value = query[key]
            queryBuilder.where(key, '==', value)
        })
        return queryBuilder
    }

    async getAll(collectionName, query) {
        let snapshot;
        if(query){
            snapshot = await this.buildQuery(collectionName, query).get()
        }else {
            snapshot = await this.db.collection(collectionName).get()
        }
        let dataList = []
        snapshot.forEach((doc) => {
          dataList = [...dataList , { id:doc.id, ...doc.data() } ]
        });
        return dataList
    }
    async getOne(collectionName, query) {
        if(!query){
            throw new Error('query parameter is required')
        }
        let snapshot;
        snapshot = await this.buildQuery(collectionName, query).get()
        const [firstSnapShot] = snapshot
        if(firstSnapShot){
            return firstSnapShot.data()
        }else {
            return null
        }
    }
    async get(id, collectionName) {
        let doc = await this.db.collection(collectionName).doc(id)
        if(doc.exists){
            return doc.data()
        }else {
            return null
        }
    }
    async create(data, collectionName) {
        const result = await this.db.collection(collectionName).add(data)
        console.log('result', result)
        return data
    }
    async update(id, data, collectionName) {
            const oldData = await this.get(id, collectionName)
            const newData = { ...oldData, ...data}
            await db.collection(collectionName).doc(id).update(newData)
            return newData
    }

    async delete(id, collectionName) {
            const data = await this.get(id, collectionName)
            await this.db.collection(collectionName).doc(id).delete()
            return data
    }
}