
import Jegkrem from "./Jegkrem.js";
export const jegkremek = [
    {
        nev: 'csoki',
        ar: 225,
    },
    
    {
        nev: 'vanilia',
        ar: 225,
    },
    {
        nev: 'sargadinnye',
        ar: 300,
    },
    {
        nev: 'aranygaluska',
        ar: 400,
    },

]

export function atlagJegkremAr(){
    let sum = 0;
    for(let jegkrem of jegkremek)
        {
            sum += jegkrem.ar;
        }
    return sum/jegkremek.length;
}