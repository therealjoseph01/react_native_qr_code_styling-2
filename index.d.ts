export type DotType =
  | 'rounded'
  | 'dots'
  | 'classy'
  | 'classy-rounded'
  | 'square'
  | 'extra-rounded';

export type CornerSquareType = 'dots' | 'square' | 'extra-rounded';
export type CornerDotType = 'dots' | 'square';
export type QROptionsMode = 'Numeric' | 'Alphanumeric' | 'Byte' | 'Kanji';
export type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';
export type QRGeneratorType = 'svg' | 'canvas';
export type GradientType = 'linear' | 'radial';
export type CrossOriginType = 'anonymous' | 'use-credentials';

export type QROptionsTypeNumber =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40;

export interface ColorStop {
  offset?: number;
  color?: string;
}

export interface Gradient {
  type?: GradientType;
  rotation?: number;
  colorStops?: ColorStop[];
}

export interface DotOptions {
  type?: DotType;
  color?: string;
  gradient?: Gradient;
}

export interface CornerSquareOptions {
  type?: CornerSquareType;
  color?: string;
  gradient?: Gradient;
}

export interface CornerDotOptions {
  type?: CornerDotType;
  color?: string;
  gradient?: Gradient;
}

export interface BackgroundOptions {
  color?: string;
  gradient?: Gradient;
}

export interface ImageOptions {
  hideBackgroundDots?: boolean;
  imageSize?: number;
  margin?: number;
  crossOrigin?: CrossOriginType;
}

export interface QROptions {
  typeNumber?: QROptionsTypeNumber;
  mode?: QROptionsMode;
  errorCorrectionLevel?: ErrorCorrectionLevel;
}

export interface QRGeneratorProps {
  value: string;
  type?: QRGeneratorType;
  width: number;
  height: number;
  borderRadius?: number;
  image?: string;
  dotOptions?: DotOptions;
  cornerSquareOptions?: CornerSquareOptions;
  cornerDotOptions?: CornerDotOptions;
  backgroundOptions?: BackgroundOptions;
  imageOptions?: ImageOptions;
  qrOptions?: QROptions;
  getBase64DataImage?: (value: string) => void;
}

declare function QRGenerator(props: QRGeneratorProps): any;

export default QRGenerator;
