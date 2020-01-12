// problem : https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/

// Algorithm
// Pick up the first element. It has two sides: A[0] and B[0].
// Check if one could make all elements in A row or B row to be equal to A[0]. If yes, return the minimum number of rotations needed.
// Check if one could make all elements in A row or B row to be equal to B[0]. If yes, return the minimum number of rotations needed.
// Otherwise return -1.


//35123
//33334
const checkEachSideRotation = (side,a,b,l) => {
    let rotateA =0;
    let rotateB=0;
    for(let i=0; i< l ; i++){
        if(a[i] !== side && b[i] !== side) return -1;
        else if(a[i] !== side) rotateA++;
        else if(b[i] !== side) rotateB++;
    }
    return Math.min(rotateA,rotateB);

};

const minRotateDomino = (a,b) =>{

    const maxLength = a.length;
    const Aside1 = a[0];
    const Bside1 = b[0];

//// Check if A side could make all elements in A row or B row to be equal to A[0]. If yes, return the minimum number of rotations needed.
    const ASideRotation = checkEachSideRotation(Aside1,a,b,maxLength);
//if the rotations is not -1 or if the a nd b are the same return the same value.
//it just means all of the dominos half have side A in it.so either it can be the same rotaions as B or may be B is not present in all the other domions and will return -1
//so we can avoid further check with B and return the side A rotations only
//bit trick
// TODO: Revisit again later
    if(ASideRotation != -1 || Aside1 == Bside1) return ASideRotation;
    else return checkEachSideRotation(Bside1,a,b,maxLength);

};


console.log(minRotateDomino([2,1,2,4,2,2],[5,2,6,2,3,2]));
//[2,1,2,4,2,2]
//[5,2,6,2,3,2]