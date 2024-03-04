import { useWallet } from '@solana/wallet-adapter-react';
import { FC } from 'react';
import { Program, AnchorProvider, web3, utils, BN } from '@project-serum/anchor'
import { EnsoLending } from '../idl/enso_lending';
import idl from '../idl/enso_lending.json';
import {
  clusterApiUrl,
  Connection,
	Keypair,
	PublicKey,
	sendAndConfirmTransaction,
	SystemProgram,
  Transaction
} from '@solana/web3.js';

const idl_string = JSON.stringify(idl);
const idl_obj = JSON.parse(idl_string);

export const SignMessage: FC = () => {
  const ourWallet = useWallet();
  const systemAccount = Keypair.fromSecretKey(
		Uint8Array.from([
			70, 224, 61, 154, 54, 252, 229, 243, 14, 140, 229, 12, 152, 220, 123, 254,
			160, 164, 44, 131, 155, 20, 10, 108, 71, 159, 52, 200, 0, 195, 70, 196,
			55, 241, 189, 60, 16, 218, 175, 228, 209, 161, 98, 24, 156, 247, 94, 213,
			185, 178, 35, 219, 110, 4, 218, 61, 156, 48, 136, 242, 160, 191, 140, 211,
		])
	);

  const programId = new PublicKey(
		'4z4kmGW4AcmBoyeGobKDXXTRizSSuzXLroX6zjkyeYA1'
	);
  const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

  const getProvider = () => {
		const provider = new AnchorProvider(
			connection,
			ourWallet,
			AnchorProvider.defaultOptions()
		);

		return provider;
	};

  const provider = getProvider();

  const program = new Program<EnsoLending>(idl_obj, programId, provider);

  const mintSolWrappedAccount = new PublicKey(
		'So11111111111111111111111111111111111111112'
	);

  const initSettingAccount = async () => {
    console.log(mintSolWrappedAccount);
    try {
      const amount = 200;
      const duration = 14;
      const tierId = "1234_tier_124y28y1294y12";
      const lenderFeePercent = 0.01;

      const seedSettingAccount = [
        Buffer.from("enso"),
        Buffer.from("setting_account"),
        Buffer.from(tierId),
        program.programId.toBuffer(),
      ];

      const settingAccount = PublicKey.findProgramAddressSync(
        seedSettingAccount,
        program.programId
      )[0];

      console.log(settingAccount.toString());

      const transaction = await program.methods
        .initSettingAccount(
          tierId,
          new BN(amount),
          new BN(duration),
          lenderFeePercent
        )
        .accounts({
          owner: systemAccount.publicKey,
          receiver: systemAccount.publicKey,
          settingAccount,
          lendMintAsset: mintSolWrappedAccount,
          collateralMintAsset: mintSolWrappedAccount,
          systemProgram: SystemProgram.programId,
        })
        .transaction();

      await sendAndConfirmTransaction(connection, transaction, [systemAccount]).then(
        async () => {
          const data = await program.account.settingAccount.fetch(settingAccount);
          console.log(data);
        }
      );
    } catch (error) {
        console.log(error);
    }
  }

    return (
        <div className="flex flex-row justify-center">
            <div className="relative group items-center">
                <div className="m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 
                rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button
                    className="group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
                    onClick={initSettingAccount}
                >
                    <div className="hidden group-disabled:block">
                        Wallet not connected
                    </div>
                    <span className="block group-disabled:hidden" > 
                        Sign Message 
                    </span>
                </button>
            </div>
        </div>
    );
};
