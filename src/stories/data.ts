import { CustomerDto } from "../models/CustomerDto";
import { ProductDto } from "../models/ProductDto";

export const customers: CustomerDto[] = [
    { id: 1, name: "adam" },
    { id: 2, name: "barry" },
    { id: 3, name: "chigo" },
    { id: 4, name: "dingo" },
    { id: 5, name: "elphante" },
  ];
  
  export const products: ProductDto[] = [
    {
      id: 1,
      name: "apples",
      productionCost: 100,
      salePrice: 200,
    },
    {
      id: 2,
      name: "bananas",
      productionCost: 300,
      salePrice: 450,
    },
    {
      id: 3,
      name: "cherries",
      productionCost: 625,
      salePrice: 730,
    },
  ];
  