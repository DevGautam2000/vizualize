"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Code2, X } from "lucide-react";

interface CodeViewerProps {
  code: string;
  language?: string;
}

export function CodeViewer({ code, language = "tsx" }: CodeViewerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { theme } = useTheme();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-50"
        onClick={() => setIsOpen(true)}
      >
        <Code2 className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="fixed h-full inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <Card className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden">
            <div className="flex items-center justify-between border-b p-4">
              <h3 className="text-lg font-semibold">Source Code</h3>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleCopy}
                >
                  <Copy className="h-4 w-4" />
                  {isCopied && (
                    <span className="absolute -bottom-8 right-0 rounded bg-secondary px-2 py-1 text-xs">
                      Copied!
                    </span>
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="max-h-[calc(90vh-8rem)] overflow-auto p-4">
              <SyntaxHighlighter
                language={language}
                style={theme === "dark" ? oneDark : coldarkCold }
                customStyle={{
                  margin: 0,
                  borderRadius: "0.5rem"
                }}
              >
                {code}
              </SyntaxHighlighter>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}