import { Serie } from './serie.js';
import { seriesD } from './data.js';

const seriesbody: HTMLElement = document.getElementById('seriesDatos')!; 
const avgSeasons: HTMLElement = document.getElementById("promedioTempordas")!;

avgSeasons.innerHTML = `${promTempo(seriesD)}`
SeriesInTable(seriesD)

function SeriesInTable(series: Serie[]): void {
  series.forEach(serie => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td><a class="btn" href="#" role="button" id="btn-${serie.link}">${serie.nombre}</a></td>
                           <td>${serie.plataforma}</td>
                           <td>${serie.temporadas}</td>`
                           seriesbody.appendChild(trElement);
    })};


function promTempo(series: Serie[]): number {
  const totalSeries = series.length;
  let totalTemporadas: number = 0;
  let promedioTemporadas: number = 0;

  series.forEach((serie) => totalTemporadas = totalTemporadas + serie.temporadas);

  if (totalSeries > 0) {
      promedioTemporadas = totalTemporadas / totalSeries;
  }
  return promedioTemporadas;
}

