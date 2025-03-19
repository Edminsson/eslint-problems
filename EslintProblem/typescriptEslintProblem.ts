export class Nada {
  hopp() {
    //no-unused-var
    const x = 0;
  }

  skriv() {
    // no-explicit-any
    const anyValue: any = 3;
    console.log(anyValue);
  }
}