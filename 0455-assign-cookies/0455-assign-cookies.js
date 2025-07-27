/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // Sort both arrays in ascending order
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let gi = 0;  // index for children
    let si = 0;  // index for cookies

    while (gi < g.length && si < s.length) {
        if (s[si] >= g[gi]) {
            // This cookie can satisfy this child
            gi++;
        }
        // Move to next cookie, always
        si++;
    }
    return gi; // gi is the number of content children
};