class Animal {
  constructor(name, backbone, bloodType) {
    this.name = name;
    this.backbone = backbone;
    this.bloodType = bloodType;
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Backbone: ${this.backbone}`);
    console.log(`Blood Type: ${this.bloodType}`);
  }

  // A generic method for animal movement
  move() {
    console.log(`${this.name} is moving.`);
  }
}

class Invertebrate extends Animal {
  constructor(name) {
    super(name, false, 'Not applicable');
  }

  // Method specific to invertebrates
  exoskeleton() {
    console.log(`${this.name} has an exoskeleton.`);
  }
}

class Vertebrate extends Animal {
  constructor(name, bloodType) {
    super(name, true, bloodType);
  }

  // Method specific to vertebrates
  spine() {
    console.log(`${this.name} has a spine.`);
  }
}

class ColdBlooded extends Vertebrate {
  constructor(name) {
    super(name, 'Cold');
  }

  // Method specific to cold-blooded animals
  regulateTemperature() {
    console.log(`${this.name} regulates temperature by external means.`);
  }
}

class WarmBlooded extends Vertebrate {
  constructor(name) {
    super(name, 'Warm');
  }

  // Method specific to warm-blooded animals
  maintainTemperature() {
    console.log(`${this.name} maintains a constant internal temperature.`);
  }
}

const spider = new Invertebrate('Spider');
const fish = new ColdBlooded('Fish');
const frog = new ColdBlooded('Frog');
const lizard = new ColdBlooded('Lizard');
const eagle = new WarmBlooded('Eagle');
const lion = new WarmBlooded('Lion');

spider.displayInfo();
spider.exoskeleton();
spider.move();

fish.displayInfo();
fish.regulateTemperature();
fish.move();

frog.displayInfo();
frog.regulateTemperature();
frog.move();

lizard.displayInfo();
lizard.regulateTemperature();
lizard.move();

eagle.displayInfo();
eagle.maintainTemperature();
eagle.move();

lion.displayInfo();
lion.maintainTemperature();
lion.move();
