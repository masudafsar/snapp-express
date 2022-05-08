import {Category} from "./category";
import {Pagination} from "./pagination";
import {Sort} from "./meta/sort";

export interface marketContextType {
  categoryTitle?: string;
  categories?: Category[];
  pagination?: Pagination;
  sort?: Sort;
}
