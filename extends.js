class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback`)
    }
}

class Instructor extends TeamMember {
    designation = 'web course Instructor'
    team = 'web team'

    constructor(name, location) {
        super(name, location);
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
  
}

class Developer extends TeamMember {
    designation = 'Neptune Developer'
    team = 'web team'
    tech;

    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
    developeFeature(feature) {
        console.log(`please develope the  ${feature}`)
    }
    relaease(version) {
        console.log(`please release the ${version}`)
    }

 
}
class JobPlacement extends TeamMember {
    designation = 'Job placement Commando'
    team = 'web team'
    region;

    constructor(name, location, region) {
        super(name, location);
        this.region = region;
    }
   provideResume(feature) {
        console.log(`please develope the  ${feature}`)
    }
    relaease(version) {
        console.log(`please release the ${version}`)
    }

}

const alia = new Developer('alia', 'dhaka', 'react');

console.log(alia);
alia.provideFeedback();
const bipasa = new JobPlacement('bipasa', 'kolkata', 'india');
console.log(bipasa);
bipasa.provideFeedback()