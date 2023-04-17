import { createContext } from "react";

const TestContext = createContext({
  user: "",
  setUser: () => {},
});

export default TestContext;
