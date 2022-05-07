import {Response} from '../response';
import {Category} from "../category";
import {Product} from "../Product";

export interface ProductVariation {
  product_variations: Product[];
  categories: Category[];
  meta: {
    categoryTitle: string,
    pagination: {
      size: number,
      page: number,
      total: number,
    },
    filter: {
      default_title: string,
      results: {
        name: string,
        multiple_choice: boolean,
        translation: string,
        icon: string,
        type: "Text" | "Searchable",
        "filters": {
          name: string,
          enabled: boolean,
          translation: string,
          icon: string
        }[],
      }[],
    },
    sort: {
      default_title: string,
      results: {
        name: string,
        order: "asc" | "desc",
        enabled: boolean,
        translation: string,
        icon: string,
      }[],
    },
  },
};

export interface ProductVariationParams {
  vendorCode: string;
  menu_category_id?: number;
  page?: number;
  size?: number;
  filters?: any;
  fetch_filters?: 1 | 0;
  fetch_categories?: 1 | 0;
}

export interface ProductVariationResponse extends Response<ProductVariation> {
}
