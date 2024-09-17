import { atlagJegkremAr, jegkremek } from './jegkremek.js';
import './style.css'

console.log(jegkremek);
console.log(atlagJegkremAr());

document.addEventListener('DOMContentLoaded', () => {
    
    const user =  document.getElementById("user");
    const pwMezo = document.querySelector('#loginForm input[name=pass]')
    const passLabel = document.getElementById('passLabel')
    const loginForm = document.getElementById('loginForm')
    const fagyiAra = document.getElementById('fagyiAra')
    
    pwMezo.addEventListener('input', () => {
        passLabel.innerHTML = pwMezo.value.length + '/8';
    })
    
    user.addEventListener('blur', () => {
            
        console.log("user blur")
        if(user.value.trim() == ''){
            user.style.backgroundColor='red'
        }
    })

    loginForm.addEventListener('submit', (event) => {
        let fagyi = document.getElementById('fagyi').value
        event.preventDefault();
        for(let jegkrem of jegkremek)
            {
                console.log(jegkrem.nev);
                if(jegkrem.nev == fagyi){
                    fagyiAra.innerHTML = "A fagyi ára: " + jegkrem.ar;
                }
            }
        if(fagyiAra.innerHTML == ' '){
            fagyiAra.innerHTML = "beszerzés alatt!"
        }
    })

});