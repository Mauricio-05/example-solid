/*
 SOLID
 I: Interfaces segregation (Segregacion de interfaz)
 Tener muchas interfaces especificas son mejores que tener una para proposito general, no deberiamos obligar a usar una interfaz que tenga funcionalidades que no usemos.
*/

/* 
  Ejemplo malo
  Este ejemplo no cumple con la segregacion de interfaz porque tenemos una interfaz de proposito general ActionsWorker que tiene varias funcionalidades que las usa la clase WorkerHumanBad un trabajador humano trabaja,duerme o come mientras que la clase WorkerRobotBad solo trabaja no se deberia obligar a que use las funcionalidades de comer y dormir porque un robot no hace esto.
*/

interface ActionsWorker {
  work(): void;
  eat(): void;
  sleep(): void;
}

class WorkerHumanBad implements ActionsWorker {
  work(): void {
    console.log("Trabajador humano trabajando");
  }
  eat(): void {
    console.log("Trabajador humano comiendo");
  }
  sleep(): void {
    console.log("Trabajador humano durmiendo");
  }
}

class WorkerRobotBad implements ActionsWorker {
  work(): void {
    console.log("Trabajador robot trabajando");
  }
  eat(): void {
    throw new Error("Method not implemented, Robot not eat");
  }
  sleep(): void {
    throw new Error("Method not implemented, Robot not sleep");
  }
}

/* 
  Ejemplo bueno
  Este ejemplo cumple con la segregacion de interfaz porque tenemos mas interfaces para propositos mas especificos y solo las implementamos segun el tipo de trabajador y las funcionalides que necesite.
*/

interface ActionsBasicWorker {
  work(): void;
}

interface ActionsWorkerHuman extends ActionsBasicWorker {
  eat(): void;
  sleep(): void;
}

class WorkerRobotGood implements ActionsBasicWorker {
  work(): void {
    console.log("Trabajador robot trabajando");
  }
}

class WorkerHumanGood implements ActionsWorkerHuman {
  work(): void {
    console.log("Trabajador humano trabajando");
  }
  eat(): void {
    console.log("Trabajador humano comiendo");
  }
  sleep(): void {
    console.log("Trabajador humano durmiendo");
  }
}
