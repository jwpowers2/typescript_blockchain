const INITIAL_DIFFICULTY = 3;

const GENESIS_DATA = {
  timestamp: 1,
  data: "",
  hash: "hash-one",
  difficulty: INITIAL_DIFFICULTY,
  nonce: 0,
  lastHash: "-----",
  next: null
};

module.exports = { GENESIS_DATA };
