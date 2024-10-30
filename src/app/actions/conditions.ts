import { defineChain, getContract } from "thirdweb";
import { avalancheFuji } from "thirdweb/chains";
import { client } from "../client";
import { balanceOf as balanceOfERC721 } from "thirdweb/extensions/erc721";
import { balanceOf as balanceOfERC20 } from "thirdweb/extensions/erc20";

export async function hasAccess(address: string): Promise<boolean> {
  return await example_hasSomeErc721Tokens(address);
  // return await example_hasSomeErc20Tokens(address);
}



async function example_hasSomeErc721Tokens(address: string) {
  const requiredQuantity = 1n;

  const erc721Contract = getContract({
    // address: "0x7F712dd4aDC8B17C52b812F3c8b6804CE5504630", //neochain
    address: "0xf4D756E38CB255a7124eFe2c2837cE29ad0E828D", //aiachain

    chain: defineChain(1320),

    client: client,
  });

  const ownedBalance = await balanceOfERC721({
    contract: erc721Contract,
    owner: address,
  });

  console.log({ ownedBalance });

  return ownedBalance >= requiredQuantity;
}

async function example_hasSomeErc20Tokens(address: string) {
  const requiredQuantity = 10n; // 10 erc20 token

  const erc20Contract = getContract({
    // replace with your own erc20 contract address
    address: "0x28B8B9812aA558e94a9B2971529c02BD589FeAfD", //neo x chain

    // replace with the chain that your erc20 contract was deployed on
    // if that chain isn't included in our default list, use `defineChain`
    chain: avalancheFuji,

    client,
  });

  const ownedBalance = await balanceOfERC20({
    contract: erc20Contract,
    address,
  });

  console.log({ ownedBalance });

  return ownedBalance >= requiredQuantity;
}