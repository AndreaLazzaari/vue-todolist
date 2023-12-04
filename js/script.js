
const { createApp } = Vue

createApp({
    data() {
    return {
        nuovaCarta: '',
        listaCarte : [
            {
                text : 'BirthingPod',
                done : true
            },

            {
                text : 'Mox Opal',
                done : true
            },

            {
                text : 'Grief',
                done : false
            },

            {
                text : 'Splinter Twin',
                done : true
            },

            {
                text : 'Fury',
                done : false
            },

            {
                text : 'Preordain',
                done : false
            },

            {
                text : 'Yawgmoth, Thran Physician',
                done : false
            },

            {
                text : 'Oko, Thief of Crowns',
                done : true
            },

            {
                text : 'Uro, Titan of Nature Wrath',
                done : true
            },

            {
                text : 'Urza, Lord High Artificer',
                done : false
            },
        ]
    }
    }, 
    methods: {
      aggiungiCarta() {
        let carta = {
            text: this.nuovaCarta,
            done: false
        }
        
        this.listaCarte.push(carta);
        
        // this.nuovaCarta = carta

      },
      rimuoviEl(index) {
        this.listaCarte.splice(index, 1)
      }
    }
}).mount('#app')
