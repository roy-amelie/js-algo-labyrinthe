"use strict";
var labirynthe = [[0, 0, 0, 0, 0, 0], [-1, -1, -1, 0, -1, -1], [0, 0, 0, 0, 0, 0], [0, -1, -1, 0, -1, 0], [0, -1, 1000, -1, 0, 0], [0, 0, 0, -1, 0, -1], [0, -1, 0, 0, 0, 0]]

let position = [0, 0];
let road = []
let path = 1;
let i =0;
console.table(labirynthe)


road.push(position)
position = road.pop()


while(labirynthe[position[0]][position[1]] != 1000){
    labirynthe[position[0]][position[1]] = path
    if(west_exist(position)){
        road.push([position[0]-1, position[1]])
    }
    if(north_exist(position)){
        road.push([position[0], position[1]-1])
    } 
    if(east_exist(position)){  
        road.push([position[0]+1, position[1]])
    }
    if(south_exist(position)){
        road.push([position[0], position[1]+1])
    }

    if (road.length == 0){
        break;
    }
    position = road.pop()
    path ++
    
}
console.table(labirynthe)  
console.log('vous avez trouvé la sortie : x: ', position[0], ' y: ', position[1])
road = []
while(labirynthe[position[0]][position[1]] != 1){
    road.push(position)
    position = check_before(position)
}

road.reverse()
console.log(road)
console.log('nombre d étapes: ',road.length)

function check_before(position){
    let path_before_position =  []
    let before_position = []
    // sud
    if (position[1]<labirynthe[0].length && labirynthe[position[0]][position[1]+1]>0){
        path_before_position.push(labirynthe[position[0]][position[1]+1])
        before_position.push([position[0],position[1]+1])
    }
    // nord
    if (position[1]>0 && labirynthe[position[0]][position[1]-1]>0){
        path_before_position.push(labirynthe[position[0]][position[1]-1])
        before_position.push([position[0],position[1]-1])
    }
    // est
    if (position[0]<labirynthe.length -1 && labirynthe[position[0] +1][position[1]]>0){
        path_before_position.push(labirynthe[position[0] +1][position[1]])
        before_position.push([position[0]+1,position[1]])
    }
    // ouest
    if (position[0]>0 && labirynthe[position[0] -1][position[1]]>0){
        path_before_position.push(labirynthe[position[0] -1][position[1]])
        before_position.push([position[0]-1,position[1]])
    }
    let index_before = compare(path_before_position)
    return before_position[index_before]
}

function compare(array){
    let k=0
    for(let i = 1; i<array.length;i++){
        if(array[i]<array[k]){
            k=i
        }
    }
    return k
}

function south_exist(coordinate){
    if (coordinate[1] < labirynthe[0].length -1 && (labirynthe[coordinate[0]][coordinate[1] + 1] === 0 || labirynthe[coordinate[0]][coordinate[1] + 1] === 1000)) {
        return true
    } else {
        return false
    }
}

function north_exist(coordinate){
    let x = coordinate[0]
    let y = coordinate[1]
    if (y > 0 && (labirynthe[x][y-1] === 0 || labirynthe[x][y-1] === 1000)){
        return true
    } else {
        return false
    }
}

function east_exist(coordinate){
    if (coordinate[0]<labirynthe.length -1 && (labirynthe[coordinate[0] + 1][coordinate[1]] === 0 || labirynthe[coordinate[0] + 1][coordinate[1]] === 1000)){
        return true
    } else {
        return false
    }
}

function west_exist(coordinate){
    let x = coordinate[0]
    let y = coordinate[1]
    if (x>0 && (labirynthe[x - 1][y] === 0 || labirynthe[x - 1][y] === 1000)){
        return true
    } else {
        return false
    }
}

