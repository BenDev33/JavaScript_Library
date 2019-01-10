let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
food.push('Pizza');
food.splice(1,0, 'Bananas')
food.pop('Pizza')
// for(f in food){
//     console.log(food[f])
// }


for(f of food){
    console.log(f)
}


