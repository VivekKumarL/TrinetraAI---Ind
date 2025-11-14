"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ResultData } from "@/types/resultData";

interface ResultTablesProps {
  result: ResultData | null;
  safeStatus: "safe" | "unsafe" | "unknown";
}

type NestedRecord = {
  [key: string]: string | number | boolean | NestedRecord;
};

interface RenderTableProps {
  data: NestedRecord;
}

// Component to render nested objects as a table
const RenderTableFromObject: React.FC<RenderTableProps> = ({ data }) => {
  const renderRows = (obj: NestedRecord) => {
    return Object.entries(obj).map(([key, value]) => (
      <TableRow key={key}>
        <TableCell>{key}</TableCell>
        <TableCell>
          {typeof value === "object" && value !== null ? (
            <Table>
              <TableBody>{renderRows(value)}</TableBody>
            </Table>
          ) : (
            value?.toString()
          )}
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Key</TableCell>
          <TableCell>Value</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>{renderRows(data)}</TableBody>
    </Table>
  );
};

// Static demo data
const staticDnsHttpFeatures: NestedRecord = {
  "DNS Lookup": "8.8.8.8",
  "HTTP Version": "HTTP/2",
  "Secure Connection": true,
};

const staticSslFeatures: NestedRecord = {
  "Certificate Authority": "Let's Encrypt",
  "Valid From": "2025-01-01",
  "Valid To": "2026-01-01",
  "SSL Grade": "A+",
};

const staticScrapingFeatures: NestedRecord = {
  "Meta Title": "Example Site",
  "Meta Description": "This is a static demo description",
  "Number of Links": 42,
};

// Main ResultTables component
const ResultTables: React.FC<ResultTablesProps> = ({ safeStatus }) => {
  if (safeStatus === "unsafe") {
    return (
      <div className="text-red-600 font-semibold text-lg">
        Cannot display site data – site is malicious ❌
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">Step-2: DNS/HTTP Features</h3>
        {safeStatus === "safe" ? (
          <RenderTableFromObject data={staticDnsHttpFeatures} />
        ) : (
          <p className="text-sm text-gray-500">Loading DNS/HTTP features...</p>
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Step-3: SSL Features</h3>
        {safeStatus === "safe" ? (
          <RenderTableFromObject data={staticSslFeatures} />
        ) : (
          <p className="text-sm text-gray-500">Loading SSL features...</p>
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Step-4: Scraping Features</h3>
        {safeStatus === "safe" ? (
          <RenderTableFromObject data={staticScrapingFeatures} />
        ) : (
          <p className="text-sm text-gray-500">Loading scraping features...</p>
        )}
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
