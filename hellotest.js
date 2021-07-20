describe('the function `hello`', () => {
  it('says hello', () => {
    expect(hello()).toEqual('Hello!');
  });

  it('says hello to someone', () => {
    expect(hello('Fred')).toEqual('Hello, Fred!');
  });
});
