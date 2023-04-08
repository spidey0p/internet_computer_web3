import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
actor {
  var currentvalue : Nat = 300;
  currentvalue := 100;
  let id = 3283927938723; //create a constant.

  //function to add or topup any amoount
  public func topUp(amount : Nat) {
    currentvalue += amount;
    Debug.print(debug_show (currentvalue));
  };

  //topUp();
  //run this command in the terminal to acess any of public function:
  //dfx canister call dbank topUp

  //For withdraw wishing amount of tooken
  public func topDown(amount : Nat) {
    let tempValue : Int = currentvalue - amount;
    if (tempValue >= 0) {
      currentvalue -= amount;
      Debug.print(debug_show (currentvalue));
    } else {
      Debug.print("Amount is exceded to your wishing amount!");
    };
  };

};
