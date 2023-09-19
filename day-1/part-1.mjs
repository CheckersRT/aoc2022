import * as fs from 'fs';

const data = fs.readFileSync('./data.txt').toString();

const elfList = data.split('\n\n');


const elfFoodItems = elfList.map((elf) => {
    return elf.split('\n').map((calorie) => {
        return parseInt(calorie, 10)
    })
});

const elfTotalCals = elfFoodItems.map((elf) => {
    return elf.reduce((total, foodItem) => {
        return total + foodItem;
    }, 0)
})

const maxElfCalories = Math.max(...elfTotalCals);

console.log(maxElfCalories)

