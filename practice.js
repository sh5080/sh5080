const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n');

const [N, M] = input[0].trim().split(' ').map(Number);

// 행렬 A 입력 받기
let matrix_A = [];
for (let i = 1; i <= N; i++) {
  matrix_A.push(input[i].trim().split(' ').map(Number));
}

// 행렬 B 입력 받기
let matrix_B = [];
for (let i = N + 1; i <= 2 * N; i++) {
  matrix_B.push(input[i].trim().split(' ').map(Number));
}

// 행렬의 합 계산
let matrix_sum = [];
for (let i = 0; i < N; i++) {
  let row_sum = [];
  for (let j = 0; j < M; j++) {
    let element_sum = matrix_A[i][j] + matrix_B[i][j];
    row_sum.push(element_sum);
  }
  matrix_sum.push(row_sum);
}

// 결과 출력
for (let i = 0; i < N; i++) {
  console.log(matrix_sum[i].join(' '));
}
