import {Response} from '../response';
import {Category} from "../category";
import {Product} from "../Product";
import {Pagination} from "../pagination";
import {Sort} from "../meta/sort";

export interface ProductVariation {
  product_variations: Product[];
  categories: Category[];
  meta: {
    categoryTitle: string,
    pagination: Pagination,
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
    sort: Sort,
  },
};

export interface ProductVariationParams {
  vendorCode: string;
  menu_category_id?: number;
  page?: number;
  size?: number;
  filters?: any;
  sort?: string;
  fetch_filters?: 1 | 0;
  fetch_categories?: 1 | 0;
}

export interface ProductVariationResponse extends Response<ProductVariation> {
}
