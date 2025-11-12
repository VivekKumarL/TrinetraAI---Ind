"use client";
import { Card, CardContent } from "@/components/ui/card";

const LoadingModal = () => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
    <Card className="w-full max-w-sm text-center">
      <CardContent className="p-6">
        <p className="text-lg font-semibold">Scanning in progress...</p>
        <div className="mt-4 w-12 h-12 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin mx-auto"></div>
      </CardContent>
    </Card>
  </div>
);

export default LoadingModal;
