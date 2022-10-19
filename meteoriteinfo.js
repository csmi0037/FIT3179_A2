let stony = document.getElementById("stony")
let stonyiron = document.getElementById("stonyiron")
let iron = document.getElementById("iron")
let infodiv = document.getElementById("info")
function Stony(){
    stony.style.background = "#4eb1e8"
    stonyiron.style.background = "#5A5A5A"
    iron.style.background = "#5A5A5A"
    let display = `<div style="padding:5%;"><img src="images/chondrule.jpg" width="100%" height="100%"><p class="infotext">Spherical chondrules in a meteorite</p></div>`
    display += `<b class="infoheading">Chondrite vs Anchondrite:</b>`
    display += `<p class="infotext">While these are both sub-types of stony meteorites, the main difference is the inclusion on chondrules as pictured above.<br><br>Chondrites include chondrules, which are tiny spherical silicate inclusions whereas achondrites do not. </p>`
    display += `<button id="chondrite" onclick="chondrite()" class="buttonselect2">Chondrite</button>`
    display += `<button id="achondrite" onclick="achondrite()" class="buttonselect2">Achondrite</button>`
    display += `<div id="info2"><br>`
    display += `<b class="infoheading" style="padding-left: 60px;">Select a meteorite sub-type</b></div>`
    infodiv.innerHTML = display
}

function StonyIron(){
    stony.style.background = "#5A5A5A"
    stonyiron.style.background = "#4eb1e8"
    iron.style.background = "#5A5A5A"
    let display = `<div style="padding:5%;"><img src="images/Esquel.jpg" width="100%" height="100%"><p class="infotext">A slice of Esqual pallasite</p></div>`
    display += `<b class="infoheading">Pallasites:</b>`
    display += `<p class="infotext">Usually comprised of olivine crystals in an iron-nickel matrix, allowing beautiful slices to be carved from these as seen above.</p>`
    display += `<b class="infoheading">Mesosiderite:</b>`
    display += `<p class="infotext"> These consist of about equal parts of metallic nickel-iron and silicate.<br><br> In 1995, 3 large pieces totalling 128.8kg of mesosiderite landed in China. </p>`
    infodiv.innerHTML = display
}

function Iron(){
    stony.style.background = "#5A5A5A"
    stonyiron.style.background = "#5A5A5A"
    iron.style.background = "#4eb1e8"
    let display = `<div style="padding:5%;"><img src="images/TamentitMeteorite.png" width="100%" height="100%"><p class="infotext">500kg Tamentit Iron Meteorite</p></div>`
    display += `<b class="infoheading">Magmatic Iron:</b>`
    display += `<p class="infotext">Mostly comprised of solid nickel-iron metal and categorised by their magnetic nauture. <br><br>These are usually the biggest meteorites due to the strength of the metal causing them not to break up while travelling through our atmosphere.</p>`
    display += `<b class="infoheading">Non-magmatic or Primative Iron:</b>`
    display += `<p class="infotext">These iron meteorites are similair to their magnetic brothers, however due to the inclusion of silicate, they aren't magnetic.</p>`
    infodiv.innerHTML = display
}

function chondrite(){
    let display = `<div style="padding:5%;"><img src="images/StonyMeteorite.jpg" width="100%" height="100%"><b class="infoheading">Chondrites:</b></div>`
    display += `<b class="infoheading">Carbonaceous Chondrite:</b>`
    display += `<p class="infotext">These are categorised by their high proportion of carbon in the form of graphite or carbonates. <br><br>The high carbon prescence is due to a lack of exposure to high temperatures resulting in a hardly chaning from thermal processes.</p>`
    display += `<b class="infoheading">Ordinary Chondrite:</b>`
    display += `<p class="infotext">The most common type of metorite, comprising of over 85% of all recorded landings. <br><br>While indicating that these are from the most common asteroid, it is instead thought that the type of asteroids these meteorites originate from are much more suited at sending fragments to reach the surface of earth.</p>`
    display += `<b class="infoheading">Enstatite Chondrite:</b>`
    display += `<p class="infotext">A rare type of Chondrite which is rich in the mineral enstatite</p>`
    infodiv.innerHTML = display
}

function achondrite(){
    let display = `<div style="padding:5%;"><img src="images/achondrite4.png" width="100%" height="100%"><b class="infoheading">Achondrites:</b></div>`
    display += `<b class="infoheading">Asteroidal Achondrite:</b>`
    display += `<p class="infotext">These meteorites are classifyied by originating from an asteroid but contain a different mineral and chemical composition due to melting or crystalisation processes.<br><br> Just like all achondrites, these meteorites do not contain chondrules and instead are representative of basalt or plutonic earth rocks. </p>`
    display += `<b class="infoheading">Lunar:</b>`
    display += `<p class="infotext">Originating from the moon, these are the rarest type having only 5 recorded landings</p>`
    display += `<b class="infoheading">Martian:</b>`
    display += `<p class="infotext">Formed on Mars, these rocks are ejected due to impact events on the surface of Mars</p>`
    infodiv.innerHTML = display
}



/*
        <b class="infoheading">Ordinary Chondrite:</b>
        <p>text</p>
        <b style="padding-left: 20px; color: white;font-size: larger;">Magmatic Iron:</b>
        <p class="infotext">text</p>
        <b style="padding-left: 20px; color: white;font-size: larger;">Non-magmatic or Primative Iron:</b>
        <p style="padding-left: 30px; padding-right: 30px; color: white;">text</p>
        <b style="padding-left: 20px; color: white;font-size: larger;">Asteroidal Achondrites:</b>
        <p style="padding-left: 30px; padding-right: 30px; color: white;">text</p>
        <b style="padding-left: 20px; color: white;font-size: larger;">Carbonaceous Chondrite:</b>
        <p style="padding-left: 30px; padding-right: 30px; color: white;">text</p>
        <b style="padding-left: 20px; color: white;font-size: larger;">Mesosiderite:</b>
        <p style="padding-left: 30px; padding-right: 30px; color: white;">text</p>
        <b style="padding-left: 20px; color: white;font-size: larger;">Enstatite Chondrite:</b>
        <p style="padding-left: 30px; padding-right: 30px; color: white;">A rare type of Chondrite which is rich in the mineral enstatite</p>
        <b style="padding-left: 20px; color: white;font-size: larger;">Martian:</b>
        <p style="padding-left: 30px; padding-right: 30px; color: white;">Formed on Mars, these rocks are ejected due to impact events on the surface of Mars </p>
        <b style="padding-left: 20px; color: white; font-size: larger;">Lunar:</b>
        <p style="padding-left: 30px; padding-right: 30px; color: white;">Originating from the moon, these are the rarest type having only 5 recorded landings</p>
        */