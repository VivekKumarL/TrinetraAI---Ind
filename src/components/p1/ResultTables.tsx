"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ResultData } from "@/types/resultData";

// NestedRecord type for table rendering
type NestedRecord = {
  [key: string]: string | number | boolean | NestedRecord | undefined;
};

// Helper to convert unknown objects into NestedRecord safely
const toNestedRecord = (obj: Record<string, unknown>): NestedRecord => {
  const result: NestedRecord = {};

  Object.entries(obj).forEach(([key, value]) => {
    if (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      result[key] = value;
    } else if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      result[key] = toNestedRecord(value as Record<string, unknown>);
    } else {
      result[key] = String(value); // fallback for unknown or array values
    }
  });

  return result;
};

export interface Screenshot {
  id?: string;
  url?: string;
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
      {/* Step-2: DNS/HTTP Features */}
      {result.dns_http_features && result.dns_http_features !== "loading" && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Step-2: DNS/HTTP Features</h3>
          {renderTableFromObject(toNestedRecord(result.dns_http_features))}
        </div>
      )}
      {result.dns_http_features === "loading" && (
        <p className="text-sm text-gray-500">Loading Step-2: DNS/HTTP Features...</p>
      )}

      {/* Step-3: SSL Features */}
      {result.ssl_features && result.ssl_features !== "loading" && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Step-3: SSL Features</h3>
          {renderTableFromObject(toNestedRecord(result.ssl_features))}
        </div>
      )}
      {result.ssl_features === "loading" && (
        <p className="text-sm text-gray-500">Loading Step-3: SSL Features...</p>
      )}

      {/* Step-4: Scraping Features */}
      {result.extracted_scraping_features &&
        result.extracted_scraping_features !== "loading" && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Step-4: Scraping Features</h3>
            {renderTableFromObject(toNestedRecord(result.extracted_scraping_features))}
          </div>
        )}
      {result.extracted_scraping_features === "loading" && (
        <p className="text-sm text-gray-500">Loading Step-4: Scraping Features...</p>
      )}
    </div>
  );
};

export default ResultTables;
