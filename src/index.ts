interface Abc {
  a: string;
  b: number;
}

const abc: Abc = {
  a: "start with TypeScript",
  b: 123,
};

console.log(`${abc.a} ${abc.b}`);
