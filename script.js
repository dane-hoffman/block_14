//Create an array name myInstruments that contains the following instruments: flute, clarinet, saxophone, trumpet, and trombone.
myInstruments = [`saxophone`, `flute`, `clarinet`, `trumpet`, `trombone`];

//Write code to transform it to include tuba, and bassoon.

myInstruments.push (`tuba`,`bassoon`);

// const getFirstInstrument = (instruments) => {
//     return instruments[0];
// }

const getLastInstrument = (instruments) => {
    return instruments[myInstruments.length - 1];
}

console.log(getLastInstrument(myInstruments));