// src/types/resultData.ts
export type NestedRecord = Record<string, string | number | boolean >;

export interface Screenshot {
  url: string;
  timestamp?: string;
}

export interface ResultData {
  safe?: string | "loading";
  dns_http_features?: Record<string, unknown> | "loading";
  ssl_features?: Record<string, unknown> | "loading";
  extracted_scraping_features?: Record<string, unknown> | "loading";
  screenshots?: Array<string | { url: string }> | "loading";
}
