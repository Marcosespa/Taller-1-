import { seriesD } from './data.js';
var seriesTbody = document.getElementById('seriesDatos');
var avgSeasons = document.getElementById("promedioTempordas");
avgSeasons.innerHTML = "".concat(promTempo(seriesD));
renderSeriesInTable(seriesD);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                           <td><a class=\"btn\" href=\"#\" role=\"button\" id=\"btn-").concat(c.link, "\">").concat(c.nombre, "</a></td>\n                           <td>").concat(c.plataforma, "</td>\n                           <td>").concat(c.temporadas, "</td>\n                           \n                           ");
        seriesTbody.appendChild(trElement);
    });
}
;
function promTempo(series) {
    var totalSeries = series.length;
    var totalTemporadas = 0;
    var promedioTemporadas = 0;
    series.forEach(function (serie) { return totalTemporadas = totalTemporadas + serie.temporadas; });
    if (totalSeries > 0) {
        promedioTemporadas = totalTemporadas / totalSeries;
    }
    return promedioTemporadas;
}
