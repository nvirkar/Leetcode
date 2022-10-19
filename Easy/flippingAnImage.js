/**
 * Leetcode-832
 * Flipping an Image
 * https://leetcode.com/problems/flipping-an-image/
 */


var flipAndInvertImage = function (image) {
    for (i = 0; i < image.length; i++) {
        // reverse the array
        for (j = 0; j < Math.floor((image[i].length + 1) / 2); j++) {
            // Ex-or during swapping
            temp = image[i][j] ^ 1;
            image[i][j] = image[i][image[i].length - 1 - j] ^ 1;
            image[i][image[i].length - 1 - j] = temp
        }
    }
    return image
};


console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]))
console.log(flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]))
