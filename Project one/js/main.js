new Vue({
    el:'#app',
    data:{
        state: true,
        inputName: '',
        names:[],
        showError: false,
        result:null
    },
    methods: {

        //add names to the list
        addNameToList(){
            if(this.validate(this.inputName)){
                this.names.push(this.inputName)
                this.inputName = ''
                this.showError = false //clear an error from before
            }else{
                this.showError = true
            }
        },

        removeItem(index){
            this.names.splice(index,1)

        },

        //validate the input
        validate(value){
            // if there is a word
            if(value !== ''){
                return true
            }else{
                return false
            }
        },

        // show results
        showResults(){
            this.state = false

            let rand = this.names[Math.floor(Math.random() * this.names.length)]

            this.result = rand
        },

        //reset
        resetApp(){
            this.state = true
            this.inputName = ''
            this.names = []
            this.result = null
        }
    },
})