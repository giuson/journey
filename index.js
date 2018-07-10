//INTRO
new Vue({
    el: '#intro',
    data: {
        title: 'About'
    }
});

//FIRST SECTION
new Vue({
    el: '#first',
    data: {
        title: 'Project 1: HTML 5 Portfolio'
    }
});

//THANKS SECTION
new Vue({
    el: '#thanks',
    data() {
        return {
            title: 'Thank you!',
            thanks: 'Thanks for checking out my website--I hope you enjoyed it :) And if you did, please give me a clap!',
            counter: 0,    
        }
    },
    methods: { 
        increment: function () { 
          this.counter = this.counter + 1;
        },
    }
});

//CONTACT SECTION
new Vue({
    el: '#me',
    data: {
        title: 'Contact',
        myemail: 'giannauson@gmail.com'
    }
});

