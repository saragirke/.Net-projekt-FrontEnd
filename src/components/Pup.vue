<template>
    <!-- Eventlyssnare @-->
    <!--c-bind för dynamiska id-->

    <div class="container">
  <div class="row">
    <div class="column-66">
      
      <h2 v-bind:id="pup.id">{{ pup.title }}</h2>
      <dt v-bind:id="pup.id">- {{ pup.gender }}</dt>
              
        <!-- Kontrollera om booked = true i databasen-->
        <dt class="booked" v-if="pup.booked">- Tingad / Flyttat</dt>
        <!-- Kontrollera om booked = false i databasen-->
        <dt class="available" v-if="!pup.booked">- Vill flytta hemifrån!</dt>
        <br>
    </div>
    <div class="column-33">
      <img class="responsive" :src="('http://localhost:5023/imageupload/'+ pup.imageName)" :alt="(pup.altText)" />
    </div>

  </div>
</div> 
  </template>
  
  <script>
  export default {

    props: {
      pup: Object,
    },
    emits: [],
  };
  </script>
 <style scoped>
 * {
  box-sizing:border-box;
}


/* CSS */
.booked {
   color: rgb(206, 40, 40);
    font-weight: bolder;
}

.available {
  color: rgb(11, 128, 11);
  font-weight: bolder;
}
.button-33 {
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-33:hover {
  box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}


/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color:#aa7467;;
  border-radius: 15px;
  margin-bottom: 10%;
  color:white;
}

.column {
  float: left;
  width: 33%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding */
.row {
  margin: auto;
  width: 80%;

}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}



/* RUBRIKER */
h1 {
  text-align:center;
}

h2 {
  font-size: 25px;
}


/****** CONTAINERS ********/ 
.container {
  padding: 64px;
  margin: auto;
  width: 100%;
  padding-top:2%;
  background-color: white;
}

.row:after {
  content: "";
  display: table;
  clear: both
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
  max-width: 100%;
}

dt {
  font-size: 17px;
  line-height: 1.5;
}

@media screen and (max-width: 1000px) {
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
    width: 100%;
  }
}
  </style>
  