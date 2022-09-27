const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){


cats.push(name);
}
function destructivelyPrependCat(name){


    cats.unshift(name);
    }
function destructivelyRemoveLastCat(){


    cats.pop();
}

function destructivelyRemoveFirstCat(){
        
        
    cats.shift();
}
function appendCat(name){


cats.slice(0, name);
}

function prependCat(name){
                
                
    cats.slice(name);
}
function removeLastCat(){
                
                
    cats.slice(2, 4);
}
function removeFirstCat(){
                
                
    cats.slice(2);
}


    