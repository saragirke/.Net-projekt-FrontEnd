<template>
     <h1 id="main">Nyheter</h1>
      <!-- v-for loop för att hämta nyhetsinlägg -->
      <News @showComment="showComment()"  v-for="news in sortedNews" :news="news" :key="news.id"/>
      <br />
  </template>
  

  <script>
  // Importering av komponenter
  import News from "../components/News.vue";
  
  export default {
    // Reaktiv data
    data() {
      return {
        news: [],
      };
    },
    
    computed: {
      //Sorterar senaste nyheten längst upp på sidan
      sortedNews: function() {
                    return this.news.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))
                }
      },
  
    components: {
      News,
    },
  
    methods: {
  /*********************************************
   * GET - Hämta nyheter
   *********************************************/
      async getNews() {
        //Fetch till restwebbtjänst
        const resp = await fetch("http://localhost:5023/api/apinews/", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });
  
        // Data lagras
        const data = await resp.json();
        this.news = data;
      },

    },
    mounted() {
      this.getNews();

    },
  };


</script>


<style scoped>

h2 {
font-family: Quicksand, sans-serif;
text-align: center;
}

/****** CONTAINERS ********/ 
.container {
padding: 10px;
margin: auto;
width: 70%;
margin-top:2%;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.row:after {
content: "";
display: table;
clear: both;
}

.row {
margin: 0 auto;
}

.column-66 {
float: left;
width: 50%;
padding: 20px;
}

.column-33 {
float: left;
width: 40%;
padding: 20px;
}

img {
height: auto;
max-width: 50%;
}

@media screen and (max-width: 1000px) {
  .container {
padding: 10px;
margin: auto;
width: 95%;
margin-top:2%;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.column-66,
.column-33 {
width: 100%;
text-align: left;
padding: 5px;
}

.column {
width: 100%;
display: block;
margin-bottom: 20px;
padding:2px;
}

.row {
width: 100%;
}
}
</style>