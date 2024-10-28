import { createContext, useState } from "react";
import data from "../assets/data";

export const menuContext = createContext();

export default function MenuProvider({ children }) {
  const [menu, setMenu] = useState(data.menu);

  return (
    <menuContext.Provider value={{ menu }}>{children}</menuContext.Provider>
  );
}
