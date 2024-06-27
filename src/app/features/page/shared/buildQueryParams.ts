import { HttpParams } from "@angular/common/http";
import { Filter } from "./services";

export const buildQueryParams = (params: Filter) => {
  let httpParams = new HttpParams();

  for (const key in params) {
    if (key in params) {
      const value = params[key as keyof Filter]!;
      if (Array.isArray(value)) {
        value.forEach(val => {
          httpParams = httpParams.append(key, val);
        });
      } else {
        httpParams = httpParams.set(key, value);
      }
    }
  }

  return httpParams;
}
