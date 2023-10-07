// Iteración 1 

// Paso 1. Construir Warrior

class Warrior { 

	constructor(life, power) { 
		this.power = power; 
		this.life = life; 
	}

    attack() {
        return this.power
    } 

    defend(damage) {

       let remainingLife = (damage - life); 
       console.log(remainingLife)
    }

  

}


// Paso 2. Construir Maya

class Maya extends Warrior {


constructor(life, power) { 
    super(life, power); 
    
}

  drinkColaCao() {

    return (power += 10)
	console.log(`${this.Maya} bebe Colacao.`); 
	
}
}

// Paso 3. Construir Azteca

class Aztec extends Warrior {


constructor(life, power){

    super(life, power);
}

drinkNesquik() {
    
    return (life += 10)
}

}
 let Goku = new Maya(50, 80); 
 console.log(Goku)

let Vegeta = new Aztec(70, 20);
console.log(Vegeta)

// Iteración 2

//Azteca bebe Nesquik

Vegeta.drinkNesquik()

//Maya bebe Colacao

Goku.drinkColaCao

