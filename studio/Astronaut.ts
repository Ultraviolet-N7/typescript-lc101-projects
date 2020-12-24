import { Payload } from './Payload';

export class Astronaut implements Payload {
    name: string;
    totalCapacityKg: number;
    cargoItems: string[];
    astronauts: string[];
    massKg: number;

    constructor(name: string, totalCapacityKg: number, massKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
    this.massKg = massKg
    }
}