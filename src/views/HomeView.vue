<template>
  <br>
  <div class="main">
<div class="row">
  <div class="column">
     <div class="card">
      <h2 id="main">Uppfödare sedan 2005</h2>
      <RouterLink to="/about"><img src="img/4.jpg" width="640" height="426"></RouterLink>
      <p class="cardp"><a class="cardA"><RouterLink to="/about">Läs mer om oss </RouterLink></a> </p>

    </div>
  </div>

  <div class="column">
    <div class="card">
      <h2>SKK-registrerade</h2>
      <img src="img/5.jpg" width="640" height="426">
      <p class="cardp">Alla valpar registreras hos SKK.</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
     <h2>Nyheter</h2>
     <RouterLink to="/news"><img src="img/ty.jpg" width="640" height="426"></RouterLink>
      <p class="cardp"><a class="cardA"><RouterLink to="/news">Läs nyheter</RouterLink></a> </p>
    </div>
  </div>
  <br> <br>
</div>


<div class="container" style="background-color:#f8ebe8">
  <div class="row">
    <div class="column-66">
     <h2>Pudlar</h2>
     <p>Rasen är i första hand en glad och sportig familjehund. En pudel trivs med familjelivet och vill hänga med överallt samt vara där det händer saker. Man har alltid roligt med sin pudel. Det är en lekfull ras som uppskattar variation av aktiviteter; där både knopp och kropp får sitt. Även om rasen inte kräver hård motion regelbundet, trivs den allra bäst av att dagligen få röra på sig och att aktiveras mentalt.</p>
    </div>
    <div class="column-33">
      <img src="img/ee.jpg">
    </div>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="column-33">
      <img src="img/7.jpg">
    </div>
    <div class="column-66">
      <h2>Kräver pälsvård</h2>
      <p>Rasen fäller inte och pälsen växer oavbrutet under hela livet vilket betyder att du behöver klippa den med jämna mellanrum. Att äga en pudel innebär pälsvård, oavsett om man vill ha sin pudel kortklippt eller i päls. Kan man inte göra pälsvården själv behöver man lämna in sin hund till en hundfrisör med jämna mellanrum (ca 4-5 ggr per år om du vill ha en kortklippt hund, vill du ha rakad nos och rakade tassar som är karaktäristiskt för pudeln behöver det göras med ca 3-4 v mellanrum). Utställningsfrisyrerna kräver desto mer.</p>
    </div>
  </div>
</div> 

<div class="container" style="background-color:#f8ebe8">
  <div class="row">
    <div class="column-66">
     <h2>Att skaffa valp</h2>
   <p>  Att skaffa sig en hund är ett stort beslut som kommer att påverka dig under lång tid framöver. 
     Att vara en bra hundägare tar tid och kostar pengar, men du får så otroligt mycket tillbaka!<br><br>
     Den kanske viktigaste förutsättningen för att ha hund är att du har tid för hunden. Valpar behöver massor med uppmärksamhet första tiden, dygnet runt faktiskt. Hundar är flockdjur och bör inte lämnas ensamma mer än 4-5 timmar per dag. Valpar ska inte vara ensamma alls förrän de är trygga i hemmet.
      Den tid du lägger på valpens uppfostran är det som avgör hur hundägandet blir i framtiden.</p>
    <br>
    <br>
     <button class="button-33" role="button"><RouterLink to="/interest">Gör en intresseanmälan</RouterLink></button>
    </div>
    <div class="column-33">
      <img src="img/9.jpg">
    </div>

  </div>
</div>
</div>




   
  </template>
  
  <style scoped>
 * {
  box-sizing:border-box;
}

.interest {
  color:black;
  font-weight: bold;
  font-size: 17px;
}

.cardp {
  font-weight: bold;
  color:white;
  font-size:22px;
}

a{  font-weight: bold;
  color:white;
  font-size:22px;
}


/* CSS */
.button-33 {
  background-color: #248447;
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
  margin-bottom:15%;
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
  font-size: 16px;
  background-color:#aa7467;;
  border-radius: 15px;
  margin-bottom: 10%;
  color:white;
}

.column {
  float: left;
  width: 33%;
  padding: 0 10px;
  font-size: 16px;
}

/* Remove extra left and right margins, due to padding */
.row {
  margin: auto;
  width: 80%;
  font-size: 16px;

}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/****** CONTAINERS ********/ s
.container {
  padding: 64px;
  margin: auto;
  width: 100%;
  padding-top:2%;
  text-align: left;
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
  text-align: left;
}

.column-33 {
  float: left;
  width: 40%;
  padding: 20px;
  text-align: left;
}

img {
  height: auto;
  max-width: 100%;
}

@media screen and (max-width: 1000px) {
  .column-66,
  .column-33 {
    width: 100%;
    text-align: left;
    padding: 5px;
  }

  .column {
    width: 100%;
    display: block;
    text-align:left;
    margin-bottom: 20px;
    padding:2px;
  }

  .row {
    width: 80%;
  }
}
  </style>
  