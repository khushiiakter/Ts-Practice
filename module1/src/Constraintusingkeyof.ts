// Constraint using key of

{
  type Vehicles = {
    bike: string;
    car: string;
    ship: string;
  };
  type Owner = "bike" | "car" | "ship";

  // key of operator use kore

  type Owner2 = keyof Vehicles;

  const person1 :Owner = "car";
  const person2:Owner2= "car";

  //ami akta object and key pathabo, then oi key er value oi object theke dekhate hobe.

  const getPropertyValue =<X, Y extends keyof X>(obj: X, key: Y )=>{
    return obj[key];

   
  };

  const user={
    name: "khushi",
    roll: 1,
    age: 22,
  }

const result = getPropertyValue(user, "roll")

console.log(result);











}
