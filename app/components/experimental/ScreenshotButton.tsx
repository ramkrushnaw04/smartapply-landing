"use client";

import React, { useState } from "react";
import { useScreenshot } from "./useScreenshot";

interface ScreenshotButtonProps {
  /** The ID of the element to capture */
  componentId: string;
  /** Custom filename (without extension) */
  fileName?: string;
  /** Button text */
  buttonText?: string;
  /** Screenshot options */
  scale?: number;
  format?: "png" | "jpeg" | "webp";
  quality?: number;
  backgroundColor?: string | null;
  /** Additional button class names */
  className?: string;
  /** Show loading state */
  showLoading?: boolean;
  /** Callback on successful capture */
  onSuccess?: (dataUrl: string) => void;
  /** Callback on error */
  onError?: (error: Error) => void;
  /** Children to render inside the button (overrides buttonText) */
  children?: React.ReactNode;
}

/**
 * A button component that captures a screenshot of a target element when clicked
 */
export function ScreenshotButton({
  componentId,
  buttonText = "📷 Capture Screenshot",
  scale = 3,
  format = "png",
  quality = 1,
  backgroundColor = null,
  fileName,
  className = "",
  showLoading = true,
  onSuccess,
  onError,
  children,
}: ScreenshotButtonProps) {
  const [isCapturing, setIsCapturing] = useState(false);
  const { captureScreenshot } = useScreenshot();

  const handleCapture = async () => {
    setIsCapturing(true);
    try {
      const result = await captureScreenshot(componentId, {
        scale,
        format,
        quality,
        backgroundColor,
        filename: fileName,
      });
      if (result && onSuccess) {
        onSuccess(result);
      }
    } catch (error) {
      if (onError) {
        onError(error as Error);
      }
    } finally {
      setIsCapturing(false);
    }
  };

  const defaultStyles = `
    inline-flex items-center justify-center gap-2
    px-4 py-2 rounded-lg
    bg-gradient-to-r from-purple-600 to-blue-600
    text-white font-medium text-sm
    hover:from-purple-700 hover:to-blue-700
    disabled:opacity-50 disabled:cursor-not-allowed
    transition-all duration-200
    shadow-lg hover:shadow-xl
  `;

  return (
    <button
      onClick={handleCapture}
      disabled={isCapturing}
      className={`${defaultStyles} ${className}`}
    >
      {isCapturing && showLoading ? (
        <>
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Capturing...</span>
        </>
      ) : (
        children || buttonText
      )}
    </button>
  );
}

export default ScreenshotButton;
