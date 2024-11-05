import { createContext, useState } from "react";

export const KosarContext=createContext("")


const [kosarLista, setKosarLista]=useState([])

export const KosarProvider = ({children})=>{


function kosarba(termek){
   const segedKosar = [...kosarLista];
   segedKosar.push(termek)
   


}

return <KosarContext.Provider value={{termekLista, katt}}>
{children} 
</KosarContext.Provider>
}
