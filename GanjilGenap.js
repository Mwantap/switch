let platNomor = ['B 3478 WIP','B 1009 WOY','B 5076 WBU','B 3445 WIR'];
let date = 21;

platNomor.forEach(function (plat) {
    let number = plat.split(' ')[1];
    let lastnumber =number[number.length - 1];
    let plateType = '';

    switch (lastnumber) {
        case '0':
        case '2':
        case '4':
        case '6':
        case '8':
            plateType = 'GENAP';
            break;
        case '1':
        case '3':
        case '5':
        case '7':
        case '9':
            plateType = 'GANJIL'
            break;
        default: 
    }
    let dateType = (date % 2 === 0) ? 'GENAP' : 'GANJIL';
    let approve = (plateType === dateType) ? 'CAN' : 'CANNOT';
    console.log(`${plat} is plate ${plateType} then ${approve} pass beacause today date is ${date}`);
    
    
});