class ScoreCalculator {
  medianIncomeScores = [
    { score: 0.5, percentageInterval: 10 },
    { score: 1.0, percentageInterval: 10 },
    { score: 1.5, percentageInterval: 10 },
    { score: 2.0, percentageInterval: 10 },
    { score: 2.5, percentageInterval: 10 },
    { score: 3.0, percentageInterval: 10 },
    { score: 3.5, percentageInterval: 10 },
    { score: 4.0, percentageInterval: 10 },
    { score: 4.5, percentageInterval: 10 },
    { score: 5.0, percentageInterval: 5 },
    { score: 5.1, percentageInterval: 5 },
    { score: 5.2, percentageInterval: 5 },
    { score: 5.3, percentageInterval: 5 },
    { score: 5.4, percentageInterval: 5 },
    { score: 5.5, percentageInterval: 5 },
    { score: 5.6, percentageInterval: 5 },
    { score: 5.7, percentageInterval: 5 },
    { score: 5.8, percentageInterval: 5 },
    { score: 5.9, percentageInterval: 5 },
    { score: 6.0, percentageInterval: 5 },
    { score: 6.1, percentageInterval: 5 },
    { score: 6.2, percentageInterval: 5 },
    { score: 6.3, percentageInterval: 5 },
    { score: 6.4, percentageInterval: 5 },
    { score: 6.5, percentageInterval: 5 },
    { score: 6.6, percentageInterval: 5 },
    { score: 6.7, percentageInterval: 5 },
    { score: 6.8, percentageInterval: 5 },
    { score: 6.9, percentageInterval: 5 },
    { score: 7.0, percentageInterval: 5 },
    { score: 7.1, percentageInterval: 5 },
    { score: 7.2, percentageInterval: 5 },
    { score: 7.3, percentageInterval: 5 },
    { score: 7.4, percentageInterval: 5 },
    { score: 7.5, percentageInterval: 5 },
    { score: 7.6, percentageInterval: 5 },
    { score: 7.7, percentageInterval: 5 },
    { score: 7.8, percentageInterval: 5 },
    { score: 7.9, percentageInterval: 5 },
    { score: 8.0, percentageInterval: 10 },
    { score: 8.1, percentageInterval: 10 },
    { score: 8.2, percentageInterval: 10 },
    { score: 8.3, percentageInterval: 10 },
    { score: 8.4, percentageInterval: 10 },
    { score: 8.5, percentageInterval: 10 },
    { score: 8.6, percentageInterval: 10 },
    { score: 8.7, percentageInterval: 10 },
    { score: 8.8, percentageInterval: 10 },
    { score: 8.9, percentageInterval: 10 },
    { score: 9.0, percentageInterval: 10 },
    { score: 9.01, percentageInterval: 10 },
    { score: 9.02, percentageInterval: 10 },
    { score: 9.03, percentageInterval: 10 },
    { score: 9.04, percentageInterval: 10 },
    { score: 9.05, percentageInterval: 10 },
    { score: 9.06, percentageInterval: 10 },
    { score: 9.07, percentageInterval: 10 },
    { score: 9.08, percentageInterval: 10 },
    { score: 9.09, percentageInterval: 10 },
    { score: 9.1, percentageInterval: 10 },
    { score: 9.11, percentageInterval: 10 },
    { score: 9.12, percentageInterval: 10 },
    { score: 9.13, percentageInterval: 10 },
    { score: 9.14, percentageInterval: 10 },
    { score: 9.15, percentageInterval: 10 },
    { score: 9.16, percentageInterval: 10 },
    { score: 9.17, percentageInterval: 10 },
    { score: 9.18, percentageInterval: 10 },
    { score: 9.19, percentageInterval: 10 },
    { score: 9.2, percentageInterval: 10 },
    { score: 9.21, percentageInterval: 10 },
    { score: 9.22, percentageInterval: 10 },
    { score: 9.23, percentageInterval: 10 },
    { score: 9.24, percentageInterval: 10 },
    { score: 9.25, percentageInterval: 10 },
    { score: 9.26, percentageInterval: 10 },
    { score: 9.27, percentageInterval: 10 },
    { score: 9.28, percentageInterval: 10 },
    { score: 9.29, percentageInterval: 10 },
    { score: 9.3, percentageInterval: 10 },
    { score: 9.31, percentageInterval: 10 },
    { score: 9.32, percentageInterval: 10 },
    { score: 9.33, percentageInterval: 10 },
    { score: 9.34, percentageInterval: 10 },
    { score: 9.35, percentageInterval: 10 },
    { score: 9.36, percentageInterval: 10 },
    { score: 9.37, percentageInterval: 10 },
    { score: 9.38, percentageInterval: 10 },
    { score: 9.39, percentageInterval: 10 },
    { score: 9.4, percentageInterval: 10 },
    { score: 9.41, percentageInterval: 10 },
    { score: 9.42, percentageInterval: 10 },
    { score: 9.43, percentageInterval: 10 },
    { score: 9.44, percentageInterval: 10 },
    { score: 9.45, percentageInterval: 10 },
    { score: 9.46, percentageInterval: 10 },
    { score: 9.47, percentageInterval: 10 },
    { score: 9.48, percentageInterval: 10 },
    { score: 9.49, percentageInterval: 10 },
    { score: 9.5, percentageInterval: 50 },
    { score: 9.51, percentageInterval: 50 },
    { score: 9.52, percentageInterval: 50 },
    { score: 9.53, percentageInterval: 50 },
    { score: 9.54, percentageInterval: 50 },
    { score: 9.55, percentageInterval: 50 },
    { score: 9.56, percentageInterval: 50 },
    { score: 9.57, percentageInterval: 50 },
    { score: 9.58, percentageInterval: 50 },
    { score: 9.59, percentageInterval: 50 },
    { score: 9.6, percentageInterval: 50 },
    { score: 9.61, percentageInterval: 50 },
    { score: 9.62, percentageInterval: 50 },
    { score: 9.63, percentageInterval: 50 },
    { score: 9.64, percentageInterval: 50 },
    { score: 9.65, percentageInterval: 50 },
    { score: 9.66, percentageInterval: 50 },
    { score: 9.67, percentageInterval: 50 },
    { score: 9.68, percentageInterval: 50 },
    { score: 9.69, percentageInterval: 50 },
    { score: 9.7, percentageInterval: 70 },
    { score: 9.71, percentageInterval: 70 },
    { score: 9.72, percentageInterval: 70 },
    { score: 9.73, percentageInterval: 70 },
    { score: 9.74, percentageInterval: 70 },
    { score: 9.75, percentageInterval: 70 },
    { score: 9.76, percentageInterval: 70 },
    { score: 9.77, percentageInterval: 70 },
    { score: 9.78, percentageInterval: 70 },
    { score: 9.79, percentageInterval: 70 },
    { score: 9.8, percentageInterval: 70 },
    { score: 9.81, percentageInterval: 70 },
    { score: 9.82, percentageInterval: 70 },
    { score: 9.83, percentageInterval: 70 },
    { score: 9.84, percentageInterval: 70 },
    { score: 9.85, percentageInterval: 70 },
    { score: 9.86, percentageInterval: 70 },
    { score: 9.87, percentageInterval: 70 },
    { score: 9.88, percentageInterval: 70 },
    { score: 9.89, percentageInterval: 70 },
    { score: 9.9, percentageInterval: 70 },
    { score: 9.91, percentageInterval: 70 },
    { score: 9.92, percentageInterval: 70 },
    { score: 9.93, percentageInterval: 70 },
    { score: 9.94, percentageInterval: 70 },
    { score: 9.95, percentageInterval: 70 },
    { score: 9.96, percentageInterval: 70 },
    { score: 9.97, percentageInterval: 70 },
    { score: 9.98, percentageInterval: 70 },
    { score: 9.99, percentageInterval: 70 },
    { score: 10.0, percentageInterval: 70 },
  ];
  constructor() {
    this.setPercentageRanges();
  }
  setPercentageRanges() {
    let cumulativePercentage = 0;
    for (const medianIncomeScore of this.medianIncomeScores) {
      cumulativePercentage += medianIncomeScore.percentageInterval;
    }
  }

  // 연소득을 중위소득 백분위로 변환하는 함수
  annualIncomeToPercentage(annualIncome) {
    const baseIncome = 2674134; // 가장 하위 구간의 최대 값
    const percentageIncrement = 10; // 기본 백분위 간격
    let percentage = 0;
    let currentIncome = 0; // 초기 소득은 0으로 설정

    for (const medianIncomeScore of this.medianIncomeScores) {
      const intervalIncome =
        baseIncome *
        (medianIncomeScore.percentageInterval / percentageIncrement);
      if (annualIncome <= currentIncome + intervalIncome) {
        const additionalPercentage =
          ((annualIncome - currentIncome) / intervalIncome) *
          medianIncomeScore.percentageInterval;
        return percentage + additionalPercentage;
      }
      currentIncome += intervalIncome;
      percentage += medianIncomeScore.percentageInterval;
    }

    return percentage;
  }

  // 백분위를 기준으로 점수를 계산하는 함수
  salary(annualIncome) {
    const percentage = this.annualIncomeToPercentage(annualIncome);
    let cumulativePercentage = 0;

    for (const medianIncomeScore of this.medianIncomeScores) {
      cumulativePercentage += medianIncomeScore.percentageInterval;
      if (percentage <= cumulativePercentage) {
        return medianIncomeScore.score;
      }
    }

    return 0; // 해당하는 구간이 없으면 0점 반환
  }
}

// 사용 예제
const calculator = new ScoreCalculator();
const myAnnualIncome = 850374613; // 연소득 예제 값 //227301391 9.5 나오는 문제 있음.
const myScore = calculator.salary(myAnnualIncome);
console.log(`${myAnnualIncome}: ${myScore}점입니다.`);
