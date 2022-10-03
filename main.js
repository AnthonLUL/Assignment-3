const app = Vue.createApp({
    data(){
        return{
            Message: '', 
            Times: null,
            result: ''
        }
    },
    methods: {
        duplicateMessage(){
            if(this.Message === '' || this.Times === null) 
            {
                alert('Fill out all the input fields before pressing the button')
            }
            else if(this.Times < 0)
            {
                alert('Must be positive number: ' + this.Times)
            }
            else
            {
                this.result = this.Message.repeat(this.Times);
            }
        }
    }

})