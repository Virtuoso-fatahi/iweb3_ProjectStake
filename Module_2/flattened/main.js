let arrays = [[1, 2, 3], [4, 5], [6]];

let letters = [["A", "B", "C"], ["D", "E"], ["F"]];

let names = [["Aloba", "Esin", "Promise"], ["Feranmi", "Solomon"], ["Aliyah", "Justina", "Grace", "Anne"], ["Fareedah", "Samiah", "Darasinmi"]];

let flattened = names.reduce((accumulator, currentArray) => accumulator.concat(currentArray), []);

console.log(flattened); 
