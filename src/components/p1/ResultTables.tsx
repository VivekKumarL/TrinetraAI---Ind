"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// ✅ Define a shared ResultData type that includes screenshots
type NestedRecord = {
  [key: string]: string | number | boolean | NestedRecord | undefined;
};

export interface Screenshot {
  id?: string;
  url?: string;
}

export interface ResultData {
  dns_http_features?: NestedRecord | "loading";
  ssl_features?: NestedRecord | "loading";
  extracted_scraping_features?: NestedRecord | "loading";
  screenshots?: Screenshot[] | "loading";
}

interface ResultTablesProps {
  result: ResultData | null | undefined;
}

const ResultTables: React.FC<ResultTablesProps> = ({ result }) => {
  if (!result) return null;

  const renderTableFromObject = (data: NestedRecord): JSX.Element => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Key</TableHead>
          <TableHead>Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.entries(data).map(([key, value]) => (
          <TableRow key={key}>
            <TableCell className="font-medium">{key}</TableCell>
            <TableCell>
              {typeof value === "object" && value !== null
                ? renderTableFromObject(value as NestedRecord)
                : value?.toString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  return (
    <div className="space-y-8">
      {result.dns_http_features && result.dns_http_features !== "loading" && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Step-2: DNS/HTTP Features</h3>
          {renderTableFromObject(result.dns_http_features)}
        </div>
      )}
      {result.dns_http_features === "loading" && (
        <p className="text-sm text-gray-500">Loading Step-2: DNS/HTTP Features...</p>
      )}

      {result.ssl_features && result.ssl_features !== "loading" && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Step-3: SSL Features</h3>
          {renderTableFromObject(result.ssl_features)}
        </div>
      )}
      {result.ssl_features === "loading" && (
        <p className="text-sm text-gray-500">Loading Step-3: SSL Features...</p>
      )}

      {result.extracted_scraping_features &&
        result.extracted_scraping_features !== "loading" && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Step-4: Scraping Features</h3>
            {renderTableFromObject(result.extracted_scraping_features)}
          </div>
        )}
      {result.extracted_scraping_features === "loading" && (
        <p className="text-sm text-gray-500">Loading Step-4: Scraping Features...</p>
      )}
    </div>
  );
};

export default ResultTables;
