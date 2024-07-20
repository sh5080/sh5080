const { Web3 } = require("web3");
const mysql2 = require("mysql2/promise");

// Infura 프로젝트 ID를 사용하여 Web3 인스턴스 생성
// 메일에 적힌 API KEY 사용
const api = "";
const provider = `https://sepolia.infura.io/v3/${api}`;
const web3Provider = new Web3.providers.HttpProvider(provider);

const web3 = new Web3(web3Provider);

web3.eth.getBlockNumber().then((result) => {
  console.log("Latest Ethereum Block is ", result);
});
// 메일에 적힌 주소 사용
const contractAddress = "";
const abi = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "from", type: "address" },
      { indexed: true, name: "to", type: "address" },
      { indexed: true, name: "tokenId", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
  },
];

// // MySQL 데이터베이스 설정
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "tmdghks1!@",
  database: "hero_db",
};

// // 데이터베이스 연결 함수
async function connectToDatabase() {
  const connection = await mysql2.createConnection(dbConfig);
  console.log("Connected to MySQL database");
  return connection;
}

// // Transfer 이벤트 추적 함수
async function trackTransferEvents(connection) {
  const contract = new web3.eth.Contract(abi, contractAddress);

  contract.events
    .Transfer({
      fromBlock: 4267474,
    })
    .on("data", (event) => {
      console.log(">>>>", event);
      const { from, to, tokenId } = event.returnValues;
      console.log(
        `Transfer event detected: from ${from} to ${to} for token_id ${tokenId}`
      );

      // MySQL에 소유자 정보 저장
      const query =
        "INSERT INTO token_owners (token_id, owner_address) VALUES (?, ?) ON DUPLICATE KEY UPDATE owner_address = ?";
      const values = [tokenId, to, to];

      connection.query(query, values, (err, results) => {
        if (err) throw err;
        console.log(`Token ID ${tokenId} ownership updated to ${to}`);
      });
    });
}

// // 메인 함수
async function main() {
  const connection = await connectToDatabase();
  await trackTransferEvents(connection);
}

main().catch(console.error);
