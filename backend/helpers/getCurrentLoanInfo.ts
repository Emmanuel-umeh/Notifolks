import { indexerClient} from "../config"
import { getLoanInfo , TestnetTokenPairsKey,TestnetTokenPairs,TestnetOracle } from "../src"


export const getCurrentLoanInfo =async (escrowAddr:string,tokenPairKey:TestnetTokenPairsKey) => {

    const oracle = TestnetOracle;
    const tokenPair = TestnetTokenPairs[tokenPairKey];

    // return loan
    return await getLoanInfo(indexerClient,tokenPair,oracle,escrowAddr)
}
