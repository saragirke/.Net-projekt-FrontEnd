<template>
    
  <h1 id="main">Valpar</h1>
  <div class="info"> 
    <p>Här listar vi aktuella valpar från senaste kullen och informerar om vilka valpar som flyttat eller inte. Håll dig updpaterad via vår nyhetssida för att få information
    om kommande kullar. <br><br>
    Intressenamälan om att tinga en valp görs via vårt formulär som du hittar <strong><a><RouterLink to="/interest">HÄR</RouterLink></a></strong></p>
  </div>
<!-- v-for loop för att hämta nyhetsinlägg -->
<Pup v-for="pup in pups" :pup="pup" :key="pup.id"/>

<br />
</template>


<script>
// Importering av komponenter
import Pup from "../components/Pup.vue";

export default {
// Reaktiv data
data() {
return {
  pups: [],
};
},

components: {
Pup,
},

methods: {
/*********************************************
* GET
*********************************************/
async getPups() {
  //Fetch till restwebbtjänst
  const resp = await fetch("http://localhost:5023/api/apipup/", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  // Data lagras
  const data = await resp.json();
  this.pups = data;
},


},
mounted() {
this.getPups();
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

.info {
border: 2px #aa7467 solid;
background-color: white;
padding:10px;
margin: 0 auto;
width: 50%;
text-align: center;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
width: 70%;
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
text-align: center;
padding: 5px;
}

.column {
width: 100%;
display: block;
margin-bottom: 20px;
padding:2px;
}

.row {
width: 80%;
}
}
</style>