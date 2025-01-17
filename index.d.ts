import * as React from 'react';
import * as ReactNative from 'react-native';

// Common props
type NumberProp = string | number;

export type FillRule = 'evenodd' | 'nonzero';
export type Units = 'userSpaceOnUse' | 'objectBoundingBox';

export type TextAnchor = 'start' | 'middle' | 'end';
export type FontStyle = 'normal' | 'italic' | 'oblique';
export type FontVariant = 'normal' | 'small-caps';
export type FontWeight =
  | 'normal'
  | 'bold'
  | 'bolder'
  | 'lighter'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  ;
export type FontStretch =
  | 'normal'
  | 'wider'
  | 'narrower'
  | 'ultra-condensed'
  | 'extra-condensed'
  | 'condensed'
  | 'semi-condensed'
  | 'semi-expanded'
  | 'expanded'
  | 'extra-expanded'
  | 'ultra-expanded'
  ;
export type TextDecoration = 'none' | 'underline' | 'overline' | 'line-through' | 'blink';
export type FontVariantLigatures = 'normal' | 'none';
export type AlignmentBaseline =
  | 'baseline'
  | 'text-bottom'
  | 'alphabetic'
  | 'ideographic'
  | 'middle'
  | 'central'
  | 'mathematical'
  | 'text-top'
  | 'bottom'
  | 'center'
  | 'top'
  | 'text-before-edge'
  | 'text-after-edge'
  | 'before-edge'
  | 'after-edge'
  | 'hanging'
  ;
export type BaselineShift = 'sub' | 'super' | 'baseline' | ReadonlyArray<NumberProp> | NumberProp;
export type LengthAdjust = 'spacing' | 'spacingAndGlyphs';

export type TextPathMethod = 'align' | 'stretch';
export type TextPathSpacing = 'auto' | 'exact';
export type TextPathMidLine = 'sharp' | 'smooth';

export type Linecap = 'butt' | 'square' | 'round';
export type Linejoin = 'miter' | 'bevel' | 'round';

export interface TouchableProps {
  disabled?: boolean,
  onPress?: (event: any) => any,
  onPressIn?: (event: any) => any,
  onPressOut?: (event: any) => any,
  onLongPress?: (event: any) => any,
  delayPressIn?: number,
  delayPressOut?: number,
  delayLongPress?: number
}

export interface ResponderProps extends ReactNative.GestureResponderHandlers {
  pointerEvents?: "box-none" | "none" | "box-only" | "auto",
}

// rgba values inside range 0 to 1 inclusive
// rgbaArray = [r, g, b, a]
type rgbaArray = ReadonlyArray<number>

// argb values inside range 0x00 to 0xff inclusive
// int32ARGBColor = 0xaarrggbb
type int32ARGBColor = number

export interface FillProps {
  fill?: int32ARGBColor | rgbaArray | string,
  fillOpacity?: NumberProp,
  fillRule?: FillRule,
}

export interface ClipProps {
  clipRule?: FillRule,
  clipPath?: string
}
  
interface VectorEffectProps {
  vectorEffect?: "none" | "non-scaling-stroke" | "nonScalingStroke" | "default" | "inherit" | "uri";
}

export interface DefinitionProps {
  id?: string,
}

export interface StrokeProps {
  stroke?: int32ARGBColor | rgbaArray | string,
  strokeWidth?: NumberProp,
  strokeOpacity?: NumberProp,
  strokeDasharray?: ReadonlyArray<NumberProp> | NumberProp,
  strokeDashoffset?: NumberProp,
  strokeLinecap?: Linecap,
  strokeLinejoin?: Linejoin,
  strokeMiterlimit?: NumberProp,
}

export interface FontObject {
  fontStyle?: FontStyle,
  fontVariant?: FontVariant,
  fontWeight?: FontWeight,
  fontStretch?: FontStretch,
  fontSize?: NumberProp,
  fontFamily?: string,
  textAnchor?: TextAnchor,
  textDecoration?: TextDecoration,
  letterSpacing?: NumberProp,
  wordSpacing?: NumberProp,
  kerning?: NumberProp,
  fontVariantLigatures?: FontVariantLigatures,
}

export interface FontProps extends FontObject {
  font?: FontObject,
}

export interface TransformObject {
  scale?: NumberProp,
  scaleX?: NumberProp,
  scaleY?: NumberProp,
  rotate?: NumberProp,
  rotation?: NumberProp,
  translate?: NumberProp,
  translateX?: NumberProp,
  translateY?: NumberProp,
  x?: NumberProp,
  y?: NumberProp,
  origin?: NumberProp,
  originX?: NumberProp,
  originY?: NumberProp,
  skew?: NumberProp,
  skewX?: NumberProp,
  skewY?: NumberProp,
}

/*

  ColumnMajorTransformMatrix

  [a, b, c, d, tx, ty]

  This matrix can be visualized as:

  ╔═      ═╗
  ║ a c tx ║
  ║ b d ty ║
  ║ 0 0 1  ║
  ╚═      ═╝

*/
type ColumnMajorTransformMatrix = ReadonlyArray<number>;

export interface TransformProps extends TransformObject {
  transform?: ColumnMajorTransformMatrix | string | TransformObject,
}

export interface CommonMaskProps {
  mask?: string;
}

export interface CommonPathProps extends FillProps, StrokeProps, ClipProps, TransformProps, VectorEffectProps, ResponderProps, TouchableProps, DefinitionProps, CommonMaskProps {}

// Element props
export interface CircleProps extends CommonPathProps {
  cx?: NumberProp,
  cy?: NumberProp,
  opacity?: NumberProp,
  r?: NumberProp,
}
export const Circle: React.ComponentClass<CircleProps>;

export interface ClipPathProps {
  id: string,
}
export const ClipPath: React.ComponentClass<ClipPathProps>;

export const Defs: React.ComponentClass<{}>;

export interface EllipseProps extends CommonPathProps {
  cx?: NumberProp,
  cy?: NumberProp,
  opacity?: NumberProp,
  rx?: NumberProp,
  ry?: NumberProp,
}
export const Ellipse: React.ComponentClass<EllipseProps>;

export interface GProps extends CommonPathProps {
  opacity?: NumberProp,
}
export const G: React.ComponentClass<GProps>;

export interface ImageProps extends ResponderProps, CommonMaskProps, ClipProps, TouchableProps {
  x?: NumberProp,
  y?: NumberProp,
  width?: NumberProp,
  height?: NumberProp,
  xlinkHref?: ReactNative.ImageProperties['source'],
  href: ReactNative.ImageProperties['source'],
  preserveAspectRatio?: string,
  opacity?: NumberProp,
  clipPath?: string
}
export const Image: React.ComponentClass<ImageProps>;

export interface LineProps extends CommonPathProps {
  opacity?: NumberProp,
  x1?: NumberProp,
  x2?: NumberProp,
  y1?: NumberProp,
  y2?: NumberProp,
}
export const Line: React.ComponentClass<LineProps>;

export interface LinearGradientProps {
  x1?: NumberProp,
  x2?: NumberProp,
  y1?: NumberProp,
  y2?: NumberProp,
  gradientUnits?: Units,
  id: string,
}
export const LinearGradient: React.ComponentClass<LinearGradientProps>;

export interface PathProps extends CommonPathProps {
  d: string,
  opacity?: NumberProp,
}
export const Path: React.ComponentClass<PathProps>;

export interface PatternProps {
  id: string,
  x?: NumberProp,
  y?: NumberProp,
  width?: NumberProp,
  height?: NumberProp,
  patternTransform?: ColumnMajorTransformMatrix | string,
  patternUnits?: Units,
  patternContentUnits?: Units,
  viewBox?: string,
  preserveAspectRatio?: string
}
export const Pattern: React.ComponentClass<PatternProps>;

export interface PolygonProps extends CommonPathProps {
  opacity?: NumberProp,
  points: string | ReadonlyArray<NumberProp>,
}
export const Polygon: React.ComponentClass<PolygonProps>;

export interface PolylineProps extends CommonPathProps {
  opacity?: NumberProp,
  points: string | ReadonlyArray<NumberProp>,
}
export const Polyline: React.ComponentClass<PolylineProps>;

export interface RadialGradientProps {
  fx?: NumberProp,
  fy?: NumberProp,
  rx?: NumberProp,
  ry?: NumberProp,
  cx?: NumberProp,
  cy?: NumberProp,
  r?: NumberProp,
  gradientUnits?: Units,
  id: string,
}
export const RadialGradient: React.ComponentClass<RadialGradientProps>;

export interface RectProps extends CommonPathProps {
  x?: NumberProp,
  y?: NumberProp,
  width?: NumberProp,
  height?: NumberProp,
  rx?: NumberProp,
  ry?: NumberProp,
  opacity?: NumberProp,
}
export const Rect: React.ComponentClass<RectProps>;

export interface StopProps {
  stopColor?: int32ARGBColor | rgbaArray | string,
  stopOpacity?: NumberProp,
  offset?: NumberProp,
}
export const Stop: React.ComponentClass<StopProps>;

export interface SvgProps extends GProps, ReactNative.ViewProperties {
  width?: NumberProp,
  height?: NumberProp,
  viewBox?: string,
  preserveAspectRatio?: string,
  color?: int32ARGBColor | rgbaArray | string,
  title?: string,
}

// Svg is both regular and default exported
export const Svg: React.ComponentClass<SvgProps>;
export default Svg;

export interface SymbolProps {
  id: string,
  viewBox?: string,
  preserveAspectRatio?: string,
  opacity?: NumberProp,
}
export const Symbol: React.ComponentClass<SymbolProps>;

export interface TSpanProps extends CommonPathProps, FontProps {
  dx?: NumberProp,
  dy?: NumberProp,
}
export const TSpan: React.ComponentClass<TSpanProps>;

export interface TextSpecificProps extends CommonPathProps, FontProps {
  alignmentBaseline?: AlignmentBaseline,
  baselineShift?: BaselineShift,
  verticalAlign?: NumberProp,
  lengthAdjust?: LengthAdjust,
  textLength?: NumberProp,
  fontData?: null | { [name: string]: any },
  fontFeatureSettings?: string,
}

export interface TextProps extends TextSpecificProps {
  dx?: NumberProp,
  dy?: NumberProp,
  opacity?: NumberProp,
}
export const Text: React.ComponentClass<TextProps>;

export interface TextPathProps extends TextSpecificProps {
  xlinkHref?: string,
  href: string,
  startOffset?: NumberProp,
  method?: TextPathMethod,
  spacing?: TextPathSpacing,
  midLine: TextPathMidLine,
}
export const TextPath: React.ComponentClass<TextPathProps>;

export interface UseProps extends CommonPathProps {
  xlinkHref?: string,
  href: string,
  width?: NumberProp,
  height?: NumberProp,
  x?: NumberProp,
  y?: NumberProp,
  opacity?: NumberProp,
}
export const Use: React.ComponentClass<UseProps>;


export enum EMaskUnits {
  USER_SPACE_ON_USE = 'userSpaceOnUse',
  OBJECT_BOUNDING_BOX = 'objectBoundingBox',
}

export type TMaskUnits =
  | EMaskUnits.USER_SPACE_ON_USE
  | EMaskUnits.OBJECT_BOUNDING_BOX;

export interface MaskProps extends CommonPathProps {
  id: string,
  x?: NumberProp,
  y?: NumberProp,
  width?: NumberProp,
  height?: NumberProp,
  maskTransform?: ColumnMajorTransformMatrix | string,
  maskUnits?: TMaskUnits,
  maskContentUnits?: TMaskUnits,
}
export const Mask: React.ComponentClass<MaskProps>;
