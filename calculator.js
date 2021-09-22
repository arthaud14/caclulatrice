
const firstValueEntered = prompt("Veuillez saisir une valeur");
const operator = prompt("Veuillez saisir un opérateur");
const secondValueEntered = prompt("Veuillez saisir une valeur");


const firstValue = parseInt(firstValueEntered);
const secondValue = parseInt(secondValueEntered);


    switch(operator) {
        case `+`:
            console.log(firstValue + secondValue);
            break;
    
        case`-`:
            console.log(firstValue - secondValue);
            break;

        case `*`:
            console.log(firstValue * secondValue);
            break;

        case `/`: 
            console.log(firstValue / secondValue);
            default:
                throw new Error("une erreur est survenue !")

        }

    // alert("Le résulat est " + (firstValue, secondValue));
    

// catch(error) {
//     alert(error);
// }

