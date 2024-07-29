require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
// require("hardhat-remix-analyzer");

const ALCHEMY_API = process.env.ALCHEMY_API
const EQ_PROVIDER = process.env.EQ_PROVIDER
const HMMM_PROVIDER = process.env.HMMM_PROVIDER
const FEATURE_EQ_PROVIDER = process.env.FEATURE_EQ_PROVIDER
const FEATURE_STO = process.env.FEATURE_STO
const STAGE = process.env.STAGE

const PRIVATE_KEYS = [
  process.env.PRIVATE_KEY1, // 0x2cC285279f6970d00F84f3034439ab8D29D04d97 
  process.env.PRIVATE_KEY2,  // 0x1e1864802DcF4A0527EF4315Da37D135f6D1B64B
  process.env.PRIVATE_KEY3, // 0x521D5d2d40C80BAe1fec2e75B76EC03eaB82b4E0
  process.env.PRIVATE_KEY4, // 0x7Fe8E2C4c732200C550457202126035bc6d7cf92,

  process.env.PRIVATE_KEY5, // 0x08801f4023e13A26167D23fE474404fE0A9105C0

  process.env.PRIVATE_KEY6, // 0xa733779F233d5e6BADd20D9f15b6c70a40299fc4

  process.env.PRIVATE_KEY7, // 0x444EEcdE39070e344514e3834Aac93d00a0fa933
]

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API}`,
      accounts: PRIVATE_KEYS
    },
    eqhubTest: {
      url: EQ_PROVIDER,
      accounts: PRIVATE_KEYS
    },
    hmmm: {
      url: HMMM_PROVIDER,
      accounts: PRIVATE_KEYS
    },
    feature: {
      url: FEATURE_EQ_PROVIDER,
      accounts: PRIVATE_KEYS
    },
    feature_sto: {
      url: FEATURE_STO,
      accounts: PRIVATE_KEYS
    },
    stage: {
      url: STAGE,
      accounts: PRIVATE_KEYS
    }
  },
  // remixAnalyzer: {
  //   // 보고서 파일 생성 경로 설정
  //   reportPath: "./reports",
  //   // 분석 도구 설정
  //   tools: {
  //     // Remix 내장 분석기 활성화
  //     remixAnalysis: true,
  //     // Solhint 활성화
  //     solhint: true,
  //     // Slither 활성화
  //     slither: true,
  //   },
  // },
};
