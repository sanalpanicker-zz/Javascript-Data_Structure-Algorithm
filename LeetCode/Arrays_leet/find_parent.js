// const lists = [
//     // #Parents ID,   Child ID
//       [9  ,  3],
//       [6  , 10],
//       [11 ,  8],
//       [1  ,  2],
//       [9  ,  1],
//       [8  ,  7],
//       [11 ,  9],
//       [4  ,  6],
//       [6  ,  5],
//       [11 ,  4]
//     ]; 

// const resultArr = [];
// const resultObj = {}
// const treeMap = [];
//     lists.forEach((node)=>{
//         const map ={};
//         map['parentId'] = node[0];
//         map['id'] = node[1];
//         resultArr.push(map);
//     })

//     resultArr.forEach(node => {
//         const resultObj = {}

//         const parentindex = treeMap.findIndex((el)=>{
//             return el.parentId == node.parentId;
//         })

//         if(parentindex!== -1){
//             treeMap[parentindex]['children'].push(node.id);
//         }else{
//             resultObj['parentId'] = node.parentId;
//         }

//         const childindex = treeMap.findIndex((el)=>{
//             return el.parentId == node.id;
//         })

//         if(childindex!== -1){
//             resultObj['children'] = [treeMap[parentindex]];
//         }else{
//             resultObj['children'] = [node.id];
//         }

//         if(childindex == -1 && parentindex == -1)
//             treeMap.push(resultObj);
        

//         });


//       //});


//     console.log(resultArr);
//     console.log(treeMap);

// //     class node {
// //         constructor(value){
// //             this.value = value;
// //             this.parent = null;
// //             this.children = [];
// //         }
// //     } 
// //     class Tree {
// //         constructor(root){
// //         this.root = root;
// //         }
// //     insert(node, current = this.root){
// //         if(node.parent.value == current.value){
// //             current.children.push(node);
// //             return true;
// //         }

// //         else if(current.children.length!=0){
// //             current.children.forEach((child)=>{
// //                 return this.insert(node,child);
// //             })
// //         }
// //     }
// // }


// // const root = new node(Number.POSITIVE_INFINITY);
// // const relationTree = new Tree(root);


// // lists.forEach((list)=>{
// // const parentNode = new node(list[0]);
// // const childNode = new node(list[1]);
// // childNode.parent = parentNode.value;
// // const isIt =relationTree.insert(parentNode);
// // if(!isIt){
// //     relationTree.root.children.push(parentNode);
// // }
// // const isIt =relationTree.insert(childNode);

// // })

// // console.log(relationTree);

// debugger;

const iList = [
    // #Parents ID, Child ID
    [9 , 3],
    [6 , 10],
    [11 , 8],
    [1 , 2],
    [9 , 1],
    [8 , 7],
    [11 , 9],
    [4 , 6],
    [6 , 5],
    [11 , 4],
    ];
    


    const populateChildrenHelper = (arr, parent) => {
        const result = []
        for(let el of arr) {
            if(el.parentId == parent) {
                let children = populateChildrenHelper(arr, el.childId)
                if(children.length) {
                    el.children = children
                }
                result.push(el)
            }
        }
        return result;
    }

const findParentHelper = (parentSet, arr) =>{
    arr.forEach((el)=>{
        parentSet.delete(el[1])
    })
    return parentSet.values().next().value ;
}

    const treeify = (lists) => {
    const nodeArr = [];
    const parentSet = new Set();
    //creating a node array of parent and child
        lists.forEach((node)=>{
            const map ={};
            map['parentId'] = node[0];
            map['childId'] = node[1];
            parentSet.add(node[0]);
            nodeArr.push(map);
        })
    //find the parent
    const parent = findParentHelper(parentSet,lists);
    //treeify the nodelist
    return populateChildrenHelper(nodeArr,parent)
}

console.log(treeify(iList));
    
    // const normalize = arr => {
    // let Parent;
    // let child = {};
    // let parent = {};
    // let map = {};
    
    // arr.forEach( item => {
    // child[item[1]] = true
    // parent[item[0]] = true
    // })
    
    // for(let key in parent){
    // if(!child[key]){
    // Parent = key; 
    // }
    // }
    
    // arr.forEach( item => {
    // map[item[1]] = {id:item[1],pid:item[0],child:[]};
    // });
    // map[Parent] = {id:Parent,pid:null,child:[]};
    // let structure = map[Parent];
    
    // for(let id in map){
    // if(map[id] !== Parent){
    // let pid = map[id].pid;
    // if(!map[pid]){
    
    // map[pid] = {id:pid,pid:null,child:[structure]}
    // } else {
    // map[pid]['child'].push(map[id]);
    // }
    
    // }
    // }
    // console.log(structure)
    // } 
    
    // normalize(iList);

    debugger;