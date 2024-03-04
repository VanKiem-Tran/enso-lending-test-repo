import { PublicKey, Transaction } from '@solana/web3.js'
import base58 from 'bs58'
import * as anchor from '@coral-xyz/anchor';

export const confirm = async (
	connection: anchor.web3.Connection,
	signature: string
): Promise<string> => {
	const block = await connection.getLatestBlockhash();
	await connection.confirmTransaction({
		signature,
		...block,
	});
	return signature;
};

export const log = async (
	connection: anchor.web3.Connection,
	signature: string
): Promise<string> => {
	console.log(
		`Your transaction signature: https://explorer.solana.com/transaction/${signature}?cluster=custom&customUrl=${connection.rpcEndpoint}`
	);
	return signature;
};

export const getAmountDifference = (
	beforeAmount: number,
	afterAmount: number
): number => {
	return afterAmount - beforeAmount;
};

export const generateId = (length: number): string => {
	let result = '';
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	let counter = 0;
	while (counter < length) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}
	return result;
};

export function getExplorerUrl(
    endpoint: string,
    viewTypeOrItemAddress: 'inspector' | PublicKey | string,
    itemType = 'address' // | 'tx' | 'block'
  ) {
    const getClusterUrlParam = () => {
      let cluster = ''
      if (endpoint === 'localnet') {
        cluster = `custom&customUrl=${encodeURIComponent(
          'http://127.0.0.1:8899'
        )}`
      } else if (endpoint === 'https://api.devnet.solana.com') {
        cluster = 'devnet'
      }
  
      return cluster ? `?cluster=${cluster}` : ''
    }
  
    return `https://explorer.solana.com/${itemType}/${viewTypeOrItemAddress}${getClusterUrlParam()}`
  }