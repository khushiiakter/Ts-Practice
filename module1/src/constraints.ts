{

    // constraints 
  const addCourseToStudent = <
    T extends { name: string; roll: number; email: string } //extend kore bollam , ai 3 ta thaktei hobe. atai holo --> constraints
  >(
    student: T
  ) => {
    const nextLevel = "Next level web development";
    return {
      ...student,
      nextLevel,
    };
  };
  // type Student ={
  //     name:string;
  //     roll:number;
  // };
  const student1 = addCourseToStudent({
    name: "khushi",
    roll: 33,
    email: "khusi@gmail.com",
  });
  const student2 = addCourseToStudent({
    name: "khushiafdfdf",
    roll: 33,
    email:"fjkd@gmail.com",
    emni: "kdjfkfj",
  });

  console.log(student1, student2);
}
