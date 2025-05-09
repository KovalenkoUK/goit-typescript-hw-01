function merge<T, A>(objA: T, objB: A): T & A {
    return Object.assign({}, objA, objB);
  }