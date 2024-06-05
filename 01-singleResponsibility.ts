/*
 SOLID
 S: Single responsibility (Responsabilidad unica)
 Una clase solo debe servir unicamente para un solo propsito, loos metodos solo deben servir para una sola razon
*/

/* 
  Ejemplo malo
  Este ejemplo no cumple con el proposito de responsabilidad unica ya que el repositorio se creo con el objetivo de solo interactuar con los datos de la base de datos y no contener logica de negocio
*/

const dataBad = {
  id: 1,
  name: "Example",
};

class RepositoryBad {
  private data: Array<object> = [];

  public save() {
    // logica de negocio
    if (dataBad.name === "Example") {
      this.data.push({ ...dataBad, name: "ExampleBad" });
      return;
    }
    console.log("Guardar en base de datos");
    this.data.push(dataBad);
  }
}

/* 
  Ejemplo bueno
  El unico proposito de la clase repository es interactuar con los datos de la base de datos
*/

const dataGood = {
  id: 1,
  name: "Example",
};

class RepositoryGood {
  private data: Array<object> = [];

  public save() {
    console.log("Guardar en base de datos");
    this.data.push(dataGood);
  }
}
