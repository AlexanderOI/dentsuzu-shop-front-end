export interface JsonProducts {
  sectionProduct: ProductsSection
}

export interface ProductsList {
  productId: number;
  category: string;
  product: string;
  alt: string;
  price: number;
  stock: number;
  quantity: number;
  img: string;
}

interface CategoryData {
  [category: string]: ProductsList[];
}

interface SectionProducts {
  [section: string]: CategoryData;
}
