import performTests from "./performTests";

const config = "samples/fablo-config-hlf2-1org-1chaincode-k8s.json";

describe(config, () => {
  performTests(config);
});
