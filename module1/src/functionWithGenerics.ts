// function with generic

const createArray = (param: string): string[] => {
  return [param];
};
const createArrayWithGeneric = <T>(param: T): T[] => {
  //generic
  return [param];
};
const res1 = createArray("bangladesh");
const res2 = createArrayWithGeneric<number>(3434); //generic

const res3 = createArrayWithGeneric<{ id: number; name: string }>({
  // because i sent an object, in the param i have to send an object type params
  id: 333,
  name: "khushi",
});
//generic er moddhe object er type ta send kore
type User = {
  id: number;
  name: string;
};

const res4 = createArrayWithGeneric<User>({
  // because i sent an object, in the param i have to send an object type params
  id: 333,
  name: "khushi",
});

//create generic with tuple

const createArrayWithGenericTuple = <T, Y>(param1: T, param2: Y): [T, Y] => {
  //generic
  return [param1, param2];
};
const res11 = createArrayWithGenericTuple<string, number>("bangladesh", 344);
const res12 = createArrayWithGeneric<number>(3434); //generic

const res13 = createArrayWithGeneric<{ id: number; name: string }>({
  id: 333,
  name: "khushi",
});
//generic er moddhe object er type ta send kore
type User1 = {
  id: number;
  name: string;
};

// type User2={
//     isAdmin: boolean;

// }

// because i sent an object, in the param i have to send an object type params
const res14 = createArrayWithGenericTuple<User1, boolean>(
  {
    id: 333,
    name: "khushi",
  },
  false,
);

// console.log(res14);

const addCourseToStudent =<T>(student: T)=>{
    const nextLevel = "Next level web development"
    return{
        ...student, nextLevel
    }
}
type Student ={
    name:string;
    roll:number;
};
const student1 =addCourseToStudent<Student>({
    name:"khushi",
    roll: 33,
});
const student2 =addCourseToStudent<Student>({
    name:"khushiafdfdf",
    roll: 33,
});

console.log(student1, student2);