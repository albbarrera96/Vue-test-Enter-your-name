new Vue ({
    el:'#vue-app',
    data: {
        age: '24',
        name: 'Alberto',
        x:0,
        y:0,
    },

  methods: {
    logName:function() {
      console.log("You've entered your name")
    },
    logAge:function() {
      console.log("You've entered your age")

    },
      updateName:function(){
            return this.name
      },
  }
});
