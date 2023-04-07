export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'topDown' : IDL.Func([IDL.Nat], [], ['oneway']),
    'topUp' : IDL.Func([IDL.Nat], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
