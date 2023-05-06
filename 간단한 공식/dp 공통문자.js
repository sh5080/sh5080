// 공통되는 문자 중 가장 긴 수열 LCSS 
function getLongestCommonSubstring(X, Y) {
    let m = X.length;
    let n = Y.length;
    let LCS = new Array(m + 1);

    for (let i = 0; i <= m; i++) {
        LCS[i] = new Array(n + 1);
        for (let j = 0; j <= n; j++) {
            if (i == 0 || j == 0) {
                LCS[i][j] = 0;
            } else if (X[i - 1] == Y[j - 1]) {
                LCS[i][j] = LCS[i - 1][j - 1] + 1;
            } else {
                LCS[i][j] = 0;
            }
        }
    }

    let maxLength = 0;
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (LCS[i][j] > maxLength) {
                maxLength = LCS[i][j];
            }
        }
    }

    return maxLength;
}

let longestCommonSubstringLength = getLongestCommonSubstring("ABCFIHH", "ABCGYHH");
console.log(longestCommonSubstringLength); // 2 출력
