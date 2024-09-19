export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      category: 'Phones'
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      category: 'Phones'
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: '',
      category: 'Bags'
    }
  ];
  