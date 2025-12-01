function calcul() {
    var farine = document.getElementById("input_farine").value;
    var h2o = document.getElementById("input_h2o").value;
    var levure = document.getElementById("input_levure").value;
    var sel = document.getElementById("input_sel").value;
    var huile = document.getElementById("input_huile").value;

    document.getElementById("result_farine").value = farine;
    document.getElementById("result_h2o").value = farine * h2o / 100;
    document.getElementById("result_levure").value = farine * levure / 100;
    document.getElementById("result_sel").value = farine * sel / 100;

    if (huile > 0) {
        document.getElementById("result_huile").value = farine * huile / 100;
    } else {
        document.getElementById("result_huile").value = 0
    }
}

function calcul_biga() {
    var farine = document.getElementById("input_farine").value;
    var h2o = document.getElementById("input_h2o").value;
    var levure = document.getElementById("input_levure").value;
    var sel = document.getElementById("input_sel").value;
    var huile = document.getElementById("input_huile").value;
    var biga = document.getElementById("input_biga").value;
    var h2o_j1 = document.getElementById("input_biga_h2o").value;
    
    var farine_j1 = farine * biga / 100;
    document.getElementById("result_farine_biga_j1").value = farine_j1;
    document.getElementById("result_farine_biga_j2").value = farine - farine_j1;
    var h2o_j1 = farine_j1 * h2o_j1 / 100;
    document.getElementById("result_h2o_biga_j1").value = h2o_j1;
    document.getElementById("result_h2o_biga_j2").value = farine * h2o / 100 - h2o_j1;
    document.getElementById("result_levure_biga_j1").value = farine * levure / 100;
    document.getElementById("result_sel_biga_j2").value = farine * sel / 100;

    if (huile > 0) {
        document.getElementById("result_huile_biga_j2").value = farine * huile / 100;
    } else {
        document.getElementById("result_huile_biga_j2").value = 0
    }
}

function calcul_poolish() {
    var farine = document.getElementById("input_farine").value;
    var h2o = document.getElementById("input_h2o").value;
    var levure = document.getElementById("input_levure").value;
    var sel = document.getElementById("input_sel").value;
    var huile = document.getElementById("input_huile").value;
    var poolish = document.getElementById("input_poolish").value;

    var farine_j1 = farine * poolish / 100;
    document.getElementById("result_farine_poolish_j1").value = farine_j1;
    document.getElementById("result_farine_poolish_j2").value = farine - farine_j1;

    document.getElementById("result_h2o_poolish_j1").value = farine_j1;
    document.getElementById("result_h2o_poolish_j2").value = farine * h2o / 100 - farine_j1;

    document.getElementById("result_levure_poolish_j1").value = farine * levure / 100;

    document.getElementById("result_sel_poolish_j2").value = farine * sel / 100;
    if (huile > 0) {
        document.getElementById("result_huile_poolish_j2").value = farine * huile / 100;
    } else {
        document.getElementById("result_huile_poolish_j2").value = 0
    }
}

function calcul_patons() {
    var nb = document.getElementById("input_nb_patons").value;
    var poids = document.getElementById("input_poids_patons").value;
    var h2o = document.getElementById("input_h2o_patons").value;
    var result = Math.round((nb * poids) / (1 + h2o / 100));

    document.getElementById("result_patons").innerHTML = `Pour ${nb} patons de ${poids}g à ${h2o}% d'hydratation, il faudra <strong>${result}g</strong> de farine.`;
    document.getElementById("explications_patons").innerHTML = `Explications : Nb patons (${nb}) x poids du paton (${poids}) / 1,% h2o (1,${h2o}) = poids farine.`;
}

function calcul_temperature_eau() {
    var temp_amb = document.getElementById("input_temp_amb").value;
    var temp_farine = document.getElementById("input_temp_farine").value;
    var temp_machine = document.getElementById("input_temp_machine").value;
    var result = Math.round(72 - temp_amb - temp_farine - temp_machine);

    document.getElementById("result_eau").innerHTML = `L'eau à utiliser devrait être à <strong>${result}°</strong>.`;
    document.getElementById("explications_eau").innerHTML = `Explications : T° cible (24°) x 3 - T° ambiante - T° farine - T° friction = Température à utiliser`;
}

function openTab(evt, name, type) {
    // Declare all variables
    var i, tabcontent, tablinks, tabcontentname, tablinksname;
    if (type == "top") {
        tabcontentname = "tabcontent_top";
        tablinksname = "tablinks_top";
    } else if (type == "petrissage") {
        tabcontentname = "tabcontent_petrissage";
        tablinksname = "tablinks_petrissage";
    } else if (type == "biga") {
        tabcontentname = "tabcontent_biga";
        tablinksname = "tablinks_biga";
    } else if (type == "poolish") {
        tabcontentname = "tabcontent_poolish";
        tablinksname = "tablinks_poolish";
    }

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName(tabcontentname);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName(tablinksname);
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
} 
