/*
 SOLID
 L: Liskov sustitution (Sustitucion de liskov)
 Las subclases deben poder reemplazar a las superclases sin romper la aplicacioon o derivar a implementaciones nulas o erroneas
*/

/* 
  Ejemplo malo
  Este ejemplo no cumple con la sustitucion de liskov debido a que la subclase LeonBad no es capaz de reemplazar la superclase AnimalBad debido a que un leon no vuela y no tiene alas esto como resultado da error.
*/

abstract class AnimalBad {
  private color: string;
  private edad: number;
  private wings: number;

  constructor(color: string, edad: number, wings: number) {
    this.color = color;
    this.edad = edad;
    this.wings = wings;
  }

  abstract move(): void;
  abstract fly(): void;
}

class LeonBad extends AnimalBad {
  move(): void {
    console.log("Leon se mueve");
  }

  fly(): void {
    throw new Error("Method not implemented, Len not fly");
  }
}

/* 
  Ejemplo bueno
  Este ejemplo cumple con la sustitucion de liskov debido a que las subclases LeonGood y Eagle son capaces de reemplazar la superclase AnimalGood y AnimalFly, no da error al implementar  y usar sus funcionalidades.
*/

abstract class AnimalGood {
  private color: string;
  private edad: number;

  constructor(color: string, edad: number) {
    this.color = color;
    this.edad = edad;
  }

  abstract move(): void;
}

abstract class AnimalFly extends AnimalGood {
  private wings: number;

  constructor(color: string, edad: number, wings: number) {
    super(color, edad);
    this.wings = wings;
  }

  abstract fly(): void;
}

class LeonGood extends AnimalGood {
  move(): void {
    console.log("Leon se mueve");
  }
}

class Eagle extends AnimalFly {
  move(): void {
    console.log("Aguila se mueve");
  }

  fly(): void {
    console.log("Aguila vuela");
  }
}
