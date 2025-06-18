export function addPhoneMask(number: string): string{
    if (number.length != 11){
        throw new Error("Number must be 11 characters long");
    } else {
        var ddd = number.slice(0, 2);
        var special = number.slice(2, 3);
        var firstfour = number.slice(3, 7);
        var secondfour = number.slice(7, 12);        
    }

    return `(${ddd}) ${special}${firstfour}-${secondfour}`;
}