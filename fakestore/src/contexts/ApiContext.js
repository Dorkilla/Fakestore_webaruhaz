import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext=createContext("")

export const ApiProvider = ({children})=>{
    const [termekLista,setTermekLista]=useState([]);
    const [kategoriaLista, setKategoriaLista]=useState([]);
    
    const getAdat = async(vegpont,callbackfv)=>{
        //a szervernél meg kell adni egy végpontot amit az axiosgethez is beírjuk ugyanezt  végpontot, ez lesz az a végpont amit a termékek lekérésénél használunk
        //megcímezzük, erről a vpontról kérjük le az adatokat,
        //getadat egy fv ami megkapja ezt a vpontot itt történik meg a get kérés ezen a ponton
        //ha sikerül elérnem a vpontot akkor kapok egy választ, ha nem sikerül akkor kapok egy hibaüzenetet
        try{
            const response = await myAxios.get(vegpont);
            //console.log("adat: ", response.adat);
            callbackfv(response.data)
            } catch (err) {
                console.error("Hiba történt az adat elküldésekor.", err);
            }finally{

            }
    }
    
    const postAdat = async(vegpont,adat)=>{
        
        try{
            const response = await myAxios.post(vegpont,adat);
            //console.log("adat: ", response.adat);
            console.log("adat:" , response.data)
            } catch (err) {
                console.error("Hiba történt az adat elküldésekor.", err);
            }finally{
                
            }
    }
    
    //useEffect hook segítségével hívjuk meg az aszinkron get kéréseket
    //aszinkron hívások esetén ne végtelen sokszor fusson le a kérés, hanem csak akkor ha a függőséglistában változás történik
    
    useEffect(()=>{
        getAdat("/products",setTermekLista);
        getAdat("/products/categories",setKategoriaLista);
    },[]);

    return(
        <ApiContext.Provider value={{termekLista,kategoriaLista,postAdat}}>
            {children}
        </ApiContext.Provider>
    )
}