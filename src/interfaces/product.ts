import { StaticImageData } from "next/image";

export interface ProductI {
    id?: number;
    image: StaticImageData;
    name: string;
    price: number;
}