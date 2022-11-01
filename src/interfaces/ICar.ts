import { IPhoto } from "./IPhoto";

export interface ICar {
  id: number;
  photo: File | undefined;
  name: string;
  status: string;
}
