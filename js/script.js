'use strict'
/*
Rifare l'esercizio della to do list argomento dell to-do list a piacere :
    faccia_che_festeggia:.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene
     rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": 
cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un 
nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

const {createApp} = Vue;
const app = Vue.createApp({
    data() {
        return {
            list: [{
                    text: 'cpu',
                    done: false
                },
                {
                    text: 'scheda madre',
                    done: false
                },
                {
                    text: 'gpu',
                    done: true
                },
                {
                    text: 'RAM',
                    done: false
                }                     
            ],
            newObj:{
                text: '',
                done: false
            },
            elemToAdd: '',
            show: false,
            error: 'Si accettano nomi di componenti con un minimo di tre lettere'
        }
    },
    methods: {
        //ctrl action of done key
        ifTrue(done){
            if (done){
                return 'text-decoration-line-through sel'
            }
        },
        //take the index and, at this splice, delete at this position 1 elem
        deleteElement(index){
            this.list.splice(index,1);
        },
        // take the input text value and place it as the value of a "newObj.text"
        addObjBot(toAdd){
            if(toAdd.length > 3){
                let cloneObj = Object.assign({}, this.newObj);
                cloneObj.text = toAdd;
                this.elemToAdd='';
                this.list.push(cloneObj);
            } else{
                this.show = true;
            }
        },
        // take the input text value and place it as the value of a "newObj.text"
        addObjTop(toAdd){
            if(toAdd.length > 3){
                let cloneObj = Object.assign({}, this.newObj);
                cloneObj.text = toAdd;
                this.elemToAdd='';
                this.list.unshift(cloneObj);
            } else{
                this.show = true;
            }
        },
        
    },
})
app.mount('#app')


