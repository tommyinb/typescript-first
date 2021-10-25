export interface Abc {
  a: string;
  b: number;
}

const abc: Abc = {
  a: "abc",
  b: 123,
};

console.log(`${abc.a}${abc.b}`);
