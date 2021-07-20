function helloworld(name) {
  if (typeof name === 'undefined') {
    return 'Hello!';
  } else {
    return `Hello, ${name}!`;
  }
}
