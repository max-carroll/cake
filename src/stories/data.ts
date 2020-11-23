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
      name: "apples",
      productionCost: 100,
      salePrice: 200,
    },
    {
      name: "bananas",
      productionCost: 300,
      salePrice: 450,
    },
    {
      name: "cherries",
      productionCost: 625,
      salePrice: 730,
    },
  ];
  