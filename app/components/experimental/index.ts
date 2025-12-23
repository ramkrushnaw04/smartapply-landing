/**
 * Screenshot Utility - Experimental Components
 * 
 * This module provides tools for capturing high-quality screenshots
 * of DOM elements by their ID and downloading them.
 * 
 * Dependencies: html2canvas (npm install html2canvas)
 * 
 * Usage:
 * 
 * 1. Using the hook directly:
 * ```tsx
 * import { useScreenshot } from '@/app/components/experimental/useScreenshot';
 * 
 * function MyComponent() {
 *   const { captureScreenshot } = useScreenshot();
 * 
 *   const handleCapture = async () => {
 *     await captureScreenshot('my-element-id', {
 *       scale: 3,           // 3x for high quality
 *       format: 'png',      // png, jpeg, or webp
 *       quality: 1,         // 0-1 for jpeg/webp
 *       filename: 'my-screenshot',
 *       backgroundColor: '#ffffff', // or null for transparent
 *     });
 *   };
 * 
 *   return (
 *     <>
 *       <div id="my-element-id">Content to capture</div>
 *       <button onClick={handleCapture}>Take Screenshot</button>
 *     </>
 *   );
 * }
 * ```
 * 
 * 2. Using the ScreenshotButton component:
 * ```tsx
 * import { ScreenshotButton } from '@/app/components/experimental/ScreenshotButton';
 * 
 * function MyComponent() {
 *   return (
 *     <>
 *       <div id="hero-section">Hero content</div>
 *       <ScreenshotButton 
 *         targetId="hero-section"
 *         label="Download Hero Image"
 *         scale={3}
 *         format="png"
 *       />
 *     </>
 *   );
 * }
 * ```
 * 
 * 3. Capturing multiple elements:
 * ```tsx
 * const { captureMultiple } = useScreenshot();
 * 
 * await captureMultiple(['section-1', 'section-2', 'section-3'], {
 *   scale: 2,
 *   format: 'jpeg',
 *   quality: 0.95,
 * });
 * ```
 */

export { useScreenshot } from './useScreenshot';
export { ScreenshotButton } from './ScreenshotButton';
