//ther are two ways to create components -> js classs or js functions
//>function based components

//PascalCasing-> capitalize the first letter of every word
function Message() {
  const name = "komal";
  //syntax used here is called JSX (JavaScript XML)
  return <h1>Hello {name}</h1>;
}

export default Message;
