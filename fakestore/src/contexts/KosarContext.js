import { createContext, useState } from "react";

export const KosarContext = createContext("");

function KosarContextProvider({ children }) {
  
    const [kosarLista, setKosarLista] = useState([]);

   
    const katt = () => {
        console.log("Gombra kattintva");
    };

    
    function kosarba(termek) {
        const segedKosar = [...kosarLista];
        segedKosar.push(termek);
        setKosarLista(segedKosar);
    }

    return (
        <KosarContext.Provider value={{ kosarLista, katt, kosarba }}>
            <div>
                <button onClick={katt}>Kattintás</button>
                <ul>
                    {kosarLista.map((termek, index) => (
                        <li key={index}>{termek}</li>
                    ))}
                </ul>
            </div>
            {children} 
        </KosarContext.Provider>
    );
}

export default KosarContextProvider;
