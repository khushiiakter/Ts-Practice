{
  //generic

  type GenericArray<T> = Array<T>; // i said to make array with that type someone give.

  const rolls: GenericArray<number> = [1, 3, 44, 5];
  const mentors: GenericArray<string> = ["dkjfkj", "kduffk"];

  type User = { name: string; roll: number; isHuman: boolean };

  const users1: GenericArray<User> = [
    {
      name: "khushi",
      roll: 48,
      isHuman: true,
    },
    {
      name: "tushi",
      roll: 48,
      isHuman: false,
    },
  ];
  const users2: GenericArray<{ name: string; roll: number; isHuman: boolean }> =
    [
      {
        name: "khushi",
        roll: 48,
        isHuman: true,
      },
      {
        name: "tushi",
        roll: 48,
        isHuman: true,
      },
    ];

  // generic array tuple

  type GenericArrayTuple<X, Y,Z> = [X, Y, Z];

  const userTuple: GenericArrayTuple<number, string, {isAdmin:boolean}> = [222, "Tom",{
    isAdmin:false,
  }];

  console.log(userTuple);
}
