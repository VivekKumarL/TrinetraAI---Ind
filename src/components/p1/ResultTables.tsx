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

interface ResultTablesProps {
  result: ResultData | null;
  safeStatus: "safe" | "unsafe" | "unknown"; // new prop
}

type NestedRecord = {
  [key: string]: string | number | boolean | NestedRecord ;
};

// Static demo data to show if site is safe
const staticDnsHttpFeatures = {
  "DNS Lookup": "8.8.8.8",
  "HTTP Version": "HTTP/2",
  "Secure Connection": true,
};

const staticSslFeatures = {
  "Certificate Authority": "Let's Encrypt",
  "Valid From": "2025-01-01",
  "Valid To": "2026-01-01",
  "SSL Grade": "A+",
};

const staticScrapingFeatures = {
  "Meta Title": "Example Site",
  "Meta Description": "This is a static demo description",
  "Number of Links": 42,
};

// Helper to render nested objects
const renderTableFromObject = (data:NestedRecord): JSX.Element => (
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
             {value && typeof value === "object" && !Array.isArray(value)
              ? renderTableFromObject(value) // no cast needed
              : value?.toString()}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const ResultTables: React.FC<ResultTablesProps> = ({ safeStatus }) => {
  if (safeStatus === "unsafe") {
    return (
      <div className="text-red-600 font-semibold text-lg">
        Cannot display site data – site is malicious ❌
      </div>
    );
  }

  // If safe or unknown, show static data or loading placeholders
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">Step-2: DNS/HTTP Features</h3>
        {safeStatus === "safe" ? renderTableFromObject(staticDnsHttpFeatures) : <p className="text-sm text-gray-500">Loading DNS/HTTP features...</p>}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Step-3: SSL Features</h3>
        {safeStatus === "safe" ? renderTableFromObject(staticSslFeatures) : <p className="text-sm text-gray-500">Loading SSL features...</p>}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Step-4: Scraping Features</h3>
        {safeStatus === "safe" ? renderTableFromObject(staticScrapingFeatures) : <p className="text-sm text-gray-500">Loading scraping features...</p>}
      </div>

      <div>
        {safeStatus === "safe" ? (
          <p className="text-sm text-gray-500">Screenshots would display here...</p>
        ) : (
          <p className="text-sm text-gray-500">Loading screenshots...</p>
        )}
      </div>
    </div>
  );
};

export default ResultTables;
