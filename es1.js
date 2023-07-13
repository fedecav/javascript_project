let a = 3 , b = -1 , c = 4 , d=6; 

function maggiore (a , b , c , d){
    let e = a;

    if (e < b){
        e=b
    }

    if (e < c){
        e=c
    }

    if (e < d){
        e=d
    }

    return e;
}

function minore (a , b , c , d){
    let e = a;

    if (e >b){
        e=b
    }

    if (e > c){
        e=c
    }

    if (e > d){
        e=d
    }

    return e;
}

console.log("maggiore = " + maggiore(a , b , c , d) + ", " +"minore = " + minore(a , b , c , d))
