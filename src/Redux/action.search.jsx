// Auth Actions here

import axios from "axios"
import { GET_SEARCH_DATA } from "./type.search"




export const handleSearch=(creds)=>async(dispatch)=>{

    

    // console.log("ddddddddd",creds)

    try{
        let res=await axios(`https://api.dexscreener.com/latest/dex/search/?q=${creds}`)

        dispatch({type: GET_SEARCH_DATA,payload:res.data.pairs})

       

    }


    catch(err){

       console.log(err)

    }
}
