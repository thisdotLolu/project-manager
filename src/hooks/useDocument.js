import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"


export const useDocument = (collection,id) =>{
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)


    useEffect(()=>{
        const ref = projectFirestore.collection(collection).doc(id)

        const unsubscribe = ref.onSnapshot((snapshot)=>{
            setDocument({...snapshot.data(), id: snapshot.id})
            setError(null)
        }, (error)=>{
            console.log(error)
            setError('FAILED TO GET DOCUMENTS')
        })

        return ()=>unsubscribe()
    },[collection, id])

    return {document,error}
}