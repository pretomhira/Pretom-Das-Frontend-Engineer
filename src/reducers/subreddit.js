const subredditReducers = (state = "test", action) => {
  switch (action.type) {
    case "ReactJs":
      return "reactjs";
    case "Frontend":
      return (state = "frontend");
    case "WebDev":
      return (state = "webdev");
    case "JavaScript":
      return (state = "javascript");
    case "Open_source":
      return (state = "opensource");
    case "Programming":
      return (state = "programming");
    case "Learn_JavaScript":
      return (state = "learnjavascript");
    default:
      return state;
  }
};
export default subredditReducers;
