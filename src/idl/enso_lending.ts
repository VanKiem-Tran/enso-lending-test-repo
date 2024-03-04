export type EnsoLending = {
	version: '0.1.0';
	name: 'enso_lending';
	instructions: [
		{
			name: 'initSettingAccount';
			accounts: [
				{
					name: 'owner';
					isMut: true;
					isSigner: true;
				},
				{
					name: 'receiver';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'lendMintAsset';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'collateralMintAsset';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'settingAccount';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'systemProgram';
					isMut: false;
					isSigner: false;
				}
			];
			args: [
				{
					name: 'tierId';
					type: 'string';
				},
				{
					name: 'amount';
					type: 'u64';
				},
				{
					name: 'duration';
					type: 'u64';
				},
				{
					name: 'lenderFeePercent';
					type: 'f64';
				}
			];
		},
		{
			name: 'editSettingAccount';
			accounts: [
				{
					name: 'owner';
					isMut: true;
					isSigner: true;
				},
				{
					name: 'receiver';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'lendMintAsset';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'collateralMintAsset';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'settingAccount';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'systemProgram';
					isMut: false;
					isSigner: false;
				}
			];
			args: [
				{
					name: 'tierId';
					type: 'string';
				},
				{
					name: 'amount';
					type: {
						option: 'u64';
					};
				},
				{
					name: 'duration';
					type: {
						option: 'u64';
					};
				},
				{
					name: 'lenderFeePercent';
					type: {
						option: 'f64';
					};
				}
			];
		},
		{
			name: 'closeSettingAccount';
			accounts: [
				{
					name: 'owner';
					isMut: true;
					isSigner: true;
				},
				{
					name: 'settingAccount';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'systemProgram';
					isMut: false;
					isSigner: false;
				}
			];
			args: [
				{
					name: 'tierId';
					type: 'string';
				}
			];
		},
		{
			name: 'createLendOffer';
			accounts: [
				{
					name: 'lender';
					isMut: true;
					isSigner: true;
				},
				{
					name: 'mintAsset';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'lenderAtaAsset';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'settingAccount';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'lendOffer';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'hotWalletAta';
					isMut: true;
					isSigner: false;
				},
				{
					name: 'tokenProgram';
					isMut: false;
					isSigner: false;
				},
				{
					name: 'systemProgram';
					isMut: false;
					isSigner: false;
				}
			];
			args: [
				{
					name: 'offerId';
					type: 'string';
				},
				{
					name: 'tierId';
					type: 'string';
				},
				{
					name: 'interest';
					type: 'f64';
				}
			];
		}
	];
	accounts: [
		{
			name: 'lendOfferAccount';
			type: {
				kind: 'struct';
				fields: [
					{
						name: 'interest';
						type: 'f64';
					},
					{
						name: 'lenderFee';
						type: 'u64';
					},
					{
						name: 'duration';
						type: 'u64';
					},
					{
						name: 'offerId';
						type: 'string';
					},
					{
						name: 'lenderPubkey';
						type: 'publicKey';
					},
					{
						name: 'loanMintToken';
						type: 'publicKey';
					},
					{
						name: 'amount';
						type: 'u64';
					},
					{
						name: 'bump';
						type: 'u8';
					},
					{
						name: 'status';
						type: {
							defined: 'LendOfferStatus';
						};
					}
				];
			};
		},
		{
			name: 'settingAccount';
			type: {
				kind: 'struct';
				fields: [
					{
						name: 'amount';
						type: 'u64';
					},
					{
						name: 'duration';
						type: 'u64';
					},
					{
						name: 'owner';
						type: 'publicKey';
					},
					{
						name: 'receiver';
						type: 'publicKey';
					},
					{
						name: 'lendMintAsset';
						type: 'publicKey';
					},
					{
						name: 'collateralMintAsset';
						type: 'publicKey';
					},
					{
						name: 'tierId';
						type: 'string';
					},
					{
						name: 'lenderFeePercent';
						type: 'f64';
					},
					{
						name: 'bump';
						type: 'u8';
					}
				];
			};
		}
	];
	types: [
		{
			name: 'LendOfferStatus';
			type: {
				kind: 'enum';
				variants: [
					{
						name: 'Created';
					}
				];
			};
		},
		{
			name: 'LendOfferError';
			type: {
				kind: 'enum';
				variants: [
					{
						name: 'NotEnoughAmount';
					},
					{
						name: 'InvalidMintAsset';
					}
				];
			};
		}
	];
	events: [
		{
			name: 'InitSettingAccountEvent';
			fields: [
				{
					name: 'amount';
					type: 'u64';
					index: false;
				},
				{
					name: 'duration';
					type: 'u64';
					index: false;
				},
				{
					name: 'owner';
					type: 'publicKey';
					index: false;
				},
				{
					name: 'receiver';
					type: 'publicKey';
					index: false;
				},
				{
					name: 'lendMintAsset';
					type: 'publicKey';
					index: false;
				},
				{
					name: 'collateralMintAsset';
					type: 'publicKey';
					index: false;
				},
				{
					name: 'tierId';
					type: 'string';
					index: false;
				},
				{
					name: 'lenderFeePercent';
					type: 'f64';
					index: false;
				}
			];
		},
		{
			name: 'EditSettingAccountEvent';
			fields: [
				{
					name: 'receiver';
					type: 'publicKey';
					index: false;
				},
				{
					name: 'lendMintAsset';
					type: 'publicKey';
					index: false;
				},
				{
					name: 'collateralMintAsset';
					type: 'publicKey';
					index: false;
				},
				{
					name: 'tierId';
					type: 'string';
					index: false;
				},
				{
					name: 'amount';
					type: 'u64';
					index: false;
				},
				{
					name: 'duration';
					type: 'u64';
					index: false;
				},
				{
					name: 'lenderFeePercent';
					type: 'f64';
					index: false;
				}
			];
		},
		{
			name: 'CloseSettingAccountEvent';
			fields: [
				{
					name: 'tierId';
					type: 'string';
					index: false;
				}
			];
		},
		{
			name: 'CreateLendOfferEvent';
			fields: [
				{
					name: 'lender';
					type: 'publicKey';
					index: false;
				},
				{
					name: 'interest';
					type: 'f64';
					index: false;
				},
				{
					name: 'lenderFee';
					type: 'u64';
					index: false;
				},
				{
					name: 'duration';
					type: 'u64';
					index: false;
				},
				{
					name: 'amount';
					type: 'u64';
					index: false;
				},
				{
					name: 'offerId';
					type: 'string';
					index: false;
				},
				{
					name: 'tierId';
					type: 'string';
					index: false;
				}
			];
		}
	];
	errors: [
		{
			code: 6000;
			name: 'InvalidTierId';
			msg: 'Invalid tier id';
		}
	];
};

export const IDL: EnsoLending = {
	version: '0.1.0',
	name: 'enso_lending',
	instructions: [
		{
			name: 'initSettingAccount',
			accounts: [
				{
					name: 'owner',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'receiver',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'lendMintAsset',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'collateralMintAsset',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'settingAccount',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'systemProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: 'tierId',
					type: 'string',
				},
				{
					name: 'amount',
					type: 'u64',
				},
				{
					name: 'duration',
					type: 'u64',
				},
				{
					name: 'lenderFeePercent',
					type: 'f64',
				},
			],
		},
		{
			name: 'editSettingAccount',
			accounts: [
				{
					name: 'owner',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'receiver',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'lendMintAsset',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'collateralMintAsset',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'settingAccount',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'systemProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: 'tierId',
					type: 'string',
				},
				{
					name: 'amount',
					type: {
						option: 'u64',
					},
				},
				{
					name: 'duration',
					type: {
						option: 'u64',
					},
				},
				{
					name: 'lenderFeePercent',
					type: {
						option: 'f64',
					},
				},
			],
		},
		{
			name: 'closeSettingAccount',
			accounts: [
				{
					name: 'owner',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'settingAccount',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'systemProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: 'tierId',
					type: 'string',
				},
			],
		},
		{
			name: 'createLendOffer',
			accounts: [
				{
					name: 'lender',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'mintAsset',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'lenderAtaAsset',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'settingAccount',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'lendOffer',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'hotWalletAta',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'tokenProgram',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'systemProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: 'offerId',
					type: 'string',
				},
				{
					name: 'tierId',
					type: 'string',
				},
				{
					name: 'interest',
					type: 'f64',
				},
			],
		},
	],
	accounts: [
		{
			name: 'lendOfferAccount',
			type: {
				kind: 'struct',
				fields: [
					{
						name: 'interest',
						type: 'f64',
					},
					{
						name: 'lenderFee',
						type: 'u64',
					},
					{
						name: 'duration',
						type: 'u64',
					},
					{
						name: 'offerId',
						type: 'string',
					},
					{
						name: 'lenderPubkey',
						type: 'publicKey',
					},
					{
						name: 'loanMintToken',
						type: 'publicKey',
					},
					{
						name: 'amount',
						type: 'u64',
					},
					{
						name: 'bump',
						type: 'u8',
					},
					{
						name: 'status',
						type: {
							defined: 'LendOfferStatus',
						},
					},
				],
			},
		},
		{
			name: 'settingAccount',
			type: {
				kind: 'struct',
				fields: [
					{
						name: 'amount',
						type: 'u64',
					},
					{
						name: 'duration',
						type: 'u64',
					},
					{
						name: 'owner',
						type: 'publicKey',
					},
					{
						name: 'receiver',
						type: 'publicKey',
					},
					{
						name: 'lendMintAsset',
						type: 'publicKey',
					},
					{
						name: 'collateralMintAsset',
						type: 'publicKey',
					},
					{
						name: 'tierId',
						type: 'string',
					},
					{
						name: 'lenderFeePercent',
						type: 'f64',
					},
					{
						name: 'bump',
						type: 'u8',
					},
				],
			},
		},
	],
	types: [
		{
			name: 'LendOfferStatus',
			type: {
				kind: 'enum',
				variants: [
					{
						name: 'Created',
					},
				],
			},
		},
		{
			name: 'LendOfferError',
			type: {
				kind: 'enum',
				variants: [
					{
						name: 'NotEnoughAmount',
					},
					{
						name: 'InvalidMintAsset',
					},
				],
			},
		},
	],
	events: [
		{
			name: 'InitSettingAccountEvent',
			fields: [
				{
					name: 'amount',
					type: 'u64',
					index: false,
				},
				{
					name: 'duration',
					type: 'u64',
					index: false,
				},
				{
					name: 'owner',
					type: 'publicKey',
					index: false,
				},
				{
					name: 'receiver',
					type: 'publicKey',
					index: false,
				},
				{
					name: 'lendMintAsset',
					type: 'publicKey',
					index: false,
				},
				{
					name: 'collateralMintAsset',
					type: 'publicKey',
					index: false,
				},
				{
					name: 'tierId',
					type: 'string',
					index: false,
				},
				{
					name: 'lenderFeePercent',
					type: 'f64',
					index: false,
				},
			],
		},
		{
			name: 'EditSettingAccountEvent',
			fields: [
				{
					name: 'receiver',
					type: 'publicKey',
					index: false,
				},
				{
					name: 'lendMintAsset',
					type: 'publicKey',
					index: false,
				},
				{
					name: 'collateralMintAsset',
					type: 'publicKey',
					index: false,
				},
				{
					name: 'tierId',
					type: 'string',
					index: false,
				},
				{
					name: 'amount',
					type: 'u64',
					index: false,
				},
				{
					name: 'duration',
					type: 'u64',
					index: false,
				},
				{
					name: 'lenderFeePercent',
					type: 'f64',
					index: false,
				},
			],
		},
		{
			name: 'CloseSettingAccountEvent',
			fields: [
				{
					name: 'tierId',
					type: 'string',
					index: false,
				},
			],
		},
		{
			name: 'CreateLendOfferEvent',
			fields: [
				{
					name: 'lender',
					type: 'publicKey',
					index: false,
				},
				{
					name: 'interest',
					type: 'f64',
					index: false,
				},
				{
					name: 'lenderFee',
					type: 'u64',
					index: false,
				},
				{
					name: 'duration',
					type: 'u64',
					index: false,
				},
				{
					name: 'amount',
					type: 'u64',
					index: false,
				},
				{
					name: 'offerId',
					type: 'string',
					index: false,
				},
				{
					name: 'tierId',
					type: 'string',
					index: false,
				},
			],
		},
	],
	errors: [
		{
			code: 6000,
			name: 'InvalidTierId',
			msg: 'Invalid tier id',
		},
	],
};
