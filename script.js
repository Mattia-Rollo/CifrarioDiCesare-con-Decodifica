
    const testo = document.getElementById("testo");
    const doIt = document.getElementById("fallo");
    const decodifica = document.getElementById("decodifica");
    
    //aggiunto text area dove vado a ridecodificare il codice
    const textArea = document.getElementsByTagName('textarea')[0];
    // console.log(textArea);
    
    
    testo.addEventListener('change', function(){
        
        let daCodificare = testo.value;
        decodifica.innerHTML = "";
        
        for(let i = 0; i< daCodificare.length; i++){
            
            let carattere = daCodificare.charCodeAt(i) + 3
            // console.log(carattere)
            
            decodifica.innerHTML += String.fromCharCode(carattere)
        
            // if qui sotto spezza la frase una sola volta poi va in overflow
            // if(i == 27){
            //     decodifica.innerHTML += "<br />";
            // }
            
        }
        
        
        
        // console.log(decodifica.innerHTML.charCodeAt(0) - 3);
        
        const listaCaratteri = [];
        
        // dcreo un ciclo for basato sulla lunghezza della stringa nel div "codifica"
        for(let i = 0; i < daCodificare.length; i++) {
            //prendo la stringa che si trova in decodifica, la converto in numeri ascii, e abbasso il numero di 3
            //posizioni secondo la tabella
            listaCaratteri.push(decodifica.innerText.charCodeAt(i) - 3);
            //stampo ad ogni ciclo la lista
            // console.log(listaCaratteri[i]);
            let char = String.fromCharCode(listaCaratteri[i]);
            listaCaratteri.splice(i,1, char);
            // console.log(frase);
        }

        // console.log(listaCaratteri);
        textArea.innerText = listaCaratteri.join('');
    });

    const testo2 = document.getElementById("testo2");
    const doIt2 = document.getElementById("fallo2");
    const decodifica2 = document.getElementById("decodifica2");

    testo2.addEventListener('change', function(){
        

        // const listaCaratteri = [];
        
        let daCodificare2 = testo2.value;
        decodifica2.innerHTML = "";

        // dcreo un ciclo for basato sulla lunghezza della stringa nel div "codifica"
        for(let i = 0; i < daCodificare2.length; i++) {
            //prendo la stringa che si trova in decodifica, la converto in numeri ascii, e abbasso il numero di 3
            //posizioni secondo la tabella
            let carattere = daCodificare2.charCodeAt(i) - 3
            // console.log(carattere)
            
            decodifica2.innerHTML += String.fromCharCode(carattere)

            // listaCaratteri.push(decodifica2.innerText.charCodeAt(i) - 3);
            // console.log(decodifica2.innerText.charAt(i));
            // //stampo ad ogni ciclo la lista
            // // console.log(listaCaratteri[i]);
            // let char = String.fromCharCode(listaCaratteri[i]);
            // listaCaratteri.splice(i,1, char);
            // console.log(frase);
        }

        // console.log(listaCaratteri);
        // textArea.innerText = listaCaratteri.join('');
    });