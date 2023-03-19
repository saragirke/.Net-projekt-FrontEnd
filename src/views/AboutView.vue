<template>
 <title>Om oss</title> 
    <!-- Eventlyssnare @-->
    <!--c-bind för dynamiska id-->
<h1> Om Pudelklubben</h1>
    <div class="container">
  <div class="row">
    <div class="column-66">
<h2>Uppfödare sedan 2005</h2>
<p> Vi på Pudelklubben har fött upp rasen pudel sedan 2005. Vi finns i Uppsala och brinner för vår uppfödning.
  Med vår långa erfarenhet vill vi vara ett tryggt val för valpköpare och blivande hundägare. 
</p>

<h2>SKK-uppfödare</h2>
<p> Medlemmar som föder upp hundar förbinder sig inte bara till att upprätthålla god djurhållning i enlighet med svensk lagstiftning utan dessutom SKKs egna riktlinjer. Dessa riktlinjer syftar framförallt till att värna om hunden i ett bredare perspektiv, men syftar också till att värna om alla de parter som är inblandade i ett hundköp – däribland dig som hundköpare.</p>
    
<h3>Vad betyder det för valpen?</h3>
<ul>
  <li>Valpens föräldrar ska inte ha allvarliga sjukdomar eller funktionshinder.</li>
  <li>Valpens föräldrar ska ha ett gott och för rasen typiskt temperament.</li>
  <li>Valpen ska växa upp i en miljö som gynnar dess fysiska och mentala utveckling.</li>
  <li>Valpen är veterinärbesiktigad och ID-märkt.</li>
  <li>Valpen har ett registreringsbevis (stamtavla) utfärdat av SKK.</li>
  <li>Valpens föräldrar är av samma ras och registrerade i SKK eller utländsk kennelorganisation erkänd av SKK.</li>
</ul>
</div>
    <div class="column-33">
      <img src="img/aboutpic.jpg">
    </div>
  </div>
</div> 
</template>


<script>
</script>


<style scoped>

li {
  line-height: 1.5;
}

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
margin-bottom: 5%;
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
* {
   box-sizing:border-box;
 }
 

 
 h2 {
   font-size: 25px;
   text-align:left;
 }
 
 
 /****** CONTAINERS ********/ 
.container {
  padding: 64px;
  margin: auto;
  width: 80%;
  padding-top:2%;
  margin-bottom: 3%;
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
     width: 80%;
   }
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