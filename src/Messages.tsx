function Message() {
  const name = "Chinepoh";
  if (name)
    // return if name is truthy
    return <h1>Hello {name}!</h1>;
  else return <h1>Hello World!</h1>;
}

export default Message;
