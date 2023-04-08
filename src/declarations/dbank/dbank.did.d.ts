import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'checkBalance' : () => Promise<bigint>,
  'topDown' : (arg_0: bigint) => Promise<undefined>,
  'topUp' : (arg_0: bigint) => Promise<undefined>,
}
