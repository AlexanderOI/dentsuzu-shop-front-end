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

export type CategoryPageKey = "Aderezos-Condimentos" | "Alimentos Secos" | "Celiacos" | "Dietéticos-BC" | "Enlatados" | "Golosinas" | "Café-Té-Yerba" | "Snacks" | "Aire Libre" | "Cocina" | "Cotillón" | "Decoración-Regalos" | "Organizadores del Hogar" | "Vajillas" | "Accesorios" | "Alimentos" | "Perfumería" | "Aperitivos" | "Bebidas Blancas" | "Cervezas" | "Espumantes" | "Licores" | "Vinos" | "Whiskies" | "Aguas" | "Especiales" | "Gaseosas" | "Jugos" | "Carne de Aves" | "Carne Porcina" | "Carne Vacuna-Otros" | "Comidas Preparadas" | "Frutas-Verduras" | "Hamburguesas" | "Pescados-Mariscos" | "Carnes" | "Línea Blanca" | "Otros" | "Botiquin" | "Embutidos" | "Fiambres" | "Otros" | "Queseria" | "Frutas" | "Verduras" | "Huevos" | "Juguetes" | "Otros" | "Bebidas Lácteas" | "Cremas" | "Leches" | "Chocolatada" | "Manteca-Margarina" | "Postres" | "Yogures" | "Archivos-Carpetas" | "Básicos de Oficina" | "Elem. de Escritura" | "Escolar" | "Otros Artículos" | "Accesorios" | "Hogar" | "Ropa" | "Carbón-Encend." | "Ferretería" | "Iluminacion-Electricidad" | "Jardinería-Piscina" | "Pintureria" | "Rodados" | "Veterinaria" | "Confiteria" | "Panificados a Granel" | "Panificados Envasados" | "Tapas" | "Con y Sin Relleno" | "Cuidado Capilar" | "Cuidado de la Piel" | "Cuidado Masculino" | "Cuidado Personal" | "Desodorantes" | "Higiene Bucal" | "Perfumes y Colonias" | "Protección Femenina" | "Rostro-Manos-Pies"