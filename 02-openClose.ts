/*
 SOLID
 O: Open Close (Abierto cerrado)
 Las entidades de software deben estar abiertas para su extension y cerradas para su modificacion
*/

/* 
  Ejemplo malo
  Este ejemplo no cumple con el proposito de abierto y cerrado porque si queremos calcular el area de una nueva forma la clase CalculateArea estara abierta modificaciones agregando ifs para validar cada figura.
*/

class CalculateArea {
  static calculateArea(shape: string, area: number): number {
    if (shape === "Triangle") {
      return area * 2;
    } else if (shape === "Circle") {
      return area * 4;
    }

    return area;
  }
}

/* 
  Ejemplo bueno
  Este ejemplo cumple con el proposito de abierto y cerrado porque tenemos una entidad de software que esta abierta a su extension como la interface IArea con su metodo calculateArea y ninguna de las clases (Triangle, Circle, CalculateAreas) esta abierta a modificaciones.
*/

interface IArea {
  calculateArea(area: number): number;
}

class Triangle implements IArea {
  calculateArea(area: number): number {
    return area * 2;
  }
}

class Circle implements IArea {
  calculateArea(area: number): number {
    return area;
  }
}

class CalculateAreas {
  static calculateAreas(shapes: IArea[], area: number): void {
    for (const shape of shapes) {
      const result = shape.calculateArea(area);
      console.log(result);
    }
  }
}
