export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'checkBalance' : IDL.Func([], [IDL.Float64], ['query']),
    'compund' : IDL.Func([], [], ['oneway']),
    'topDown' : IDL.Func([IDL.Float64], [], ['oneway']),
    'topUp' : IDL.Func([IDL.Float64], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
