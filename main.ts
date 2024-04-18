import { Serie } from './serie.js';
import { seriesD } from './data.js';

const seriesbody: HTMLElement = document.getElementById('seriesDatos')!; 
const avgSeasons: HTMLElement = document.getElementById("promedioTempordas")!;

avgSeasons.innerHTML = `${promTempo(seriesD)}`
SeriesInTable(seriesD)

function SeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                           <td><a class="btn" href="#" role="button" id="btn-${c.link}">${c.nombre}</a></td>
                           <td>${c.plataforma}</td>
                           <td>${c.temporadas}</td>`
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

