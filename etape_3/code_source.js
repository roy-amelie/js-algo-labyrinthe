"use strict";
var labirynthe = [[0, 0, 0, 0, 0, 0], [1, 1, 1, 0, 1, 1], [0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 1, 0], [0, 1, 0, 1, 0, 0], [0, 0, 0, 1, 0, 1], [0, 1, 0, 0, 0, 0]]
var end_point = 'no'
let start = [0, 0];
let position = [start, 'x']
let road = []

road.push(start)
shifting(position)
console.log(road)

var path = [[0, 0, 0, 0, 0, 0], [1, 1, 1, 0, 1, 1], [0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 1, 0], [0, 1, 0, 1, 0, 0], [0, 0, 0, 1, 0, 1], [0, 1, 0, 0, 0, 0]]
for(let i = 0; i<road.length; i++){
    path[road[i][0]][road[i][1]]= i;
}
console.table(path)

function shifting(position) {
    while(!finish(position[0])) {
        if (south_exist(position[0]) && 's' != position[1] && new_position(position[0], 's') && end_point == 'no') {
            shifting([[position[0][0],position[0][1]+1], 'n'])
            if (end_point == 'yes'){
                break
            }
        }
        if (east_exist(position[0]) && 'e' != position[1] && new_position(position[0], 'e') && end_point == 'no') {
            shifting([[position[0][0]+1,position[0][1]], 'w'])
            if (end_point == 'yes'){
                break
            }
        }
        if (north_exist(position[0]) && 'n' != position[1] && new_position(position[0], 'n') && end_point == 'no') {
            shifting([[position[0][0],position[0][1]-1], 's'])
            if (end_point == 'yes'){
                break
            }
        }
        if (west_exist(position[0]) && 'w' != position[1] && new_position(position[0], 'w') && end_point == 'no') {
            shifting([[position[0][0]-1,position[0][1]], 'e'])
            if (end_point == 'yes'){
                break
            }
        }
        return
    } 
    return
}

function finish(position){
    let end = [4, 2]
    if (position[0] == end[0] && position[1] == end[1]){
        end_point = "yes"
        return true
    }
    return false
}

function new_position(coordinate, direction){
    if (direction === 's'){
        for(let i = 0; i<road.length; i++){
            if(road[i][0]==coordinate[0] && road[i][1] == coordinate[1] + 1){
                return false
            }
        }
        road.push([coordinate[0],coordinate[1] + 1])
    }
    if (direction === 'e'){
        for(let i = 0; i<road.length; i++){
            if(road[i][0]==coordinate[0] +1 && road[i][1] == coordinate[1]){
                return false
            }
        }
        road.push([coordinate[0] + 1,coordinate[1]])
    }
    if (direction === 'n'){
        for(let i = 0; i<road.length; i++){
            if(road[i][0]==coordinate[0] && road[i][1] == coordinate[1] - 1){
                return false
            }
        }
        road.push([coordinate[0],coordinate[1] - 1])
    }
    if (direction === 'w'){
        for(let i = 0; i<road.length; i++){
            if(road[i][0]==coordinate[0]-1 && road[i][1] == coordinate[1]){
                return false
            }
        }
        road.push([coordinate[0] - 1,coordinate[1]])
    }
    return true
}

function south_exist(coordinate){
    if (coordinate[1] < labirynthe[0].length -1 && labirynthe[coordinate[0]][coordinate[1] + 1] === 0) {
        return true
    } else {
        return false
    }
}

function north_exist(coordinate){
    let x = coordinate[0]
    let y = coordinate[1]
    if (y > 0 && labirynthe[x][y-1] === 0){
        return true
    } else {
        return false
    }
}

function east_exist(coordinate){
    if (coordinate[0]<labirynthe.length -1 && labirynthe[coordinate[0] + 1][coordinate[1]] === 0){
        return true
    } else {
        return false
    }
}

function west_exist(coordinate){
    let x = coordinate[0]
    let y = coordinate[1]
    if (x>0 && labirynthe[x - 1][y] === 0){
        return true
    } else {
        return false
    }
}

