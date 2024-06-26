import { HttpParams } from "@angular/common/http";

export const buildQueryParams = (params: Record<string, any>) => {
  let httpParams = new HttpParams();

  for (const key in params) {
    if (key in params) {
      const value = params[key];
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
