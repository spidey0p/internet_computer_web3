import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

import Nat "mo:base/Nat";
actor DBank {
  stable var currentvalue : Float = 300;
  currentvalue := 100;
  Debug.print(debug_show (currentvalue));

  //let id = 3283927938723; //create a constant.

  stable var startTime = Time.now();
  startTime := Time.now();
  Debug.print(debug_show (startTime));

  //function to add or topup any amoount
  public func topUp(amount : Float) {
    currentvalue += amount;
    Debug.print(debug_show (currentvalue));
  };

  //topUp();
  //run this command in the terminal to acess any of public function:
  //dfx canister call dbank topUp

  //For withdraw wishing amount of tooken
  public func withdraw(amount : Float) {
    let tempValue : Float = currentvalue - amount;
    if (tempValue >= 0) {
      currentvalue -= amount;
      Debug.print(debug_show (currentvalue));
    } else {
      Debug.print("Amount is exceded to your wishing amount!");
    };
  };

  //query functon.
  public query func checkBalance() : async Float {
    return currentvalue;
  };

  public func compund() {
    let currentTime = Time.now();
    let timeElapsedNS = currentTime - startTime;
    let timeElapsedS = timeElapsedNS / 1000000000;
    currentvalue := currentvalue * (1.01 ** Float.fromInt(timeElapsedS));
    startTime := currentTime;
  };

};
