import { LatLngExpression } from "leaflet";

export class Map {
    code: number | string = null;
    name: string;
    category: string = null;
    description: string = null;
    dateTime: string = null;
    coord: LatLngExpression = null;
    groupNode?: string = null;
    checked?: boolean = null;
  }