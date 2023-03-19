<template>
    <div class="hero-image">

<!-- Desktop navigation -->
      <div class="header">
      <RouterLink to="/"
        ><img src="img/logga.png" alt="logga med länk till startsidan" class="logo"
      /></RouterLink>

      <ul id="navlist">
<li>       <a class="skip" href="#main">
    Hoppa över meny
  </a> </li>
        <li>
          <a> <RouterLink active-class="active" to="/">HEM</RouterLink></a>
        </li>
        <li>
          <a><RouterLink to="/news">NYHETER</RouterLink></a>
        </li>
        <li>
          <a><RouterLink to="/puppies">VALPAR</RouterLink></a>
        </li>
        <li>
          <a><RouterLink to="/about">OM OSS</RouterLink></a>
        </li>
      </ul>
    </div>




<!-- Mobil navigation -->
<nav role="navigation">
  <div id="menuToggle">

    <input type="checkbox" />
    
    <span></span>
    <span></span>
    <span></span>
    
    <ul id="menu">
        <li class="deskLi">
            <a> <RouterLink to="/">START</RouterLink></a>
          </li>
          <li class="deskLi">
            <a><RouterLink to="/news">NYHETER</RouterLink></a>
          </li>          
          <li>
          <a><RouterLink to="/puppies">VALPAR</RouterLink></a>
        </li>
          <li >
            <a><RouterLink to="/about">OM OSS</RouterLink></a>
          </li>
    </ul>
  </div>
</nav>

      <div class="hero-text">
        <h1>Pudelklubben</h1>
        <RouterLink to="/"
        ><img src="img/logga.png" alt="logga med länk till startsidan" class="logo2"
      /></RouterLink>
      </div>
    </div>
  </template>
  
  <script>
  import { RouterLink } from "vue-router";
  export default {
    components: {
      RouterLink,
    },
  };
  </script>
  
  <style scoped>

h1 {
  font-family: 'Amatic SC', cursive;
  font-size:90px;
  color:black;
}
body,
html {
  margin: 0px;
  padding:0px;
  height: 100%;
}

.header {
  background: #f8ebe89c;
  height: 80px;
}
.logo {
  float: left;
  margin: 0;
  height: 100%;
}

#navlist {
  float: right;
}


li {
  display: inline;
  list-style-type: square;
  padding-right: 45px;
  font-size: 25px;
  font-weight:bolder;
  font-family: Quicksand, sans-serif;
  text-decoration: none;
}

a:link {
  line-height: 70px;
  height: 75px;
  text-decoration: none;
  color: black;
  font-weight:500;
}

li:hover {
  font-weight: bolder;
  color: #c2fbd7;
  text-decoration: underline;
}

a:visited {
  color: black;
}

a:active {
  color: #c2fbd7;
}

.logo2 {
  height: auto;
  max-width:30%;
}








  
  /* The hero image */
  .hero-image {
    background-image: linear-gradient(rgba(255, 223, 223, 0.306), rgba(255, 223, 223, 0.306)),
      url("../img/2.jpg");
      height: 50%;
  /* Position and center the image to scale nicely on all screens */
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

    padding-bottom: 40%;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
  
  .hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
  
  .pic {
    width: 65%;
    height: auto;
  }

#menuToggle {
  display:none;
}





  @media screen and (max-width: 700px) {

    h1 {
      font-size:60px;
    }
.header {
  display: none;
}


#menuToggle
{
  display: block;
  position: relative;
  top: 50px;
  left: 50px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a
{
  text-decoration: none;
  color: #232323;
  transition: color 0.3s ease;
}

#menuToggle a:hover
{
  color: #fbceb1;
  transition: 0.2s;
}







#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  
  background:  	black;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: black;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu
{
  position: absolute;
  width: 300px;
  margin: -100px 0 0 -50px;
  padding: 50px;padding: 50px;
  padding-top: 125px;
  
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li
{
  padding: 2px 0;
  font-size: 22px;
  display:block;
}

/*
 * And let's slide it in from the left
 */
#menuToggle input:checked ~ ul
{
  transform: none;
}


}
  </style>
  