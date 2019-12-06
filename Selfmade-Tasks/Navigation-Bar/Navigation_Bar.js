new Vue ({
    el: '#Menu',

    data: {
        active: 'Home'
    },

    methods: {
        makeActive(item) {
            this.active = item;
        }
    }
})