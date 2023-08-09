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
  "Frutas/ Verduras/Huevos": FrutasVerdurasHuevos;
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
  "Aderezos/Condimentos": Products[];
  "Alimentos Secos": Products[];
  Celiacos: Products[];
  "Dietéticos/BC": Products[];
  Enlatados: Products[];
  Golosinas: Products[];
  "Café/Té/Yerba": Products[];
  Snacks: Products[];
}

export interface Products {
  productId: number;
  category: string;
  product: string;
  alt: string;
  price: number;
  stock: number;
  img: string;
}

export interface Bazar {
  "Aire Libre": Products[];
  Cocina: Products[];
  Cotillón: Products[];
  "Decoración/Regalos": Products[];
  "Organizadores del Hogar": Products[];
  Vajillas: Products[];
}

export interface Bebes {
  Accesorios: Products[];
  Alimentos: Products[];
  Perfumería: Products[];
}

export interface BebidasSinAlcohol {
  Aguas: Products[];
  Especiales: Products[];
  Gaseosas: Products[];
  Jugos: Products[];
}

export interface BebidasConAlcohol {
  Aperitivos: Products[];
  "Bebidas Blancas": Products[];
  Cervezas: Products[];
  Espumantes: Products[];
  Licores: Products[];
  Vinos: Products[];
  Whiskies: Products[];
}

export interface Carnes {
  "Carne de Aves": Products[];
  "Carne Porcina": Products[];
  "Carne Vacuna/Otros": Products[];
}

export interface Congelados {
  "Comidas Preparadas": Products[];
  "Frutas/Verduras": Products[];
  Hamburguesas: Products[];
  "Pescados/Mariscos": Products[];
  Carnes: Products[];
}

export interface Electrodomésticos {
  "Línea Blanca": Products[];
  Otros: Products[];
}

export interface Farmacia {
  Botiquin: Products[];
}

export interface FiambresYQuesos {
  Embutidos: Products[];
  Fiambres: Products[];
  Otros: Products[];
  Queseria: Products[];
}

export interface FrutasVerdurasHuevos {
  Frutas: Products[];
  Verduras: Products[];
  Huevos: Products[];
}

export interface Juguetería {
  Juguetes: Products[];
  Otros: Products[];
}

export interface Librería {
  "Archivos/Carpetas": Products[];
  "Básicos de Oficina": Products[];
  "Elem. de Escritura": Products[];
  Escolar: Products[];
  "Otros Artículos": Products[];
}

export interface Limpieza {
  Accesorios: Products[];
  Hogar: Products[];
  Ropa: Products[];
}

export interface Lácteos {
  "Bebidas Lácteas": Products[];
  Cremas: Products[];
  Leches: Products[];
  Chocolatada: Products[];
  "Manteca / Margarina": Products[];
  Postres: Products[];
  Yogures: Products[];
}

export interface MascotasYHogar {
  "Carbón/Encend.": Products[];
  Ferretería: Products[];
  "Iluminacion/Electricidad": Products[];
  "Jardinería/Piscina": Products[];
  Pintureria: Products[];
  Rodados: Products[];
  Veterinaria: Products[];
}

export interface Panaderia {
  Confiteria: Products[];
  "Panificados a Granel": Products[];
  "Panificados Envasados": Products[];
}

export interface PastasFrescas {
  Tapas: Products[];
  "Con y Sin Relleno": Products[];
}

export interface Perfumeria {
  "Cuidado Capilar": Products[];
  "Cuidado de la Piel": Products[];
  "Cuidado Masculino": Products[];
  "Cuidado Personal": Products[];
  Desodorantes: Products[];
  "Higiene Bucal": Products[];
  "Perfumes y Colonias": Products[];
  "Protección Femenina": Products[];
  "Rostro/Manos/Pies": Products[];
}
