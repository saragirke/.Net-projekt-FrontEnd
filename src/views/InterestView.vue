<template> 
  <div class="formDiv">
    <form @submit.prevent="sendInterest()">
        <h2 id="main">Intresseanmälan om att bli valpägare</h2>
        <div class="info">
      
      <p>Vi brinner för vår uppfödning och är väldigt noga med var våra valpar flyttar. 
        Därför har vi inget kösystem och vi förbehåller oss rätten att välja valpköpare.<br>
        Därmed kan vi också säga nej till någon som önskar köpa valp från oss.
      </p>
      <p>Var gärna noga med din intresseanmälan och lägg ner tid på den. Vi får in många intresseanmälningar
        och det är denna som är vårt första intryck av dig. Vi villa gärna få veta lite om dina familjeförhållanden,
        tidigare erfarenehter av hund, och hur du tänker kring ett liv med hund.
      </p>
      <p> Om vi tror du passar som valpköpare kommer vi ta kontakt via email för att boka in ett möte.
        Vi träffas gärna men telefonmöte går också bra!
      </p>
    </div>
    <br>
      <label for="FirstName">Förnamn:</label><br>
      <input v-model="FirstName" type="text" id="FirstName" name="FirstName" /><br>

      <label for="LastName">Efternamn:</label><br>
      <input v-model="LastName" type="text" id="LastName" name="LastName" /><br>

      <label for="Age">Ålder:</label><br>
      <input
        v-model="Age" type="number" min="0" id="Age" name="Age"/><br />

      <label for="About">Berätta om dig:</label><br />
      <textarea
        v-model="About"  rows="8" cols="50" id="About" name="About" /><br /><br />

      <label for="Email">E-mail:</label><br />
      <input
        v-model="Email" type="text" id="Email" name="Email" /><br /><br />

      <input type="submit" class="button-33" value="Skicka" />

      <div id="error"></div>


    </form>
    <br /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
       FirstName: "",
       LastName: "",
       Age: "",
       About: "",
      Email: ""
    }
  },

  emits: [],

  methods: {
    async sendInterest() {
      //Kontrollerar att fälten är ifyllda
      if (
        (this.FirstName != 0) &
        (this.LastName != 0) &
        (this.Age != 0) &
        (this.About != 0) &
        (this.Email != 0) 
      ) {
        //Javascript objekt
        let InterestObj = {
            FirstName: this.FirstName,
            LastName: this.LastName,
            Age: this.Age,
            About: this.About,
            Email: this.Email,
        };

        //FETCH
        const resp = await fetch("http://localhost:5023/api/apiInterest/", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify(InterestObj),
        });

        const data = await resp.json();

        /*Töm fälten efter lagring*/
        this.FirstName = "";
        this.LastName = "";
        this.Age = "";
        this.About = "";
        this.Email = "";

        this.$router.go()
        alert("Vi har nu tagit emot din intresseanmälan. Vid intresse tar vi kontakt via e-mail." );

      } 
      else {
       document.getElementById("error").innerHTML ="<p>" +"Alla fält behöver fyllas i!" + "</p>";
      }
    },
  },
};
</script>

<style scoped>

.formDiv {
    margin-top: 3%;
   
}

.info {
    border-color: #aa7467;
    border-style: dotted;
    padding:10px;
}

textarea {
    font-family: "Quicksand", sans-serif;
    font-size:16px;
}
form {
    font-family: "Quicksand", sans-serif;
  font-size: 16px;
  min-height: 380px;
background: white;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 30px;
  margin-top: 15%;
  margin-left: 5%;
  margin-right: 5%;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  width: 50%;
  font-weight: bolder;
  border-radius:10px;
}

input[type="text"] {
  width: 50%;
  padding: 10px 20px;
  margin: 6px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type="number"],
select {
  width: 50%;
  padding: 10px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;

  box-sizing: border-box;
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


@media screen and (max-width: 1000px) {
form {
  width:88%;
  margin-left: 2%;
  margin-right: 2%;
}
}
</style>