import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext=createContext("")

export const ApiProvider = ({children})=>{
    const [termekLista,setTermekLista]=useState([])
    
    const getAdat = async(vegpont)=>{
        //a szervernél meg kell adni egy végpontot amit az axiosgethez is beírjuk ugyanezt  végpontot, ez lesz az a végpont amit a termékek lekérésénél használunk
        //megcímezzük, erről a vpontról kérjük le az adatokat,
        //getadat egy fv ami megkapja ezt a vpontot itt történik meg a get kérés ezen a ponton
        //ha sikerül elérnem a vpontot akkor kapok egy választ, ha nem sikerül akkor kapok egy hibaüzenetet
        try{
            const response = await myAxios.get("/products");
            //console.log("adat: ", response.adat);
            setTermekLista(response.data)
            } catch (err) {
                console.error("Hiba történt az adat elküldésekor.", err);
            }finally{

            }
    }
    
    //useEffect hook segítségével hívjuk meg az aszinkron get kéréseket
    //aszinkron hívások esetén ne végtelen sokszor fusson le a kérés, hanem csak akkor ha a függőséglistában változás történik
    
    useEffect(()=>{
        getAdat("/products");
    },[]);

    return(
        <ApiContext.Provider value={{termekLista}}>
            {children}
        </ApiContext.Provider>
    )
}