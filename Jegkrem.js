export default class Jegkrem{
    constructor(nev,ar){
        this.nev = nev;
        this.ar = ar;
        if(ar <= 0){
            throw new  Error("ervenytelen fagyi ar");     
        }

    }
}