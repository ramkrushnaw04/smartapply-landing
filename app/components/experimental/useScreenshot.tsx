"use client";

import { useCallback } from "react";
import { domToPng, domToJpeg, domToWebp } from "modern-screenshot";

interface ScreenshotOptions {
  /** Scale factor for high quality (default: 2 for retina) */
  scale?: number;
  /** Background color (default: transparent) */
  backgroundColor?: string | null;
  /** Image format: 'png' | 'jpeg' | 'webp' */
  format?: "png" | "jpeg" | "webp";
  /** Quality for jpeg/webp (0-1, default: 1) */
  quality?: number;
  /** Custom filename (without extension) */
  filename?: string;
  /** Whether to include padding around the element */
  padding?: number;
  /** Whether to log to console */
  logging?: boolean;
}

const defaultOptions: ScreenshotOptions = {
  scale: 3, // High quality - 3x scale
  backgroundColor: null,
  format: "png",
  quality: 1,
  logging: false,
  padding: 0,
};

/**
 * Hook to capture high-quality screenshots of components by their ID
 * and download them to the user's downloads folder
 */
export function useScreenshot() {
  const captureScreenshot = useCallback(
    async (
      elementId: string,
      options: ScreenshotOptions = {}
    ): Promise<string | null> => {
      const mergedOptions = { ...defaultOptions, ...options };
      const {
        scale,
        backgroundColor,
        format,
        quality,
        filename,
      } = mergedOptions;

      const element = document.getElementById(elementId);

      if (!element) {
        console.error(`Element with ID "${elementId}" not found`);
        return null;
      }

      try {
        // Choose the right converter based on format
        const screenshotOptions = {
          scale: scale,
          backgroundColor: backgroundColor || undefined,
          quality: quality,
          fetch: {
            requestInit: {
              mode: "cors" as RequestMode,
            },
          },
        };

        let dataUrl: string;

        switch (format) {
          case "jpeg":
            dataUrl = await domToJpeg(element, screenshotOptions);
            break;
          case "webp":
            dataUrl = await domToWebp(element, screenshotOptions);
            break;
          case "png":
          default:
            dataUrl = await domToPng(element, screenshotOptions);
            break;
        }

        // Generate filename
        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        const finalFilename = filename || `screenshot-${elementId}-${timestamp}`;
        const fullFilename = `${finalFilename}.${format}`;

        // Create download link
        const link = document.createElement("a");
        link.download = fullFilename;
        link.href = dataUrl;

        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        console.log(`Screenshot saved: ${fullFilename}`);
        return dataUrl;
      } catch (error) {
        console.error("Error capturing screenshot:", error);
        return null;
      }
    },
    []
  );

  const captureMultiple = useCallback(
    async (
      elementIds: string[],
      options: ScreenshotOptions = {}
    ): Promise<(string | null)[]> => {
      const results: (string | null)[] = [];

      for (const id of elementIds) {
        const result = await captureScreenshot(id, {
          ...options,
          filename: options.filename ? `${options.filename}-${id}` : undefined,
        });
        results.push(result);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      return results;
    },
    [captureScreenshot]
  );

  return {
    captureScreenshot,
    captureMultiple,
  };
}

export default useScreenshot;
