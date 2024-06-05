/*
 SOLID
 D: Dependency inversion (Inversion de dependencias)
 Los modulos de alto nivel no deben depender directamente de los modulos de bajo nivel. Deben depender de abstracciones o interfaces.
*/

/* 
  Ejemplo malo
  El principio de inversion de dependencias no se cumple debido a que el modulo de alto nivel UserServiceBadd depende directamente del modulo de bajo nivel RepositoryBadd y no de una abstraccion o interface
*/

class RepositoryBadd {
  save() {
    console.log("Guardando en base de datos de produccion");
  }
}

class UserServiceBadd {
  constructor(private repositoryBadd: RepositoryBadd) {}

  saveUser() {
    this.repositoryBadd.save();
  }
}

class UserServiceTestBadd {
  constructor(private repositoryBadd: RepositoryBadd) {}

  saveUserTest() {
    this.repositoryBadd.save();
  }
}

/* 
  Ejemplo bueno
  El principio de inversion de dependencias se cumple debido que el modulo de alto nivel UserServiceGood depende de una abstraccion o interface y no directamente de un modulo de bajo nivel.
*/

interface RepositoryGoodd {
  save(): void;
}

class RepositoryGoodImpl implements RepositoryGoodd {
  save(): void {
    console.log("Guardando en base de datos de produccion");
  }
}

class RepositoryGoodTestImpl implements RepositoryGoodd {
  save(): void {
    console.log("Guardando en base de datos de desarrollo");
  }
}

class UserServiceGood {
  constructor(private repositoryGoodd: RepositoryGoodd) {}

  saveUser() {
    this.repositoryGoodd.save();
  }
}

class UserServiceTestGood {
  constructor(private repositoryGoodd: RepositoryGoodd) {}

  saveUserTest() {
    this.repositoryGoodd.save();
  }
}

new UserServiceGood(new RepositoryGoodImpl()).saveUser();
new UserServiceTestGood(new RepositoryGoodTestImpl()).saveUserTest();
