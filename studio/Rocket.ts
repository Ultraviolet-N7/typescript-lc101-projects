import { Payload } from './Payload';
import { Cargo } from './Cargo';

export class Rocket implements Payload {
    massKg: number;
    name: string;
    totalCapacityKg: number;
    cargoItems: string[];
    astronauts: Astronaut[];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.massKg = massKg;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number {
        let itemMass = 0;
        for (let i=0; i < items.length; i++){
        itemMass += items[i];
        return itemMass;
        }
    }
    currentMassKg(): number {
        return this.sumMass(this.astronauts + this.cargoItems);
    }
    canAdd(item: Payload): boolean{
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    }    
    addCargo(cargo: Cargo): boolean {

    }    
}