
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
            console.log(key, '==', value)
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
          dataList = [...dataList , { ...doc.data(), id:doc.id } ]
        });
        return dataList
    }
    async getOne(collectionName, query) {
        if(!query){
            throw new Error('query parameter is required')
        }
        const dataList = await this.getAll(collectionName, query)
        const [data] = dataList
        if(data){
            return data
        }else {
            return null
        }
    }
    async get(collectionName, id) {
        const doc = await this.db.collection(collectionName).doc(id).get()
        if(doc.exists) {
            return { ...doc.data(), id: doc.id }
        }
        return null
    }
    async create(collectionName, data) {
        const docRef = await this.db.collection(collectionName).add(data)
        const doc = await docRef.get()
        return { ...doc.data(), id: doc.id}
    }
    async update(collectionName, id, data) {
            const oldData = await this.get(collectionName, id)
            const newData = { ...oldData, ...data}
            await this.db.collection(collectionName).doc(id).update(newData)
            return newData
    }

    async delete(collectionName, id) {
            const data = await this.get(collectionName, id)
            await this.db.collection(collectionName).doc(id).delete()
            return data
    }
}