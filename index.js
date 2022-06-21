url_pib = ['http://ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/en/sdg_08_10?na_item=B1GQ&precision=1&geo=AT&geo=BE&geo=BG&geo=CY&geo=CZ&geo=DE&geo=DK&geo=EE&geo=EL&geo=ES&geo=FI&geo=FR&geo=HR&geo=HU&geo=IE&geo=IT&geo=LT&geo=LU&geo=LV&geo=MT&geo=NL&geo=PL&geo=PT&geo=RO&geo=SE&geo=SI&geo=SK&unit=CLV10_EUR_HAB&time=2006&time=2007&time=2008&time=2009&time=2010&time=2011&time=2012&time=2013&time=2014&time=2015&time=2016&time=2017&time=2018&time=2019&time=2020']
let lista_valori_pib = []
let lista_tari = []
let lista_ani = []
let string_pib = []
let string_tari = []
let string_ani = []
function getPibData(url) {
    return fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            string_pib = data.value
            lista_valori_pib = Object.values(string_pib)

            string_tari = data.dimension.geo.category.label
            lista_tari = Object.values(string_tari)

            string_ani = data.dimension.time.category.label
            lista_ani = Object.values(string_ani)

            return Promise.resolve(lista_valori_pib, lista_tari, lista_ani, string_pib, string_tari, string_ani)
        })
}

url_populatie = ['http://ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/en/demo_pjan?precision=1&sex=T&geo=AT&geo=BE&geo=BG&geo=CY&geo=CZ&geo=DE&geo=DK&geo=EE&geo=EL&geo=ES&geo=FI&geo=FR&geo=HR&geo=HU&geo=IE&geo=IT&geo=LT&geo=LU&geo=LV&geo=MT&geo=NL&geo=PL&geo=PT&geo=RO&geo=SE&geo=SI&geo=SK&time=2006&time=2007&time=2008&time=2009&time=2010&time=2011&time=2012&time=2013&time=2014&time=2015&time=2016&time=2017&time=2018&time=2019&time=2020&age=TOTAL']
let lista_valori_populatie = []
let string_populatie = []
function getPopulatieData(url) {
    return fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            string_populatie = data.value
            lista_valori_populatie = Object.values(string_populatie)

            return Promise.resolve(lista_valori_populatie, string_populatie)
        })
}

url_speranta_viata = ['http://ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/en/demo_mlexpec?precision=1&sex=T&geo=AT&geo=BE&geo=BG&geo=CY&geo=CZ&geo=DE&geo=DK&geo=EE&geo=EL&geo=ES&geo=FI&geo=FR&geo=HR&geo=HU&geo=IE&geo=IT&geo=LT&geo=LU&geo=LV&geo=MT&geo=NL&geo=PL&geo=PT&geo=RO&geo=SE&geo=SI&geo=SK&time=2006&time=2007&time=2008&time=2009&time=2010&time=2011&time=2012&time=2013&time=2014&time=2015&time=2016&time=2017&time=2018&time=2019&time=2020&age=Y1']
let lista_valori_speranta_viata = []
let string_speranta_viata = []
function getSperantaViataUrl(url) {
    return fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            string_speranta_viata = data.value
            lista_valori_speranta_viata = Object.values(string_speranta_viata)

            lista_valori_speranta_viata.splice(14, 0, -1)
            lista_valori_speranta_viata.splice(29, 0, -1)
            lista_valori_speranta_viata.splice(44, 0, -1)
            lista_valori_speranta_viata.splice(59, 0, -1)
            lista_valori_speranta_viata.splice(74, 0, -1)
            lista_valori_speranta_viata.splice(89, 0, -1)
            lista_valori_speranta_viata.splice(104, 0, -1)
            lista_valori_speranta_viata.splice(119, 0, -1)
            lista_valori_speranta_viata.splice(134, 0, -1)
            lista_valori_speranta_viata.splice(149, 0, -1)
            lista_valori_speranta_viata.splice(164, 0, -1)
            lista_valori_speranta_viata.splice(179, 0, -1)
            lista_valori_speranta_viata.splice(194, 0, -1)
            lista_valori_speranta_viata.splice(209, 0, -1)
            lista_valori_speranta_viata.splice(224, 0, -1)
            lista_valori_speranta_viata.splice(239, 0, -1)
            lista_valori_speranta_viata.splice(254, 0, -1)
            lista_valori_speranta_viata.splice(269, 0, -1)
            lista_valori_speranta_viata.splice(284, 0, -1)
            lista_valori_speranta_viata.splice(299, 0, -1)
            lista_valori_speranta_viata.splice(314, 0, -1)
            lista_valori_speranta_viata.splice(329, 0, -1)
            lista_valori_speranta_viata.splice(344, 0, -1)
            lista_valori_speranta_viata.splice(359, 0, -1)
            lista_valori_speranta_viata.splice(374, 0, -1)
            lista_valori_speranta_viata.splice(389, 0, -1)
            lista_valori_speranta_viata.splice(404, 0, -1)

            return Promise.resolve(lista_valori_speranta_viata)
        })
}

Promise.all(
    url_pib.map(getPibData)
).then((data) => {
    Promise.all(url_populatie.map(getPopulatieData)
    ).then((data2) => {
        Promise.all(url_speranta_viata.map(getSperantaViataUrl)
        ).then((data3) => {
            console.log(lista_valori_pib.length)
            console.log(lista_tari.length)
            console.log(lista_ani.length)
            console.log(lista_valori_populatie.length)
            console.log(lista_valori_speranta_viata.length)

            let lista_total = []

            let index_valori = 0

            for (let i = 0; i < 27; i++) {
                for (let j = 0; j < 15; j++) {
                    let tara = { "tara": lista_tari[i], "an": lista_ani[j], "indicator1": "PIB", "valoare1": lista_valori_pib[index_valori], "indicator2": "POP", "valoare2": lista_valori_populatie[index_valori], "indicator3": "SV", "valoare3": lista_valori_speranta_viata[index_valori] }
                    lista_total.push(tara)
                    index_valori++;
                }
            }

            let lista_total_json = []
            lista_total_json = JSON.stringify(lista_total)
            console.log(lista_total_json)

            function desenHistograma(lista) {
                let html = ''
                var x = 20
                for (let i = 0; i < lista.length; i++) {
                    html += '<rect x="' + x + '" y="' + (260 - lista[i]) + '" width="20" height="' + lista[i] + '" />'
                    x += 30
                }
                document.getElementById('svg').innerHTML = html
            }

            lista_histograma = []

            let an2006 = document.getElementById("an2006")
            let an2007 = document.getElementById("an2007")
            let an2008 = document.getElementById("an2008")
            let an2009 = document.getElementById("an2009")
            let an2010 = document.getElementById("an2010")
            let an2011 = document.getElementById("an2011")
            let an2012 = document.getElementById("an2012")
            let an2013 = document.getElementById("an2013")
            let an2014 = document.getElementById("an2014")
            let an2015 = document.getElementById("an2015")
            let an2016 = document.getElementById("an2016")
            let an2017 = document.getElementById("an2017")
            let an2018 = document.getElementById("an2018")
            let an2019 = document.getElementById("an2019")
            let an2020 = document.getElementById("an2020")

            let austria = document.getElementById("Austria");
            austria.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Austria") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let belgia = document.getElementById("Belgia");
            belgia.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Belgium") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let bulgaria = document.getElementById("Bulgaria");
            bulgaria.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Bulgaria") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let cipru = document.getElementById("Cipru");
            cipru.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Cyprus") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let cehia = document.getElementById("Cehia");
            cehia.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Czechia") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let germania = document.getElementById("Germania");
            germania.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Germany (until 1990 former territory of the FRG)") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let danemarca = document.getElementById("Danemarca");
            danemarca.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Denmark") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let estonia = document.getElementById("Estonia");
            estonia.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Estonia") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let grecia = document.getElementById("Grecia");
            grecia.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Greece") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let spania = document.getElementById("Spania");
            spania.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Spain") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let finlanda = document.getElementById("Finlanda");
            finlanda.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Finland") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let franta = document.getElementById("Franta");
            franta.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "France") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let croatia = document.getElementById("Croatia");
            croatia.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Croatia") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let ungaria = document.getElementById("Ungaria");
            ungaria.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Hungary") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let irlanda = document.getElementById("Irlanda");
            irlanda.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Ireland") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let italia = document.getElementById("Italia");
            italia.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Italy") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let lituania = document.getElementById("Lituania");
            lituania.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Lithuania") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let luxemburg = document.getElementById("Luxemburg");
            luxemburg.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Luxembourg") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let letonia = document.getElementById("Letonia");
            letonia.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Latvia") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let malta = document.getElementById("Malta");
            malta.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Malta") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let olanda = document.getElementById("Olanda");
            olanda.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Netherlands") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let polonia = document.getElementById("Polonia");
            polonia.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Poland") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let portugalia = document.getElementById("Portugalia");
            portugalia.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Portugal") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let romania = document.getElementById("Romania");
            romania.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Romania") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let suedia = document.getElementById("Suedia");
            suedia.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Sweden") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let slovenia = document.getElementById("Slovenia");
            slovenia.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Slovenia") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }

            let slovacia = document.getElementById("Slovacia");
            slovacia.onclick = function () {
                lista_histograma = []
                for (let obj of lista_total) {
                    if (obj.tara === "Slovakia") {
                        lista_histograma.push(obj.valoare3)
                    }
                }
                lista_secundara = []
                for (let i = 0; i < lista_histograma.length; i++) {
                    if (lista_histograma[i] < 0) {
                        lista_secundara.push(0)
                    } else {
                        lista_secundara.push(lista_histograma[i] * 3)
                    }
                }
                desenHistograma(lista_secundara)
                an2006.title = lista_histograma[0]
                an2007.title = lista_histograma[1]
                an2008.title = lista_histograma[2]
                an2009.title = lista_histograma[3]
                an2010.title = lista_histograma[4]
                an2011.title = lista_histograma[5]
                an2012.title = lista_histograma[6]
                an2013.title = lista_histograma[7]
                an2014.title = lista_histograma[8]
                an2015.title = lista_histograma[9]
                an2016.title = lista_histograma[10]
                an2017.title = lista_histograma[11]
                an2018.title = lista_histograma[12]
                an2019.title = lista_histograma[13]
                an2020.title = lista_histograma[14]
            }



            lista_tari.push("Indicatori")
            lista_tari.splice(5, 1, "Germania")
            let tabel_valori = document.getElementById("tabel")

            function creareTabel(an) {
                tabel_valori.innerHTML = ""
                let table = document.createElement('table');

                let row_populatie = []
                for (let i of lista_total) {
                    if (i.an == an) {
                        row_populatie.push(i.valoare2)
                    }
                }
                let medie_populatie = 0
                for (let i of row_populatie) {
                    medie_populatie += i
                }
                medie_populatie = medie_populatie / row_populatie.length

                let row_pib = []
                for (let i of lista_total) {
                    if (i.an == an) {
                        row_pib.push(i.valoare1)
                    }
                }
                let medie_pib = 0
                for (let i of row_pib) {
                    medie_pib += i
                }
                medie_pib = medie_pib / row_pib.length

                const object4 = {
                    405: "Indicatori"
                }
                string_tari = Object.assign(object4, string_tari)

                let row_sv = []
                for (let i of lista_total) {
                    if (i.an == an) {
                        row_sv.push(i.valoare3)
                    }
                }
                let medie_sv = 0
                for (let i of row_sv) {
                    medie_sv += i
                }
                medie_sv = medie_sv / row_sv.length

                let index = 0;
                lista_pop_t = Object.values(row_populatie)
                lista_pop_t.unshift("POPULAȚIE")

                lista_pib_t = Object.values(row_pib)
                lista_pib_t.unshift("PIB pe locuitor")

                lista_sv_t = Object.values(row_sv)
                lista_sv_t.unshift("Speranta de viata")

                for (let j in string_tari) {
                    let rand_principal = document.createElement('tr');
                    let header = document.createElement('td')
                    let textNode = document.createTextNode(string_tari[j])

                    let header2 = document.createElement('td')
                    let textNode2 = document.createTextNode(lista_pop_t[index])
                    if (lista_pop_t[index] != "Populatie") {
                        if (lista_pop_t[index] < medie_populatie) {
                            let a = 150 + (lista_pop_t[index] / 100000)
                            header2.style.background = `rgb(${a},0,0)`
                        } else {
                            let a = (lista_pop_t[index] / 100000)
                            header2.style.background = `rgb(0,${a},0)`
                        }
                    }

                    let header3 = document.createElement('td')
                    let textNode3 = document.createTextNode(lista_pib_t[index])
                    if (lista_pib_t[index] != "PIB pe locuitor") {
                        if (lista_pib_t[index] < medie_pib) {
                            let a = 200 + ((lista_pib_t[index] / 1000) * 2)
                            header3.style.background = `rgb(${a},0,0)`
                        } else {
                            let a = 255 - (lista_pib_t[index] / 1000)
                            header3.style.background = `rgb(0,${a},0)`
                        }
                    }

                    let header4 = document.createElement('td')
                    let textNode4 = document.createTextNode(lista_sv_t[index])
                    if (lista_sv_t[index] != "Speranta de viata") {
                        if (lista_sv_t[index] < medie_sv) {
                            let a = 240 + (lista_sv_t[index] / 10)
                            header4.style.background = `rgb(${a},0,0)`
                        } else {
                            let a = 255 - (lista_sv_t[index] / 10)
                            header4.style.background = `rgb(0,${a},0)`
                        }
                    }
                    header.appendChild(textNode)
                    header2.appendChild(textNode2)
                    header3.appendChild(textNode3)
                    header4.appendChild(textNode4)
                    rand_principal.appendChild(header)
                    rand_principal.appendChild(header2)
                    rand_principal.appendChild(header3)
                    rand_principal.appendChild(header4)
                    table.appendChild(rand_principal)
                    index++
                }
                tabel_valori.appendChild(table)

            }

            function bubbleChartAn(an, canvas) {
                let lista_tari_b = []
                for (let i of lista_total) {
                    if (i.an == an) {
                        lista_tari_b.push(i.tara)
                    }
                }
                let lista_populatie_b = []
                for (let i of lista_total) {
                    if (i.an == an) {
                        lista_populatie_b.push(i.valoare2)
                    }
                }
                let lista_pib_b = []
                for (let i of lista_total) {
                    if (i.an == an) {
                        lista_pib_b.push(i.valoare1)
                    }
                }
                let lista_sv_b = []
                for (let i of lista_total) {
                    if (i.an == an) {
                        lista_sv_b.push(i.valoare3)
                    }
                }

                lista_populatie_bubble = []
                for (let i of lista_populatie_b) {
                    lista_populatie_bubble.push(i / 10000000)
                }
                lista_pib_bubble = []
                for (let i of lista_pib_b) {
                    lista_pib_bubble.push(i / 100000)
                }
                lista_sv_bubble = []
                for (let i of lista_sv_b) {
                    lista_sv_bubble.push(i / 100)
                }

                let cercuri = []
                let cerc = [];
                cercuri = cerc;
                for (let tara = 0; tara < 27; tara++) {
                    cerc.push({ x: lista_populatie_bubble[tara] * 70, y: 50 + lista_pib_bubble[tara] * 210, size: 20 + lista_sv_bubble[tara] * 20, tara: tara });
                }

                let ctx = canvas.getContext('2d')
                let culori = ["#f4a261", "#6b705c", "#ffadad", "#4cc9f0", "#b5179e", "#8ecae6", "#fec5bb", "#ffc8dd", "#caffbf", "#ffc6ff", "#bdb2ff"]
                function draw() {
                    ctx.fillStyle = "#f8edeb"
                    ctx.fillRect(0, 0, canvas.width, canvas.height)
                    ctx.strokeStyle = "black"
                    ctx.strokeRect(0, 0, canvas.width, canvas.height)
                    let index = 0
                    for (let i of cercuri) {
                        ctx.save();
                        ctx.fillStyle = culori[i.tara % culori.length]
                        ctx.beginPath()
                        ctx.arc(i.x, i.y, i.size, 0, Math.PI * 2)
                        ctx.globalAlpha = 0.4
                        ctx.fillText(lista_tari_b[index], i.x - 20, i.y)
                        ctx.fill()
                        ctx.restore()
                        index++;
                    }
                }
                draw()
            }

            let canvas = document.getElementById('bubbleChartAn');
            let an2006_t = document.getElementById("an2006_t");
            an2006_t.onclick = function () {
                creareTabel(2006)
                bubbleChartAn(2006, canvas)
            }
            let an2007_t = document.getElementById("an2007_t");
            an2007_t.onclick = function () {
                creareTabel(2007)
                bubbleChartAn(2007, canvas)
            }
            let an2008_t = document.getElementById("an2008_t");
            an2008_t.onclick = function () {
                creareTabel(2008)
                bubbleChartAn(2008, canvas)
            }
            let an2009_t = document.getElementById("an2009_t");
            an2009_t.onclick = function () {
                creareTabel(2009)
                bubbleChartAn(2009, canvas)
            }
            let an2010_t = document.getElementById("an2010_t");
            an2010_t.onclick = function () {
                creareTabel(2010)
                bubbleChartAn(2010, canvas)
            }
            let an2011_t = document.getElementById("an2011_t");
            an2011_t.onclick = function () {
                creareTabel(2011)
                bubbleChartAn(2011, canvas)
            }
            let an2012_t = document.getElementById("an2012_t");
            an2012_t.onclick = function () {
                creareTabel(2012)
                bubbleChartAn(2012, canvas)
            }
            let an2013_t = document.getElementById("an2013_t");
            an2013_t.onclick = function () {
                creareTabel(2013)
                bubbleChartAn(2013, canvas)
            }
            let an2014_t = document.getElementById("an2014_t");
            an2014_t.onclick = function () {
                creareTabel(2014)
                bubbleChartAn(2014, canvas)
            }
            let an2015_t = document.getElementById("an2015_t");
            an2015_t.onclick = function () {
                creareTabel(2015)
                bubbleChartAn(2015, canvas)
            }
            let an2016_t = document.getElementById("an2016_t");
            an2016_t.onclick = function () {
                creareTabel(2016)
                bubbleChartAn(2016, canvas)
            }
            let an2017_t = document.getElementById("an2017_t");
            an2017_t.onclick = function () {
                creareTabel(2017)
                bubbleChartAn(2017, canvas)
            }
            let an2018_t = document.getElementById("an2018_t");
            an2018_t.onclick = function () {
                creareTabel(2018)
                bubbleChartAn(2018, canvas)
            }
            let an2019_t = document.getElementById("an2019_t");
            an2019_t.onclick = function () {
                creareTabel(2019)
                bubbleChartAn(2019, canvas)
            }
            let an2020_t = document.getElementById("an2020_t");
            an2020_t.onclick = function () {
                creareTabel(2020)
                bubbleChartAn(2020, canvas)
            }

            let buton_animatie = document.getElementById("animatie");
            let canvas_animatie = document.getElementById('bubbleChartAnimation');
            buton_animatie.onclick = function () {

                const animatieBubbleChart = (an, delay) => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            bubbleChartAn(an, canvas_animatie)
                            resolve()
                        }, delay)
                    })
                }
                animatieBubbleChart(2006, 400)
                    .then(() => animatieBubbleChart(2007, 2000))
                    .then(() => animatieBubbleChart(2008, 2000))
                    .then(() => animatieBubbleChart(2009, 2000))
                    .then(() => animatieBubbleChart(2010, 2000))
                    .then(() => animatieBubbleChart(2011, 2000))
                    .then(() => animatieBubbleChart(2012, 2000))
                    .then(() => animatieBubbleChart(2013, 2000))
                    .then(() => animatieBubbleChart(2014, 2000))
                    .then(() => animatieBubbleChart(2015, 2000))
                    .then(() => animatieBubbleChart(2016, 2000))
                    .then(() => animatieBubbleChart(2017, 2000))
                    .then(() => animatieBubbleChart(2018, 2000))
                    .then(() => animatieBubbleChart(2019, 2000))
                    .then(() => animatieBubbleChart(2020, 2000))
            }
        })
    })
})


const schimbaCuloare = (culoare, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = culoare;
            resolve();
        }, delay)
    })
}
schimbaCuloare('#ffadad', 1000)
    .then(() => schimbaCuloare('#ffd6a5', 20000))
    .then(() => schimbaCuloare('#caffbf', 20000))
    .then(() => schimbaCuloare('#9bf6ff', 20000))
    .then(() => schimbaCuloare('#a0c4ff', 20000))
    .then(() => schimbaCuloare('#bdb2ff', 20000))
    .then(() => schimbaCuloare('#ffc6ff', 20000))