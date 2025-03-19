// Dessa fel visas när tseslint.configs.stylistic körs
interface Foo {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void;
  //Den här deklarationen genererar varning adjacent-overload-signatures
  foo(sn: string | number): void;
}

export class EslintStylistics {
  Fejk: Foo | null = null;

  // no-empty-function
  hejsan() {}

  skriv() {
    //en regel jag själv lagt till "array-bracket-spacing" : "error"
    const arris = [ 1, 3, 5];
    console.log(arris);
  }

  loopa() {
    const array: string[] = [];

    // prefer-for-of
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }    
  }
}