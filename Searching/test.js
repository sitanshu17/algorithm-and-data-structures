

// 1st 0 - 0
// 2nd 0 - 3
// 3rd 0 - 5
// 4th - 6
// 5th - 7
// diff = [3, 5, 3, 2, 3];
// diff. b/w index == 1 && diff. should be max

//let arr1 = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];


const maxLength = (array) => {
    let diff = [];
    let startIndex;
    // for (let index = 0; index < array.length; index++) {
    //     if(array[i] === 0) {
    //         startIndex = i;
    //         break;
    //     }
    // }

    let count = 1;
    for (let i = startIndex; i < array.length; i++) {
        count++;
        if(count === 2) {
            count = 1;
        }
        if(array[i] === 0) {
            startIndex = i;
            let temp = i - startIndex;
            diff.push(temp);
            
        }
    }
}
// diff = [3, ]

let arr = [0, 1, 1, 0, 1, 0, 0, 0, 1, 1]; 