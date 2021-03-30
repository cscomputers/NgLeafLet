/**
 * Serviço de geolocalização - Utilizando a API do LeafLet com Mapa do Google.
 * @Autor: Antonio Carlos Lázaro de Oliveira, contatompx@hotmail.com.
 * @Local: Curitiba/PR.
 * @Data: 09/07/2018.
 * 
 * IMPORTANTE: Não se esqueça de adicionar LeafletModule.forRoot()
 * ao imports de @NgModule do module.ts em que você está trabalhando.
 * Exemplo de uso em: seu-componente.component.ts, método: loadGeolocation().
 * Esta classe é um serviço, qualquer alteração feita aqui afetará todas as telas que a utilizam.
 */

import { Injectable, Injector } from '@angular/core';
import { icon, latLng, CRS, marker, polyline, tileLayer, LatLngExpression } from 'leaflet';
import { Map } from './map.model';
import { Observable } from 'node_modules/rxjs';
import { CommonService } from '../../common/common.service';
import { numberToMoney } from '../../functions/number-to-money';

@Injectable()
export class MapService extends CommonService {
 
  // Variável responsável por trazer o mapa inteiro.
  public map: any;
  // Menu superior direito com o google map e o google hybrid.
  public layersControl: any;
  // Distância percorrida no mapa.
  public distance: string;

  //Lista de marcadores
  public MarkersList:any;
  // Mapa urbano
  public googleMaps;
  // Mapa Satélite
  public googleHybrid;

  constructor(injector:Injector) {
    super(injector);

    this.map = null;
    this.layersControl = null;
    this.distance = null;
    this.MarkersList = [];
    this.googleMaps = null;
    this.googleHybrid = null;
  }
  /**
   * 
   * @param event // Lista de eventos que contém todos as faltas, infrações e demais eventos ocorridos no percurso. 
   * @param startTrack // Coordenadas com o início do percurso.
   * @param endTrack // Coordenadas com o final do percurso.
   * @param route // Todas as coordenadas, (união de todos os eventos para formar a rota completa percorrida na aula).
   */
  public loadMap(event: Map[], startTrack?: LatLngExpression, endTrack?: LatLngExpression, route?: any): void {
    // Configuração do mapa urbano.
    this.googleMaps = tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      detectRetina: true
    });

    // Configuração do mapa Satélite.
    this.googleHybrid = tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      detectRetina: true
    });

    //Camada com o mapa do google maps
    this.MarkersList.push(this.googleMaps);
    //Camada com a rota percorrida desenhada em azul.
    if(route) this.MarkersList.push(polyline([route]));
    //Camada com o ponto inicial.
    if(startTrack) this.setInitPoint(startTrack);
    // Camada com os pontos do meio.
    this.setInnerPoints(event);
    //Camada com o ponto final.
    if(endTrack) this.setEndPoint(endTrack);
    //centro aproximado das coordenadas.
    const halfOfPath =  Math.floor(event.length /2);

    //Principal - Gera o mapa com as opções do template com o array de marcadores.
    this.map = {
      center: ['-23.9573', '-46.3092'], //Configura o centro do mapa na imagem.
      zoom: 6,
      layers: this.MarkersList, //Adiciona todos os marcadores ao mapa.
      scrollWheelZoom: false,
      attributionControl: false //Remove o link do Leaflet do mapa.
    };
    return this.map;
  }

  // Monta a camada (Menu superior direito) responsável pela escolha do tipo de mapa (Urbano ou Satélite).
  public loadLayers(): any {
    this.layersControl = {
      baseLayers: {
        'Mapa': this.googleMaps,
        'Satélite': this.googleHybrid
      },
    };
    return this.layersControl;
  }

  //Opicional - Calcula e retorna a distância percorrida, utilizando o primeiro e o último marcador.
  public loadDistanceByLatLng(startTrack: LatLngExpression, endTrack: LatLngExpression): string {

    let distanceValue = CRS.Earth.distance(latLng(startTrack), latLng(endTrack));
    
    let size = ' metros.';
    if(distanceValue >= 1000) {
      distanceValue = distanceValue / 1000;
      size = ' km.';
    }
    // Usa o helper number to money sem o R$ para conversão. Ex: 40,35 km ou 250,30 metros.
    this.distance = numberToMoney(distanceValue, false) + size;
    return this.distance;
  }

  /**
   * Gera o marcador inicial do mapa.
   * @param event 
   */
  private setInitPoint(startTrack: LatLngExpression) {
    let initPoint = marker(startTrack, {
        title: 'Início do percurso',
        icon: icon({
          iconSize: [ 25, 25 ],
          iconAnchor: [ 12, 22 ],
          iconUrl: './assets/img/map/placeholder.png',
          shadowUrl: 'leaflet/marker-shadow.png'
        })
      });
      // Adiciona à lista.
      this.MarkersList.push(initPoint);
  }

  /**
   * Gera o marcador final do mapa.
   * @param event 
   */
  private setEndPoint(endTrack: LatLngExpression) {
    let endPoint = marker(endTrack, {
        title: 'Fim do percurso',
        icon: icon({
          iconSize: [ 25, 25 ],
          iconAnchor: [ 12, 22 ],
          iconUrl: './assets/img/map/placeholder-end.png',
          shadowUrl: 'leaflet/marker-shadow.png'
        })
      });
      // Adiciona à lista.
      this.MarkersList.push(endPoint);
  }

  /**
   * Gera os marcadores do mapa, com excessão do primeiro e do último.
   * @param event: PraticalEvent[]
   */
  private setInnerPoints(event: Map[]) {
    // Percorre do segundo até o penúltimo índice da lista para setar os pontos internos do mapa.
    for (let e = 0; e < event.length; e++) {
      let internalPoints = marker(event[e].coord, {
        title: event[e].name,
        icon: icon({
					iconSize: [ 22, 22 ], //Tamanho do ícone
          iconAnchor: [ 9, 9 ], //Posição do ícone
					iconUrl: './assets/img/map/icon_ship.png' //URL da imagem do ícone
				})
      }).bindPopup(event[e].code + '<br>' + event[e].description + '<br>' + event[e].category + '<br>' + event[e].dateTime );
      // Adiciona à lista
      this.MarkersList.push(internalPoints);
    }
  }

  public loadData(): Observable<boolean> {return;}

  public sendData(): Observable<boolean> {return;}

  public editData(): Observable<boolean> {return;}
 
  public deleteData(): Observable<boolean> {return;}

}