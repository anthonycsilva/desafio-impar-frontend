import { createContext } from "react";
import { ICar } from "../interfaces/ICar";

const CarsContext = createContext<ICar | any>({});

export default CarsContext;