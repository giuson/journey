//CONTACT SECTION
var vueForm = new Vue({
    el: '#contactme',
    data: {
        name: '',
        email: '',
        message: ''
    },
    methods: { 
        processForm: function () { 
          console.log({name: this.name, email: this.email, message: this.message});
          alert('Processing');
        },
    }
});