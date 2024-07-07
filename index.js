const app = Vue.createApp({
    data() {
       return {
          title: "Test",
          age:0,
          display:true,
          x:0,
          y:0,
          books: [
            "book1","book2"
          ],
          authors: [
            {name:"King",bool:true},
            {name:"Lord",bool:false}
          ],
          url: "https://www.google.co.uk",
          
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
      },
      toggleBool(author){
         author.bool = !author.bool
      },

    },
    computed:{
      isFavFilter(){

         return this.authors.filter((author)=> author.bool)
      }
    }
 });
 
 app.mount("#app");
 