const app = Vue.createApp({
    data() {
       return {
          title: "Test",
          age:0,
          display:true,
          x:0,
          y:0,
          books: [
            {title:"witcher"},
            {title:"exodus"}
          ],
       };
    },
    methods:{
      sayHi(hi){
         this.age = 2;
         this.display = !this.display
      },
      handleEvent(event){
         console.log(event)
      },
      handleLeave(){
         console.log("mouseLeave")
      },
      handleDoubleClick(){
         console.log("doubleClick")
      },
      mousemove(e){
         this.x = e.clientX;
         this.y = e.clientY
      }
    }
 });
 
 app.mount("#app");
 