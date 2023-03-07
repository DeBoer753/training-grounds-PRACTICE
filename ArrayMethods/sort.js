// SORT: The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// Notes: 

// Basic Sort:
const nums1 = [74, 18, 25, 83, 57]
nums1.sort()
console.log(nums1);

// Sort Ascending Function: 
const nums2 = [15,33,29,55,46,61]
function compareNumbers1(a, b) {
    return a - b
}

nums2.sort(compareNumbers1)
console.log(nums2);

// Sort Descending Function: 
const nums3 = [15,33,29,55,46,61]
function compareNumbers2(a ,b) {
    return b - a
}

nums3.sort(compareNumbers2)
console.log(nums3);

// Sort With an Array of Objects:
const products = [
    {
        name: 'laptop',
        price: 1000
    },
    {
        name: 'desktop',
        price: 1500
    },
    {
        name: 'phone',
        price: 500
    }
]

products.sort((a,b) => a.price - b.price)
console.log(products);