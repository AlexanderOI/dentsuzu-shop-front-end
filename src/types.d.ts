export interface JsonProducts {
  sectionProduct: ProductsSection
}

export interface ProductsSection {
  Almacén: Almacén;
  Bazar: Bazar;
  Bebes: Bebes;
  "Bebidas con Alcohol": BebidasConAlcohol;
  "Bebidas sin Alcohol": BebidasSinAlcohol;
  Carnes: Carnes;
  Congelados: Congelados;
  Electrodomésticos: Electrodomésticos;
  Farmacia: Farmacia;
  "Fiambres y Quesos": FiambresYQuesos;
  "Frutas/Verduras/Huevos": FrutasVerdurasHuevos;
  Juguetería: Juguetería;
  Lácteos: Lácteos;
  Librería: Librería;
  Limpieza: Limpieza;
  "Mascotas y Hogar": MascotasYHogar;
  Panaderia: Panaderia;
  "Pastas Frescas": PastasFrescas;
  Perfumeria: Perfumeria;
}

export interface Almacén {
  "Aderezos/Condimentos": ProductsList[];
  "Alimentos Secos": ProductsList[];
  Celiacos: ProductsList[];
  "Dietéticos/BC": ProductsList[];
  Enlatados: ProductsList[];
  Golosinas: ProductsList[];
  "Café/Té/Yerba": ProductsList[];
  Snacks: ProductsList[];
}

export interface Products {
  products: ProductsList[];
}


export interface ProductsList {
  productId: number;
  category: string;
  product: string;
  alt: string;
  price: number;
  stock: number;
  img: string;
}

export interface Bazar {
  "Aire Libre": ProductsList[];
  Cocina: ProductsList[];
  Cotillón: ProductsList[];
  "Decoración/Regalos": ProductsList[];
  "Organizadores del Hogar": ProductsList[];
  Vajillas: ProductsList[];
}

export interface Bebes {
  Accesorios: ProductsList[];
  Alimentos: ProductsList[];
  Perfumería: ProductsList[];
}

export interface BebidasSinAlcohol {
  Aguas: ProductsList[];
  Especiales: ProductsList[];
  Gaseosas: ProductsList[];
  Jugos: ProductsList[];
}

export interface BebidasConAlcohol {
  Aperitivos: ProductsList[];
  "Bebidas Blancas": ProductsList[];
  Cervezas: ProductsList[];
  Espumantes: ProductsList[];
  Licores: ProductsList[];
  Vinos: ProductsList[];
  Whiskies: ProductsList[];
}

export interface Carnes {
  "Carne de Aves": ProductsList[];
  "Carne Porcina": ProductsList[];
  "Carne Vacuna/Otros": ProductsList[];
}

export interface Congelados {
  "Comidas Preparadas": ProductsList[];
  "Frutas/Verduras": ProductsList[];
  Hamburguesas: ProductsList[];
  "Pescados/Mariscos": ProductsList[];
  Carnes: ProductsList[];
}

export interface Electrodomésticos {
  "Línea Blanca": ProductsList[];
  Otros: ProductsList[];
}

export interface Farmacia {
  Botiquin: ProductsList[];
}

export interface FiambresYQuesos {
  Embutidos: ProductsList[];
  Fiambres: ProductsList[];
  Otros: ProductsList[];
  Queseria: ProductsList[];
}

export interface FrutasVerdurasHuevos {
  Frutas: ProductsList[];
  Verduras: ProductsList[];
  Huevos: ProductsList[];
}

export interface Juguetería {
  Juguetes: ProductsList[];
  Otros: ProductsList[];
}

export interface Librería {
  "Archivos/Carpetas": ProductsList[];
  "Básicos de Oficina": ProductsList[];
  "Elem. de Escritura": ProductsList[];
  Escolar: ProductsList[];
  "Otros Artículos": ProductsList[];
}

export interface Limpieza {
  Accesorios: ProductsList[];
  Hogar: ProductsList[];
  Ropa: ProductsList[];
}

export interface Lácteos {
  "Bebidas Lácteas": ProductsList[];
  Cremas: ProductsList[];
  Leches: ProductsList[];
  Chocolatada: ProductsList[];
  "Manteca / Margarina": ProductsList[];
  Postres: ProductsList[];
  Yogures: ProductsList[];
}

export interface MascotasYHogar {
  "Carbón/Encend.": ProductsList[];
  Ferretería: ProductsList[];
  "Iluminacion/Electricidad": ProductsList[];
  "Jardinería/Piscina": ProductsList[];
  Pintureria: ProductsList[];
  Rodados: ProductsList[];
  Veterinaria: ProductsList[];
}

export interface Panaderia {
  Confiteria: ProductsList[];
  "Panificados a Granel": ProductsList[];
  "Panificados Envasados": ProductsList[];
}

export interface PastasFrescas {
  Tapas: ProductsList[];
  "Con y Sin Relleno": ProductsList[];
}

export interface Perfumeria {
  "Cuidado Capilar": ProductsList[];
  "Cuidado de la Piel": ProductsList[];
  "Cuidado Masculino": ProductsList[];
  "Cuidado Personal": ProductsList[];
  Desodorantes: ProductsList[];
  "Higiene Bucal": ProductsList[];
  "Perfumes y Colonias": ProductsList[];
  "Protección Femenina": ProductsList[];
  "Rostro/Manos/Pies": ProductsList[];
}
