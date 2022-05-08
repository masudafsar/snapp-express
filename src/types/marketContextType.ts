import {Category} from "./category";
import {Pagination} from "./pagination";

export interface marketContextType {
  categories?: Category[];
  pagination?: Pagination;
}
