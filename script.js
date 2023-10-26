//Create an array name myInstruments that contains the following instruments: flute, clarinet, saxophone, trumpet, and trombone.
myInstruments = [`saxophone`, `flute`, `clarinet`, `trumpet`, `trombone`];

//Write code to transform it to include tuba, and bassoon.

myInstruments.push (`tuba`,`bassoon`);

const getFirstInstrument = (instruments) => {
    return instruments[0];
}

const getLastInstrument = (instruments) => {
    return instruments[myInstruments.length - 1];
}

const getFirstAndLastInstruments = (instruments) => {
    const output = [];
    output.push(instruments[0])
    output.push(instruments[instruments.length -1])
    return output;
}

const getFirstThreeInstruments = () => {
    const output = [];
    for (let i=0;i<3;i++){
        output.push(myInstruments[i]);
    }
    return output;
}


console.log(getFirstThreeInstruments(myInstruments));