function guessGift(wish, gift){
    let answer = []
 
     wish.forEach((w) => {
         presents.forEach((p) => {
             if(p.size === w.size && p.clatters === w.clatters && p.weight === w.weight){
                 answer.push(w.name)
             }
             
         })
     
     })
     return answer
 }


var wishlist = [
    {name: "Ferarri", size: "huge", clatters: "no", weight: "light"},
    {name: "Bugatti", size: "huge", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "huge", clatters: "a bit", weight: "medium"},
    {size: "huge", clatters: "no", weight: "light"}
];

console.log(guessGift(wishlist, presents))