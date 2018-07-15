import Vue from 'vue'
import home from './home.vue'

document.addEventListener('DOMContentLoaded', ()=>{
    const appContainer = document.createElement('div')
    appContainer.setAttribute('id','app')
 
    document.body.appendChild(appContainer)

    const app = new Vue({
        el:"#app",
        data : {
            
        },
        components: {
            home
        },
        template: '<home />',
    })

})
