
import uuid from 'uuid/v4'


export default class Local {
    constructor({ data }) {
        this.data = data
    }

    getAll(collectionName) {
        const logSource = "local.getAll"
        return new Promise((resolve, reject)=> {
            const collection = this.data[collectionName]
            if (!collection) {
                reject(new Error("collection not found"))
            }
            resolve(collection)
        })
    }
    get(id, collectionName) {
        return new Promise((resolve, reject)=> { 
            const collection = this.data[collectionName]
            if (!collection) {
                reject(new Error("collection not found"))
            }
            const pickedData = collection.find(data => data.id === id)
            resolve(pickedData)
        })
    }

    create(data, collectionName) {
        return new Promise((resolve, reject)=> { 
            const collection = this.data[collectionName]
            if (!collection) {
                reject(new Error("collection not found"))
            }
            if(!data.id) {
                data.id = uuid()
            }
            const newCollection = [...collection, data]
            this.data[collectionName] = newCollection
            resolve(data)
        })
    }

    update(collectionName, id, data) {
        return new Promise(async (resolve, reject)=> { 
            const collection = this.data[collectionName]
            if (!collection) {
                reject(new Error("collection not found"))
            }
            const oldData = await this.get(collectionName, id)
            const newData = { ...oldData, ...data}
            let newCollection = collection.filter(item=> item.id !== id)
            newCollection = [...newCollection, newData]
            this.data[collectionName] = newCollection
            resolve(newData)
        })
    }

    delete(id, collectionName) {
        return new Promise(async (resolve, reject)=> { 
            const collection = this.data[collectionName]
            if (!collection) {
                reject(new Error("collection not found"))
            }
            const data = await this.get(collectionName, id)
            const newCollection = collection.filter(item => item.id === id )
            this.data[collectionName] = newCollection
            resolve(data)
        })
    }
}