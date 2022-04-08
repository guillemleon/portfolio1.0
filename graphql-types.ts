export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  trailingSlash?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  author?: Maybe<SiteSiteMetadataAuthor>;
};

export type SiteSiteMetadataAuthor = {
  name?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DatoCmsFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Int'];
  height: Scalars['Int'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  sizes?: Maybe<Scalars['String']>;
};

export type DatoCmsFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  sizes: Scalars['String'];
};

export type DatoCmsImgixParams = {
  /** Specifies an aspect ratio to maintain when resizing and cropping the image (https://docs.imgix.com/apis/url/size/ar) */
  ar?: InputMaybe<Scalars['String']>;
  /** Applies automatic enhancements to images. (https://docs.imgix.com/apis/url/auto) */
  auto?: InputMaybe<Scalars['String']>;
  /** Colors the background of padded and partially-transparent images. (https://docs.imgix.com/apis/url/bg) */
  bg?: InputMaybe<Scalars['String']>;
  /** Changes the blend alignment relative to the parent image. (https://docs.imgix.com/apis/url/blending/blend-align) */
  blendAlign?: InputMaybe<Scalars['String']>;
  /** Changes the alpha of the blend image. (https://docs.imgix.com/apis/url/blending/blend-alpha) */
  blendAlpha?: InputMaybe<Scalars['Int']>;
  /** Specifies a color to use when applying the blend. (https://docs.imgix.com/apis/url/blending/blend-color) */
  blendColor?: InputMaybe<Scalars['String']>;
  /** Specifies the type of crop for blend images. (https://docs.imgix.com/apis/url/blending/blend-crop) */
  blendCrop?: InputMaybe<Scalars['String']>;
  /** Specifies the fit mode for blend images. (https://docs.imgix.com/apis/url/blending/blend-fit) */
  blendFit?: InputMaybe<Scalars['String']>;
  /** Adjusts the height of the blend image. (https://docs.imgix.com/apis/url/blending/blend-h) */
  blendH?: InputMaybe<Scalars['String']>;
  /** Sets the blend mode for a blend image. (https://docs.imgix.com/apis/url/blending/blend-mode) */
  blendMode?: InputMaybe<Scalars['String']>;
  /** Applies padding to the blend image. (https://docs.imgix.com/apis/url/blending/blend-pad) */
  blendPad?: InputMaybe<Scalars['Int']>;
  /** Adjusts the size of the blend image. (https://docs.imgix.com/apis/url/blending/blend-size) */
  blendSize?: InputMaybe<Scalars['String']>;
  /** Adjusts the width of the blend image. (https://docs.imgix.com/apis/url/blending/blend-w) */
  blendW?: InputMaybe<Scalars['String']>;
  /** Adjusts the x-offset of the blend image relative to its parent. (https://docs.imgix.com/apis/url/blending/blend-x) */
  blendX?: InputMaybe<Scalars['Int']>;
  /** Adjusts the y-offset of the blend image relative to its parent. (https://docs.imgix.com/apis/url/blending/blend-y) */
  blendY?: InputMaybe<Scalars['Int']>;
  /** Specifies the location of the blend image. (https://docs.imgix.com/apis/url/blending/blend) */
  blend?: InputMaybe<Scalars['String']>;
  /** Applies a gaussian blur to an image. (https://docs.imgix.com/apis/url/stylize/blur) */
  blur?: InputMaybe<Scalars['Int']>;
  /** Sets bottom border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-bottom) */
  borderBottom?: InputMaybe<Scalars['Int']>;
  /** Sets left border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-left) */
  borderLeft?: InputMaybe<Scalars['Int']>;
  /** Sets the inner radius of the image's border in pixels. (https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner) */
  borderRadiusInner?: InputMaybe<Scalars['String']>;
  /** Sets the outer radius of the image's border in pixels. (https://docs.imgix.com/apis/url/border-and-padding/border-radius) */
  borderRadius?: InputMaybe<Scalars['String']>;
  /** Sets right border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-right) */
  borderRight?: InputMaybe<Scalars['Int']>;
  /** Sets top border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-top) */
  borderTop?: InputMaybe<Scalars['Int']>;
  /** Applies a border to an image. (https://docs.imgix.com/apis/url/border-and-padding/border) */
  border?: InputMaybe<Scalars['String']>;
  /** Adjusts the brightness of the source image. (https://docs.imgix.com/apis/url/adjustment/bri) */
  bri?: InputMaybe<Scalars['Int']>;
  /** Sets one or more Client-Hints headers (https://docs.imgix.com/apis/url/format/ch) */
  ch?: InputMaybe<Scalars['String']>;
  /** Specifies the output chroma subsampling rate. (https://docs.imgix.com/apis/url/format/chromasub) */
  chromasub?: InputMaybe<Scalars['Int']>;
  /** Limits the number of unique colors in an image. (https://docs.imgix.com/apis/url/format/colorquant) */
  colorquant?: InputMaybe<Scalars['Int']>;
  /** Specifies how many colors to include in a palette-extraction response. (https://docs.imgix.com/apis/url/color-palette/colors) */
  colors?: InputMaybe<Scalars['Int']>;
  /** Adjusts the contrast of the source image. (https://docs.imgix.com/apis/url/adjustment/con) */
  con?: InputMaybe<Scalars['Int']>;
  /** Specifies the radius value for a rounded corner mask. (https://docs.imgix.com/apis/url/mask/corner-radius) */
  cornerRadius?: InputMaybe<Scalars['String']>;
  /** Specifies how to crop an image. (https://docs.imgix.com/apis/url/size/crop) */
  crop?: InputMaybe<Scalars['String']>;
  /** Specifies the color space of the output image. (https://docs.imgix.com/apis/url/format/cs) */
  cs?: InputMaybe<Scalars['String']>;
  /** Forces a URL to use send-file in its response. (https://docs.imgix.com/apis/url/format/dl) */
  dl?: InputMaybe<Scalars['String']>;
  /** Sets the DPI value in the EXIF header. (https://docs.imgix.com/apis/url/format/dpi) */
  dpi?: InputMaybe<Scalars['Int']>;
  /** Adjusts the device-pixel ratio of the output image. (https://docs.imgix.com/apis/url/dpr) */
  dpr?: InputMaybe<Scalars['Float']>;
  /** Changes the alpha of the duotone effect atop the source image. (https://docs.imgix.com/apis/url/stylize/duotone-alpha) */
  duotoneAlpha?: InputMaybe<Scalars['Int']>;
  /** Applies a duotone effect to the source image. (https://docs.imgix.com/apis/url/stylize/duotone) */
  duotone?: InputMaybe<Scalars['String']>;
  /** Adjusts the exposure of the output image. (https://docs.imgix.com/apis/url/adjustment/exp) */
  exp?: InputMaybe<Scalars['Int']>;
  /** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. (https://docs.imgix.com/apis/url/expires) */
  expires?: InputMaybe<Scalars['String']>;
  /** Selects a face to crop to. (https://docs.imgix.com/apis/url/face-detection/faceindex) */
  faceindex?: InputMaybe<Scalars['Int']>;
  /** Adjusts padding around a selected face. (https://docs.imgix.com/apis/url/face-detection/facepad) */
  facepad?: InputMaybe<Scalars['Float']>;
  /** Specifies that face data should be included in output when combined with `fm=json`. (https://docs.imgix.com/apis/url/face-detection/faces) */
  faces?: InputMaybe<Scalars['Int']>;
  /** Sets the fill color for images with additional space created by the fit setting (https://docs.imgix.com/apis/url/fill/fill-color) */
  fillColor?: InputMaybe<Scalars['String']>;
  /** Determines how to fill in additional space created by the fit setting (https://docs.imgix.com/apis/url/fill/fill) */
  fill?: InputMaybe<Scalars['String']>;
  /** Specifies how to map the source image to the output image dimensions. (https://docs.imgix.com/apis/url/size/fit) */
  fit?: InputMaybe<Scalars['String']>;
  /** Flips an image on a specified axis. (https://docs.imgix.com/apis/url/rotation/flip) */
  flip?: InputMaybe<Scalars['String']>;
  /** Changes the format of the output image. (https://docs.imgix.com/apis/url/format/fm) */
  fm?: InputMaybe<Scalars['String']>;
  /** Displays crosshairs identifying the location of the set focal point (https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug) */
  fpDebug?: InputMaybe<Scalars['Boolean']>;
  /** Sets the relative horizontal value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-x) */
  fpX?: InputMaybe<Scalars['Float']>;
  /** Sets the relative vertical value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-y) */
  fpY?: InputMaybe<Scalars['Float']>;
  /** Sets the relative zoom value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-z) */
  fpZ?: InputMaybe<Scalars['Float']>;
  /** Adjusts the gamma of the source image. (https://docs.imgix.com/apis/url/adjustment/gam) */
  gam?: InputMaybe<Scalars['Int']>;
  /** Sets grid colors for the transparency checkerboard grid. (undefined) */
  gridColors?: InputMaybe<Scalars['String']>;
  /** Sets grid size for the transparency checkerboard grid. (undefined) */
  gridSize?: InputMaybe<Scalars['Int']>;
  /** Adjusts the height of the output image. (https://docs.imgix.com/apis/url/size/h) */
  h?: InputMaybe<Scalars['String']>;
  /** Adjusts the highlights of the source image. (https://docs.imgix.com/apis/url/adjustment/high) */
  high?: InputMaybe<Scalars['Int']>;
  /** Applies a half-tone effect to the source image. (https://docs.imgix.com/apis/url/stylize/htn) */
  htn?: InputMaybe<Scalars['Int']>;
  /** Adjusts the hue of the source image. (https://docs.imgix.com/apis/url/adjustment/hue) */
  hue?: InputMaybe<Scalars['Int']>;
  /** Inverts the colors on the source image. (https://docs.imgix.com/apis/url/adjustment/invert) */
  invert?: InputMaybe<Scalars['Boolean']>;
  /** Determine if IPTC data should be passed for JPEG images. (undefined) */
  iptc?: InputMaybe<Scalars['String']>;
  /** Specifies that the output image should be a lossless variant. (https://docs.imgix.com/apis/url/format/lossless) */
  lossless?: InputMaybe<Scalars['Boolean']>;
  /** Changes the watermark alignment relative to the parent image. (https://docs.imgix.com/apis/url/watermark/mark-align) */
  markAlign?: InputMaybe<Scalars['String']>;
  /** Changes the alpha of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-alpha) */
  markAlpha?: InputMaybe<Scalars['Int']>;
  /** Changes base URL of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-base) */
  markBase?: InputMaybe<Scalars['String']>;
  /** Specifies the fit mode for watermark images. (https://docs.imgix.com/apis/url/watermark/mark-fit) */
  markFit?: InputMaybe<Scalars['String']>;
  /** Adjusts the height of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-h) */
  markH?: InputMaybe<Scalars['String']>;
  /** Applies padding to the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-pad) */
  markPad?: InputMaybe<Scalars['Int']>;
  /** Rotates a watermark or tiled watermarks by a specified number of degrees. (https://docs.imgix.com/apis/url/watermark/mark-rot) */
  markRot?: InputMaybe<Scalars['Float']>;
  /** Adjusts the scale of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-scale) */
  markScale?: InputMaybe<Scalars['Int']>;
  /** Adds tiled watermark. (https://docs.imgix.com/apis/url/watermark/mark-tile) */
  markTile?: InputMaybe<Scalars['String']>;
  /** Adjusts the width of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-w) */
  markW?: InputMaybe<Scalars['String']>;
  /** Adjusts the x-offset of the watermark image relative to its parent. (https://docs.imgix.com/apis/url/watermark/mark-x) */
  markX?: InputMaybe<Scalars['Int']>;
  /** Adjusts the y-offset of the watermark image relative to its parent. (https://docs.imgix.com/apis/url/watermark/mark-y) */
  markY?: InputMaybe<Scalars['Int']>;
  /** Specifies the location of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark) */
  mark?: InputMaybe<Scalars['String']>;
  /** Colors the background of the transparent mask area of images (https://docs.imgix.com/apis/url/mask/mask-bg) */
  maskBg?: InputMaybe<Scalars['String']>;
  /** Defines the type of mask and specifies the URL if that type is selected. (https://docs.imgix.com/apis/url/mask) */
  mask?: InputMaybe<Scalars['String']>;
  /** Specifies the maximum height of the output image in pixels. (https://docs.imgix.com/apis/url/size/max-height) */
  maxH?: InputMaybe<Scalars['Int']>;
  /** Specifies the maximum width of the output image in pixels. (https://docs.imgix.com/apis/url/size/max-width) */
  maxW?: InputMaybe<Scalars['Int']>;
  /** Specifies the minimum height of the output image in pixels. (https://docs.imgix.com/apis/url/size/min-height) */
  minH?: InputMaybe<Scalars['Int']>;
  /** Specifies the minimum width of the output image in pixels. (https://docs.imgix.com/apis/url/size/min-width) */
  minW?: InputMaybe<Scalars['Int']>;
  /** Applies a monochrome effect to the source image. (https://docs.imgix.com/apis/url/stylize/monochrome) */
  monochrome?: InputMaybe<Scalars['String']>;
  /** Reduces the noise in an image. (https://docs.imgix.com/apis/url/noise-reduction/nr) */
  nr?: InputMaybe<Scalars['Int']>;
  /** Provides a threshold by which to sharpen an image. (https://docs.imgix.com/apis/url/noise-reduction/nrs) */
  nrs?: InputMaybe<Scalars['Int']>;
  /** Changes the image orientation. (https://docs.imgix.com/apis/url/rotation/orient) */
  orient?: InputMaybe<Scalars['Int']>;
  /** Sets bottom padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-bottom) */
  padBottom?: InputMaybe<Scalars['Int']>;
  /** Sets left padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-left) */
  padLeft?: InputMaybe<Scalars['Int']>;
  /** Sets right padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-right) */
  padRight?: InputMaybe<Scalars['Int']>;
  /** Sets top padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-top) */
  padTop?: InputMaybe<Scalars['Int']>;
  /** Pads an image. (https://docs.imgix.com/apis/url/border-and-padding/pad) */
  pad?: InputMaybe<Scalars['Int']>;
  /** Selects a page from a PDF for display. (https://docs.imgix.com/apis/url/pdf/page) */
  page?: InputMaybe<Scalars['Int']>;
  /** Specifies an output format for palette-extraction. (https://docs.imgix.com/apis/url/color-palette/palette) */
  palette?: InputMaybe<Scalars['String']>;
  /** Enables or disables PDF annotation. (https://docs.imgix.com/apis/url/pdf/pdf-annotation) */
  pdfAnnotation?: InputMaybe<Scalars['Boolean']>;
  /** Specifies a CSS prefix for all classes in palette-extraction. (https://docs.imgix.com/apis/url/color-palette/prefix) */
  prefix?: InputMaybe<Scalars['String']>;
  /** Applies a pixelation effect to an image. (https://docs.imgix.com/apis/url/stylize/px) */
  px?: InputMaybe<Scalars['Int']>;
  /** Adjusts the quality of an output image. (https://docs.imgix.com/apis/url/format/q) */
  q?: InputMaybe<Scalars['Int']>;
  /** Crops an image to a specified rectangle. (https://docs.imgix.com/apis/url/size/rect) */
  rect?: InputMaybe<Scalars['String']>;
  /** Rotates an image by a specified number of degrees. (https://docs.imgix.com/apis/url/rotation/rot) */
  rot?: InputMaybe<Scalars['Float']>;
  /** Adjusts the saturation of an image. (https://docs.imgix.com/apis/url/adjustment/sat) */
  sat?: InputMaybe<Scalars['Int']>;
  /** Applies a sepia effect to an image. (https://docs.imgix.com/apis/url/stylize/sepia) */
  sepia?: InputMaybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. (https://docs.imgix.com/apis/url/adjustment/shad) */
  shad?: InputMaybe<Scalars['Float']>;
  /** Adjusts the sharpness of the source image. (https://docs.imgix.com/apis/url/adjustment/sharp) */
  sharp?: InputMaybe<Scalars['Float']>;
  /** Adds checkerboard behind images which support transparency. (https://docs.imgix.com/apis/url/fill/transparency) */
  transparency?: InputMaybe<Scalars['String']>;
  /** Specifies a trim color on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-color) */
  trimColor?: InputMaybe<Scalars['String']>;
  /** Specifies the mean difference on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-md) */
  trimMd?: InputMaybe<Scalars['Float']>;
  /** Pads the area of the source image before trimming. (https://docs.imgix.com/apis/url/trim/trim-pad) */
  trimPad?: InputMaybe<Scalars['Int']>;
  /** Specifies the standard deviation on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-sd) */
  trimSd?: InputMaybe<Scalars['Float']>;
  /** Specifies the tolerance on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-tol) */
  trimTol?: InputMaybe<Scalars['Float']>;
  /** Trims the source image. (https://docs.imgix.com/apis/url/trim/trim) */
  trim?: InputMaybe<Scalars['String']>;
  /** Sets the vertical and horizontal alignment of rendered text relative to the base image. (https://docs.imgix.com/apis/url/text/txt-align) */
  txtAlign?: InputMaybe<Scalars['String']>;
  /** Sets the clipping properties of rendered text. (https://docs.imgix.com/apis/url/text/txt-clip) */
  txtClip?: InputMaybe<Scalars['String']>;
  /** Specifies the color of rendered text. (https://docs.imgix.com/apis/url/text/txt-color) */
  txtColor?: InputMaybe<Scalars['String']>;
  /** Specifies the fit approach for rendered text. (https://docs.imgix.com/apis/url/text/txt-fit) */
  txtFit?: InputMaybe<Scalars['String']>;
  /** Selects a font for rendered text. (https://docs.imgix.com/apis/url/text/txt-font) */
  txtFont?: InputMaybe<Scalars['String']>;
  /** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. (https://docs.imgix.com/apis/url/typesetting/txt-lead) */
  txtLead?: InputMaybe<Scalars['Int']>;
  /** Controls the level of ligature substitution (https://docs.imgix.com/apis/url/text/txt-lig) */
  txtLig?: InputMaybe<Scalars['Int']>;
  /** Specifies a text outline color. (https://docs.imgix.com/apis/url/text/txt-line-color) */
  txtLineColor?: InputMaybe<Scalars['String']>;
  /** Outlines the rendered text with a specified color. (https://docs.imgix.com/apis/url/text/txt-line) */
  txtLine?: InputMaybe<Scalars['Int']>;
  /** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. (https://docs.imgix.com/apis/url/text/txt-pad) */
  txtPad?: InputMaybe<Scalars['Int']>;
  /** Applies a shadow to rendered text. (https://docs.imgix.com/apis/url/text/txt-shad) */
  txtShad?: InputMaybe<Scalars['Float']>;
  /** Sets the font size of rendered text. (https://docs.imgix.com/apis/url/text/txt-size) */
  txtSize?: InputMaybe<Scalars['Int']>;
  /** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. (https://docs.imgix.com/apis/url/typesetting/txt-track) */
  txtTrack?: InputMaybe<Scalars['Int']>;
  /** Sets the width of rendered text. (https://docs.imgix.com/apis/url/text/txt-width) */
  txtWidth?: InputMaybe<Scalars['Int']>;
  /** Sets the text string to render. (https://docs.imgix.com/apis/url/text/txt) */
  txt?: InputMaybe<Scalars['String']>;
  /** Sharpens the source image using an unsharp mask. (https://docs.imgix.com/apis/url/adjustment/usm) */
  usm?: InputMaybe<Scalars['Int']>;
  /** Specifies the radius for an unsharp mask operation. (https://docs.imgix.com/apis/url/adjustment/usmrad) */
  usmrad?: InputMaybe<Scalars['Float']>;
  /** Adjusts the vibrance of an image. (https://docs.imgix.com/apis/url/adjustment/vib) */
  vib?: InputMaybe<Scalars['Int']>;
  /** Adjusts the width of the output image. (https://docs.imgix.com/apis/url/size/w) */
  w?: InputMaybe<Scalars['String']>;
};

export type DatoCmsColorField = {
  red?: Maybe<Scalars['Int']>;
  green?: Maybe<Scalars['Int']>;
  blue?: Maybe<Scalars['Int']>;
  alpha?: Maybe<Scalars['Int']>;
  rgb?: Maybe<Scalars['String']>;
  hex?: Maybe<Scalars['String']>;
};

export type DatoCmsFileField = {
  size?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  isImage?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  smartTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  filename?: Maybe<Scalars['String']>;
  basename?: Maybe<Scalars['String']>;
  exifInfo?: Maybe<Scalars['JSON']>;
  mimeType?: Maybe<Scalars['String']>;
  colors?: Maybe<Array<Maybe<DatoCmsColorField>>>;
  blurhash?: Maybe<Scalars['String']>;
  originalId?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  video?: Maybe<DatoCmsAssetVideo>;
  fluid?: Maybe<DatoCmsFluid>;
  sizes?: Maybe<DatoCmsFluid>;
  fixed?: Maybe<DatoCmsFixed>;
  resolutions?: Maybe<DatoCmsFixed>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  alt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  customData?: Maybe<Scalars['JSON']>;
  focalPoint?: Maybe<DatoCmsFocalPoint>;
};


export type DatoCmsFileFieldUrlArgs = {
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
};


export type DatoCmsFileFieldCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DatoCmsFileFieldFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
};


export type DatoCmsFileFieldSizesArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
};


export type DatoCmsFileFieldFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
};


export type DatoCmsFileFieldResolutionsArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
};


export type DatoCmsFileFieldGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  placeholder?: InputMaybe<DatoImagePlaceholder>;
};

export type DatoImagePlaceholder =
  | 'NONE'
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED';

export type DatoCmsFocalPoint = {
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type DatoCmsLatLonField = {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type DatoCmsMetaField = {
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  publishedAt?: Maybe<Scalars['Date']>;
  firstPublishedAt?: Maybe<Scalars['Date']>;
  isValid?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
};


export type DatoCmsMetaFieldCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DatoCmsMetaFieldUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DatoCmsMetaFieldPublishedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DatoCmsMetaFieldFirstPublishedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DatoCmsSeoField = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  twitterCard?: Maybe<Scalars['String']>;
  image?: Maybe<DatoCmsAsset>;
};

export type DatoCmsSeoMetaTags = Node & {
  tags?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsVideoField = {
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerUid?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type DatoCmsTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsAllLocalesForDatoCmsHomePageAboutTitle = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageProjectsTitle = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageSkillsTitle = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageCoverTitleOne = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageHighlightedProject = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Array<Maybe<DatoCmsProject>>>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageSkills = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Array<Maybe<DatoCmsSkillGroup>>>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageCoverTitleTwo = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageProjects = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Array<Maybe<DatoCmsProject>>>;
};

export type DatoCmsDatoCmsHomePageAboutTextStructuredText = {
  value?: Maybe<Scalars['JSON']>;
  blocks?: Maybe<Array<Maybe<Scalars['String']>>>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageAboutText = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<DatoCmsDatoCmsHomePageAboutTextStructuredText>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageCoverTitleThree = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageAboutParagraphOne = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageAboutParagraphTwo = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageAboutParagraphThree = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageSeeResumeButtonTitle = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsHomePage = Node & {
  aboutTitle?: Maybe<Scalars['String']>;
  _allAboutTitleLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHomePageAboutTitle>>>;
  projectsTitle?: Maybe<Scalars['String']>;
  _allProjectsTitleLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHomePageProjectsTitle>>>;
  skillsTitle?: Maybe<Scalars['String']>;
  _allSkillsTitleLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHomePageSkillsTitle>>>;
  coverTitleOne?: Maybe<Scalars['String']>;
  _allCoverTitleOneLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHomePageCoverTitleOne>>>;
  highlightedProject?: Maybe<Array<Maybe<DatoCmsProject>>>;
  _allHighlightedProjectLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHomePageHighlightedProject>>>;
  skills?: Maybe<Array<Maybe<DatoCmsSkillGroup>>>;
  _allSkillsLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHomePageSkills>>>;
  aboutImage?: Maybe<DatoCmsFileField>;
  coverTitleTwo?: Maybe<Scalars['String']>;
  _allCoverTitleTwoLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHomePageCoverTitleTwo>>>;
  projects?: Maybe<Array<Maybe<DatoCmsProject>>>;
  _allProjectsLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHomePageProjects>>>;
  aboutText?: Maybe<DatoCmsDatoCmsHomePageAboutTextStructuredText>;
  _allAboutTextLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHomePageAboutText>>>;
  coverTitleThree?: Maybe<Scalars['String']>;
  _allCoverTitleThreeLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHomePageCoverTitleThree>>>;
  aboutParagraphOne?: Maybe<Scalars['String']>;
  _allAboutParagraphOneLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHomePageAboutParagraphOne>>>;
  aboutParagraphTwo?: Maybe<Scalars['String']>;
  _allAboutParagraphTwoLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHomePageAboutParagraphTwo>>>;
  aboutParagraphThree?: Maybe<Scalars['String']>;
  _allAboutParagraphThreeLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHomePageAboutParagraphThree>>>;
  seeResumeButtonTitle?: Maybe<Scalars['String']>;
  _allSeeResumeButtonTitleLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHomePageSeeResumeButtonTitle>>>;
  meta?: Maybe<DatoCmsMetaField>;
  originalId?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  model?: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsSkillGroup = Node & {
  title?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Maybe<DatoCmsSkill>>>;
  meta?: Maybe<DatoCmsMetaField>;
  originalId?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  model?: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsSkill = Node & {
  name?: Maybe<Scalars['String']>;
  meta?: Maybe<DatoCmsMetaField>;
  originalId?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  model?: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsProject = Node & {
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<DatoCmsFileField>;
  url?: Maybe<Scalars['String']>;
  meta?: Maybe<DatoCmsMetaField>;
  originalId?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  model?: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsAllLocalesForDatoCmsHeaderAbout = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderProjects = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderSkills = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderContact = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsHeader = Node & {
  about?: Maybe<Scalars['String']>;
  _allAboutLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHeaderAbout>>>;
  projects?: Maybe<Scalars['String']>;
  _allProjectsLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHeaderProjects>>>;
  skills?: Maybe<Scalars['String']>;
  _allSkillsLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHeaderSkills>>>;
  contact?: Maybe<Scalars['String']>;
  _allContactLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsHeaderContact>>>;
  meta?: Maybe<DatoCmsMetaField>;
  originalId?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  model?: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsAllLocalesForDatoCmsFooterContact = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsFooterResume = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsFooterProjects = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsFooterSocialMediaTitle = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsAllLocalesForDatoCmsFooterLinkedin = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DatoCmsFooter = Node & {
  contact?: Maybe<Scalars['String']>;
  _allContactLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsFooterContact>>>;
  resume?: Maybe<Scalars['String']>;
  _allResumeLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsFooterResume>>>;
  projects?: Maybe<Scalars['String']>;
  _allProjectsLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsFooterProjects>>>;
  socialMediaTitle?: Maybe<Scalars['String']>;
  _allSocialMediaTitleLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsFooterSocialMediaTitle>>>;
  linkedin?: Maybe<Scalars['String']>;
  _allLinkedinLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsFooterLinkedin>>>;
  linkedinUrl?: Maybe<Scalars['String']>;
  meta?: Maybe<DatoCmsMetaField>;
  originalId?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  model?: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsAsset = Node & {
  size?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  isImage?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  smartTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  filename?: Maybe<Scalars['String']>;
  basename?: Maybe<Scalars['String']>;
  exifInfo?: Maybe<Scalars['JSON']>;
  mimeType?: Maybe<Scalars['String']>;
  colors?: Maybe<Array<Maybe<DatoCmsColorField>>>;
  blurhash?: Maybe<Scalars['String']>;
  originalId?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  video?: Maybe<DatoCmsAssetVideo>;
  fluid?: Maybe<DatoCmsFluid>;
  sizes?: Maybe<DatoCmsFluid>;
  fixed?: Maybe<DatoCmsFixed>;
  resolutions?: Maybe<DatoCmsFixed>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DatoCmsAssetUrlArgs = {
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
};


export type DatoCmsAssetCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DatoCmsAssetFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
};


export type DatoCmsAssetSizesArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
};


export type DatoCmsAssetFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
};


export type DatoCmsAssetResolutionsArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
};


export type DatoCmsAssetGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  placeholder?: InputMaybe<DatoImagePlaceholder>;
};

export type DatoCmsAssetVideoThumbnailFormat =
  | 'jpg'
  | 'png'
  | 'gif';

export type DatoCmsAssetVideoMp4ResolutionQuality =
  | 'low'
  | 'medium'
  | 'high';

export type DatoCmsAssetVideo = {
  muxPlaybackId?: Maybe<Scalars['String']>;
  frameRate?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  streamingUrl?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  mp4Url?: Maybe<Scalars['String']>;
};


export type DatoCmsAssetVideoThumbnailUrlArgs = {
  format?: InputMaybe<DatoCmsAssetVideoThumbnailFormat>;
};


export type DatoCmsAssetVideoMp4UrlArgs = {
  res?: InputMaybe<DatoCmsAssetVideoMp4ResolutionQuality>;
  exactRes?: InputMaybe<DatoCmsAssetVideoMp4ResolutionQuality>;
};

export type DatoCmsSite = Node & {
  name?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  locales?: Maybe<Array<Maybe<Scalars['String']>>>;
  domain?: Maybe<Scalars['String']>;
  internalDomain?: Maybe<Scalars['String']>;
  noIndex?: Maybe<Scalars['Boolean']>;
  globalSeo?: Maybe<DatoCmsGlobalSeo>;
  faviconMetaTags?: Maybe<DatoCmsFaviconMetaTags>;
  originalId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsFaviconMetaTags = Node & {
  tags?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsGlobalSeo = {
  siteName?: Maybe<Scalars['String']>;
  titleSuffix?: Maybe<Scalars['String']>;
  twitterAccount?: Maybe<Scalars['String']>;
  facebookPageUrl?: Maybe<Scalars['String']>;
  fallbackSeo?: Maybe<DatoCmsSeoField>;
};

export type DatoCmsField = Node & {
  label?: Maybe<Scalars['String']>;
  fieldType?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
  localized?: Maybe<Scalars['Boolean']>;
  validators?: Maybe<Scalars['JSON']>;
  position?: Maybe<Scalars['Int']>;
  appeareance?: Maybe<Scalars['JSON']>;
  defaultValue?: Maybe<Scalars['JSON']>;
  originalId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsModel = Node & {
  name?: Maybe<Scalars['String']>;
  singleton?: Maybe<Scalars['Boolean']>;
  sortable?: Maybe<Scalars['Boolean']>;
  apiKey?: Maybe<Scalars['String']>;
  orderingDirection?: Maybe<Scalars['String']>;
  tree?: Maybe<Scalars['Boolean']>;
  modularBlock?: Maybe<Scalars['Boolean']>;
  draftModeActive?: Maybe<Scalars['Boolean']>;
  allLocalesRequired?: Maybe<Scalars['Boolean']>;
  collectionAppeareance?: Maybe<Scalars['String']>;
  hasSingletonItem?: Maybe<Scalars['Boolean']>;
  originalId?: Maybe<Scalars['String']>;
  fields?: Maybe<DatoCmsFaviconMetaTags>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  datoCmsSeoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  allDatoCmsSeoMetaTags: DatoCmsSeoMetaTagsConnection;
  datoCmsTextNode?: Maybe<DatoCmsTextNode>;
  allDatoCmsTextNode: DatoCmsTextNodeConnection;
  datoCmsHomePage?: Maybe<DatoCmsHomePage>;
  allDatoCmsHomePage: DatoCmsHomePageConnection;
  datoCmsSkillGroup?: Maybe<DatoCmsSkillGroup>;
  allDatoCmsSkillGroup: DatoCmsSkillGroupConnection;
  datoCmsSkill?: Maybe<DatoCmsSkill>;
  allDatoCmsSkill: DatoCmsSkillConnection;
  datoCmsProject?: Maybe<DatoCmsProject>;
  allDatoCmsProject: DatoCmsProjectConnection;
  datoCmsHeader?: Maybe<DatoCmsHeader>;
  allDatoCmsHeader: DatoCmsHeaderConnection;
  datoCmsFooter?: Maybe<DatoCmsFooter>;
  allDatoCmsFooter: DatoCmsFooterConnection;
  datoCmsAsset?: Maybe<DatoCmsAsset>;
  allDatoCmsAsset: DatoCmsAssetConnection;
  datoCmsSite?: Maybe<DatoCmsSite>;
  allDatoCmsSite: DatoCmsSiteConnection;
  datoCmsFaviconMetaTags?: Maybe<DatoCmsFaviconMetaTags>;
  allDatoCmsFaviconMetaTags: DatoCmsFaviconMetaTagsConnection;
  datoCmsField?: Maybe<DatoCmsField>;
  allDatoCmsField: DatoCmsFieldConnection;
  datoCmsModel?: Maybe<DatoCmsModel>;
  allDatoCmsModel: DatoCmsModelConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsSeoMetaTagsArgs = {
  tags?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsSeoMetaTagsArgs = {
  filter?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  sort?: InputMaybe<DatoCmsSeoMetaTagsSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsTextNodeArgs = {
  filter?: InputMaybe<DatoCmsTextNodeFilterInput>;
  sort?: InputMaybe<DatoCmsTextNodeSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsHomePageArgs = {
  aboutTitle?: InputMaybe<StringQueryOperatorInput>;
  _allAboutTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageAboutTitleFilterListInput>;
  projectsTitle?: InputMaybe<StringQueryOperatorInput>;
  _allProjectsTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageProjectsTitleFilterListInput>;
  skillsTitle?: InputMaybe<StringQueryOperatorInput>;
  _allSkillsTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageSkillsTitleFilterListInput>;
  coverTitleOne?: InputMaybe<StringQueryOperatorInput>;
  _allCoverTitleOneLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageCoverTitleOneFilterListInput>;
  highlightedProject?: InputMaybe<DatoCmsProjectFilterListInput>;
  _allHighlightedProjectLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageHighlightedProjectFilterListInput>;
  skills?: InputMaybe<DatoCmsSkillGroupFilterListInput>;
  _allSkillsLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageSkillsFilterListInput>;
  aboutImage?: InputMaybe<DatoCmsFileFieldFilterInput>;
  coverTitleTwo?: InputMaybe<StringQueryOperatorInput>;
  _allCoverTitleTwoLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageCoverTitleTwoFilterListInput>;
  projects?: InputMaybe<DatoCmsProjectFilterListInput>;
  _allProjectsLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageProjectsFilterListInput>;
  aboutText?: InputMaybe<DatoCmsDatoCmsHomePageAboutTextStructuredTextFilterInput>;
  _allAboutTextLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageAboutTextFilterListInput>;
  coverTitleThree?: InputMaybe<StringQueryOperatorInput>;
  _allCoverTitleThreeLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageCoverTitleThreeFilterListInput>;
  aboutParagraphOne?: InputMaybe<StringQueryOperatorInput>;
  _allAboutParagraphOneLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageAboutParagraphOneFilterListInput>;
  aboutParagraphTwo?: InputMaybe<StringQueryOperatorInput>;
  _allAboutParagraphTwoLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageAboutParagraphTwoFilterListInput>;
  aboutParagraphThree?: InputMaybe<StringQueryOperatorInput>;
  _allAboutParagraphThreeLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageAboutParagraphThreeFilterListInput>;
  seeResumeButtonTitle?: InputMaybe<StringQueryOperatorInput>;
  _allSeeResumeButtonTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageSeeResumeButtonTitleFilterListInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsHomePageArgs = {
  filter?: InputMaybe<DatoCmsHomePageFilterInput>;
  sort?: InputMaybe<DatoCmsHomePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsSkillGroupArgs = {
  title?: InputMaybe<StringQueryOperatorInput>;
  skills?: InputMaybe<DatoCmsSkillFilterListInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsSkillGroupArgs = {
  filter?: InputMaybe<DatoCmsSkillGroupFilterInput>;
  sort?: InputMaybe<DatoCmsSkillGroupSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsSkillArgs = {
  name?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsSkillArgs = {
  filter?: InputMaybe<DatoCmsSkillFilterInput>;
  sort?: InputMaybe<DatoCmsSkillSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsProjectArgs = {
  title?: InputMaybe<StringQueryOperatorInput>;
  subtitle?: InputMaybe<StringQueryOperatorInput>;
  backgroundImage?: InputMaybe<DatoCmsFileFieldFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsProjectArgs = {
  filter?: InputMaybe<DatoCmsProjectFilterInput>;
  sort?: InputMaybe<DatoCmsProjectSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsHeaderArgs = {
  about?: InputMaybe<StringQueryOperatorInput>;
  _allAboutLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderAboutFilterListInput>;
  projects?: InputMaybe<StringQueryOperatorInput>;
  _allProjectsLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderProjectsFilterListInput>;
  skills?: InputMaybe<StringQueryOperatorInput>;
  _allSkillsLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderSkillsFilterListInput>;
  contact?: InputMaybe<StringQueryOperatorInput>;
  _allContactLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderContactFilterListInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsHeaderArgs = {
  filter?: InputMaybe<DatoCmsHeaderFilterInput>;
  sort?: InputMaybe<DatoCmsHeaderSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsFooterArgs = {
  contact?: InputMaybe<StringQueryOperatorInput>;
  _allContactLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsFooterContactFilterListInput>;
  resume?: InputMaybe<StringQueryOperatorInput>;
  _allResumeLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsFooterResumeFilterListInput>;
  projects?: InputMaybe<StringQueryOperatorInput>;
  _allProjectsLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsFooterProjectsFilterListInput>;
  socialMediaTitle?: InputMaybe<StringQueryOperatorInput>;
  _allSocialMediaTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsFooterSocialMediaTitleFilterListInput>;
  linkedin?: InputMaybe<StringQueryOperatorInput>;
  _allLinkedinLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsFooterLinkedinFilterListInput>;
  linkedinUrl?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsFooterArgs = {
  filter?: InputMaybe<DatoCmsFooterFilterInput>;
  sort?: InputMaybe<DatoCmsFooterSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsAssetArgs = {
  size?: InputMaybe<IntQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  format?: InputMaybe<StringQueryOperatorInput>;
  isImage?: InputMaybe<BooleanQueryOperatorInput>;
  notes?: InputMaybe<StringQueryOperatorInput>;
  author?: InputMaybe<StringQueryOperatorInput>;
  copyright?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  smartTags?: InputMaybe<StringQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  basename?: InputMaybe<StringQueryOperatorInput>;
  exifInfo?: InputMaybe<JsonQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  colors?: InputMaybe<DatoCmsColorFieldFilterListInput>;
  blurhash?: InputMaybe<StringQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  video?: InputMaybe<DatoCmsAssetVideoFilterInput>;
  fluid?: InputMaybe<DatoCmsFluidFilterInput>;
  sizes?: InputMaybe<DatoCmsFluidFilterInput>;
  fixed?: InputMaybe<DatoCmsFixedFilterInput>;
  resolutions?: InputMaybe<DatoCmsFixedFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsAssetArgs = {
  filter?: InputMaybe<DatoCmsAssetFilterInput>;
  sort?: InputMaybe<DatoCmsAssetSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsSiteArgs = {
  name?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  locales?: InputMaybe<StringQueryOperatorInput>;
  domain?: InputMaybe<StringQueryOperatorInput>;
  internalDomain?: InputMaybe<StringQueryOperatorInput>;
  noIndex?: InputMaybe<BooleanQueryOperatorInput>;
  globalSeo?: InputMaybe<DatoCmsGlobalSeoFilterInput>;
  faviconMetaTags?: InputMaybe<DatoCmsFaviconMetaTagsFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsSiteArgs = {
  filter?: InputMaybe<DatoCmsSiteFilterInput>;
  sort?: InputMaybe<DatoCmsSiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsFaviconMetaTagsArgs = {
  tags?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsFaviconMetaTagsArgs = {
  filter?: InputMaybe<DatoCmsFaviconMetaTagsFilterInput>;
  sort?: InputMaybe<DatoCmsFaviconMetaTagsSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsFieldArgs = {
  label?: InputMaybe<StringQueryOperatorInput>;
  fieldType?: InputMaybe<StringQueryOperatorInput>;
  apiKey?: InputMaybe<StringQueryOperatorInput>;
  localized?: InputMaybe<BooleanQueryOperatorInput>;
  validators?: InputMaybe<JsonQueryOperatorInput>;
  position?: InputMaybe<IntQueryOperatorInput>;
  appeareance?: InputMaybe<JsonQueryOperatorInput>;
  defaultValue?: InputMaybe<JsonQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsFieldArgs = {
  filter?: InputMaybe<DatoCmsFieldFilterInput>;
  sort?: InputMaybe<DatoCmsFieldSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDatoCmsModelArgs = {
  name?: InputMaybe<StringQueryOperatorInput>;
  singleton?: InputMaybe<BooleanQueryOperatorInput>;
  sortable?: InputMaybe<BooleanQueryOperatorInput>;
  apiKey?: InputMaybe<StringQueryOperatorInput>;
  orderingDirection?: InputMaybe<StringQueryOperatorInput>;
  tree?: InputMaybe<BooleanQueryOperatorInput>;
  modularBlock?: InputMaybe<BooleanQueryOperatorInput>;
  draftModeActive?: InputMaybe<BooleanQueryOperatorInput>;
  allLocalesRequired?: InputMaybe<BooleanQueryOperatorInput>;
  collectionAppeareance?: InputMaybe<StringQueryOperatorInput>;
  hasSingletonItem?: InputMaybe<BooleanQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  fields?: InputMaybe<DatoCmsFaviconMetaTagsFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDatoCmsModelArgs = {
  filter?: InputMaybe<DatoCmsModelFilterInput>;
  sort?: InputMaybe<DatoCmsModelSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<ImageSharpSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  author?: InputMaybe<SiteSiteMetadataAuthorFilterInput>;
};

export type SiteSiteMetadataAuthorFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___author___name'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'trailingSlash'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsSeoMetaTagsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSeoMetaTagsEdge>;
  nodes: Array<DatoCmsSeoMetaTags>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsSeoMetaTagsGroupConnection>;
};


export type DatoCmsSeoMetaTagsConnectionDistinctArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


export type DatoCmsSeoMetaTagsConnectionMaxArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


export type DatoCmsSeoMetaTagsConnectionMinArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


export type DatoCmsSeoMetaTagsConnectionSumArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


export type DatoCmsSeoMetaTagsConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsSeoMetaTagsFieldsEnum;
};

export type DatoCmsSeoMetaTagsEdge = {
  next?: Maybe<DatoCmsSeoMetaTags>;
  node: DatoCmsSeoMetaTags;
  previous?: Maybe<DatoCmsSeoMetaTags>;
};

export type DatoCmsSeoMetaTagsFieldsEnum =
  | 'tags'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DatoCmsSeoMetaTagsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSeoMetaTagsEdge>;
  nodes: Array<DatoCmsSeoMetaTags>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsSeoMetaTagsGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsSeoMetaTagsGroupConnectionDistinctArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


export type DatoCmsSeoMetaTagsGroupConnectionMaxArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


export type DatoCmsSeoMetaTagsGroupConnectionMinArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


export type DatoCmsSeoMetaTagsGroupConnectionSumArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


export type DatoCmsSeoMetaTagsGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsSeoMetaTagsFieldsEnum;
};

export type DatoCmsSeoMetaTagsFilterInput = {
  tags?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsSeoMetaTagsSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsSeoMetaTagsFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsTextNodeEdge>;
  nodes: Array<DatoCmsTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsTextNodeGroupConnection>;
};


export type DatoCmsTextNodeConnectionDistinctArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


export type DatoCmsTextNodeConnectionMaxArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


export type DatoCmsTextNodeConnectionMinArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


export type DatoCmsTextNodeConnectionSumArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


export type DatoCmsTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsTextNodeFieldsEnum;
};

export type DatoCmsTextNodeEdge = {
  next?: Maybe<DatoCmsTextNode>;
  node: DatoCmsTextNode;
  previous?: Maybe<DatoCmsTextNode>;
};

export type DatoCmsTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DatoCmsTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsTextNodeEdge>;
  nodes: Array<DatoCmsTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsTextNodeGroupConnectionDistinctArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


export type DatoCmsTextNodeGroupConnectionMaxArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


export type DatoCmsTextNodeGroupConnectionMinArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


export type DatoCmsTextNodeGroupConnectionSumArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


export type DatoCmsTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsTextNodeFieldsEnum;
};

export type DatoCmsTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsTextNodeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsTextNodeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageAboutTitleFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageAboutTitleFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageAboutTitleFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageProjectsTitleFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageProjectsTitleFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageProjectsTitleFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageSkillsTitleFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageSkillsTitleFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageSkillsTitleFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageCoverTitleOneFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageCoverTitleOneFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageCoverTitleOneFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsProjectFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsProjectFilterInput>;
};

export type DatoCmsProjectFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  subtitle?: InputMaybe<StringQueryOperatorInput>;
  backgroundImage?: InputMaybe<DatoCmsFileFieldFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsFileFieldFilterInput = {
  size?: InputMaybe<IntQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  format?: InputMaybe<StringQueryOperatorInput>;
  isImage?: InputMaybe<BooleanQueryOperatorInput>;
  notes?: InputMaybe<StringQueryOperatorInput>;
  author?: InputMaybe<StringQueryOperatorInput>;
  copyright?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  smartTags?: InputMaybe<StringQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  basename?: InputMaybe<StringQueryOperatorInput>;
  exifInfo?: InputMaybe<JsonQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  colors?: InputMaybe<DatoCmsColorFieldFilterListInput>;
  blurhash?: InputMaybe<StringQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  video?: InputMaybe<DatoCmsAssetVideoFilterInput>;
  fluid?: InputMaybe<DatoCmsFluidFilterInput>;
  sizes?: InputMaybe<DatoCmsFluidFilterInput>;
  fixed?: InputMaybe<DatoCmsFixedFilterInput>;
  resolutions?: InputMaybe<DatoCmsFixedFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  alt?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  customData?: InputMaybe<JsonQueryOperatorInput>;
  focalPoint?: InputMaybe<DatoCmsFocalPointFilterInput>;
};

export type DatoCmsColorFieldFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsColorFieldFilterInput>;
};

export type DatoCmsColorFieldFilterInput = {
  red?: InputMaybe<IntQueryOperatorInput>;
  green?: InputMaybe<IntQueryOperatorInput>;
  blue?: InputMaybe<IntQueryOperatorInput>;
  alpha?: InputMaybe<IntQueryOperatorInput>;
  rgb?: InputMaybe<StringQueryOperatorInput>;
  hex?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAssetVideoFilterInput = {
  muxPlaybackId?: InputMaybe<StringQueryOperatorInput>;
  frameRate?: InputMaybe<IntQueryOperatorInput>;
  duration?: InputMaybe<IntQueryOperatorInput>;
  streamingUrl?: InputMaybe<StringQueryOperatorInput>;
  thumbnailUrl?: InputMaybe<StringQueryOperatorInput>;
  mp4Url?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsFocalPointFilterInput = {
  x?: InputMaybe<FloatQueryOperatorInput>;
  y?: InputMaybe<FloatQueryOperatorInput>;
};

export type DatoCmsMetaFieldFilterInput = {
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  firstPublishedAt?: InputMaybe<DateQueryOperatorInput>;
  isValid?: InputMaybe<BooleanQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsModelFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  singleton?: InputMaybe<BooleanQueryOperatorInput>;
  sortable?: InputMaybe<BooleanQueryOperatorInput>;
  apiKey?: InputMaybe<StringQueryOperatorInput>;
  orderingDirection?: InputMaybe<StringQueryOperatorInput>;
  tree?: InputMaybe<BooleanQueryOperatorInput>;
  modularBlock?: InputMaybe<BooleanQueryOperatorInput>;
  draftModeActive?: InputMaybe<BooleanQueryOperatorInput>;
  allLocalesRequired?: InputMaybe<BooleanQueryOperatorInput>;
  collectionAppeareance?: InputMaybe<StringQueryOperatorInput>;
  hasSingletonItem?: InputMaybe<BooleanQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  fields?: InputMaybe<DatoCmsFaviconMetaTagsFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsFaviconMetaTagsFilterInput = {
  tags?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageHighlightedProjectFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageHighlightedProjectFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageHighlightedProjectFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<DatoCmsProjectFilterListInput>;
};

export type DatoCmsSkillGroupFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsSkillGroupFilterInput>;
};

export type DatoCmsSkillGroupFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  skills?: InputMaybe<DatoCmsSkillFilterListInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsSkillFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsSkillFilterInput>;
};

export type DatoCmsSkillFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageSkillsFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageSkillsFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageSkillsFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<DatoCmsSkillGroupFilterListInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageCoverTitleTwoFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageCoverTitleTwoFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageCoverTitleTwoFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageProjectsFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageProjectsFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageProjectsFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<DatoCmsProjectFilterListInput>;
};

export type DatoCmsDatoCmsHomePageAboutTextStructuredTextFilterInput = {
  value?: InputMaybe<JsonQueryOperatorInput>;
  blocks?: InputMaybe<StringQueryOperatorInput>;
  links?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageAboutTextFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageAboutTextFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageAboutTextFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<DatoCmsDatoCmsHomePageAboutTextStructuredTextFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageCoverTitleThreeFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageCoverTitleThreeFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageCoverTitleThreeFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageAboutParagraphOneFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageAboutParagraphOneFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageAboutParagraphOneFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageAboutParagraphTwoFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageAboutParagraphTwoFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageAboutParagraphTwoFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageAboutParagraphThreeFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageAboutParagraphThreeFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageAboutParagraphThreeFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageSeeResumeButtonTitleFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageSeeResumeButtonTitleFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHomePageSeeResumeButtonTitleFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsHomePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsHomePageEdge>;
  nodes: Array<DatoCmsHomePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsHomePageGroupConnection>;
};


export type DatoCmsHomePageConnectionDistinctArgs = {
  field: DatoCmsHomePageFieldsEnum;
};


export type DatoCmsHomePageConnectionMaxArgs = {
  field: DatoCmsHomePageFieldsEnum;
};


export type DatoCmsHomePageConnectionMinArgs = {
  field: DatoCmsHomePageFieldsEnum;
};


export type DatoCmsHomePageConnectionSumArgs = {
  field: DatoCmsHomePageFieldsEnum;
};


export type DatoCmsHomePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsHomePageFieldsEnum;
};

export type DatoCmsHomePageEdge = {
  next?: Maybe<DatoCmsHomePage>;
  node: DatoCmsHomePage;
  previous?: Maybe<DatoCmsHomePage>;
};

export type DatoCmsHomePageFieldsEnum =
  | 'aboutTitle'
  | '_allAboutTitleLocales'
  | '_allAboutTitleLocales___locale'
  | '_allAboutTitleLocales___value'
  | 'projectsTitle'
  | '_allProjectsTitleLocales'
  | '_allProjectsTitleLocales___locale'
  | '_allProjectsTitleLocales___value'
  | 'skillsTitle'
  | '_allSkillsTitleLocales'
  | '_allSkillsTitleLocales___locale'
  | '_allSkillsTitleLocales___value'
  | 'coverTitleOne'
  | '_allCoverTitleOneLocales'
  | '_allCoverTitleOneLocales___locale'
  | '_allCoverTitleOneLocales___value'
  | 'highlightedProject'
  | 'highlightedProject___title'
  | 'highlightedProject___subtitle'
  | 'highlightedProject___backgroundImage___size'
  | 'highlightedProject___backgroundImage___width'
  | 'highlightedProject___backgroundImage___height'
  | 'highlightedProject___backgroundImage___path'
  | 'highlightedProject___backgroundImage___format'
  | 'highlightedProject___backgroundImage___isImage'
  | 'highlightedProject___backgroundImage___notes'
  | 'highlightedProject___backgroundImage___author'
  | 'highlightedProject___backgroundImage___copyright'
  | 'highlightedProject___backgroundImage___tags'
  | 'highlightedProject___backgroundImage___smartTags'
  | 'highlightedProject___backgroundImage___filename'
  | 'highlightedProject___backgroundImage___basename'
  | 'highlightedProject___backgroundImage___exifInfo'
  | 'highlightedProject___backgroundImage___mimeType'
  | 'highlightedProject___backgroundImage___colors'
  | 'highlightedProject___backgroundImage___colors___red'
  | 'highlightedProject___backgroundImage___colors___green'
  | 'highlightedProject___backgroundImage___colors___blue'
  | 'highlightedProject___backgroundImage___colors___alpha'
  | 'highlightedProject___backgroundImage___colors___rgb'
  | 'highlightedProject___backgroundImage___colors___hex'
  | 'highlightedProject___backgroundImage___blurhash'
  | 'highlightedProject___backgroundImage___originalId'
  | 'highlightedProject___backgroundImage___url'
  | 'highlightedProject___backgroundImage___createdAt'
  | 'highlightedProject___backgroundImage___video___muxPlaybackId'
  | 'highlightedProject___backgroundImage___video___frameRate'
  | 'highlightedProject___backgroundImage___video___duration'
  | 'highlightedProject___backgroundImage___video___streamingUrl'
  | 'highlightedProject___backgroundImage___video___thumbnailUrl'
  | 'highlightedProject___backgroundImage___video___mp4Url'
  | 'highlightedProject___backgroundImage___fluid___base64'
  | 'highlightedProject___backgroundImage___fluid___tracedSVG'
  | 'highlightedProject___backgroundImage___fluid___aspectRatio'
  | 'highlightedProject___backgroundImage___fluid___width'
  | 'highlightedProject___backgroundImage___fluid___height'
  | 'highlightedProject___backgroundImage___fluid___src'
  | 'highlightedProject___backgroundImage___fluid___srcSet'
  | 'highlightedProject___backgroundImage___fluid___sizes'
  | 'highlightedProject___backgroundImage___sizes___base64'
  | 'highlightedProject___backgroundImage___sizes___tracedSVG'
  | 'highlightedProject___backgroundImage___sizes___aspectRatio'
  | 'highlightedProject___backgroundImage___sizes___width'
  | 'highlightedProject___backgroundImage___sizes___height'
  | 'highlightedProject___backgroundImage___sizes___src'
  | 'highlightedProject___backgroundImage___sizes___srcSet'
  | 'highlightedProject___backgroundImage___sizes___sizes'
  | 'highlightedProject___backgroundImage___fixed___base64'
  | 'highlightedProject___backgroundImage___fixed___tracedSVG'
  | 'highlightedProject___backgroundImage___fixed___aspectRatio'
  | 'highlightedProject___backgroundImage___fixed___width'
  | 'highlightedProject___backgroundImage___fixed___height'
  | 'highlightedProject___backgroundImage___fixed___src'
  | 'highlightedProject___backgroundImage___fixed___srcSet'
  | 'highlightedProject___backgroundImage___fixed___sizes'
  | 'highlightedProject___backgroundImage___resolutions___base64'
  | 'highlightedProject___backgroundImage___resolutions___tracedSVG'
  | 'highlightedProject___backgroundImage___resolutions___aspectRatio'
  | 'highlightedProject___backgroundImage___resolutions___width'
  | 'highlightedProject___backgroundImage___resolutions___height'
  | 'highlightedProject___backgroundImage___resolutions___src'
  | 'highlightedProject___backgroundImage___resolutions___srcSet'
  | 'highlightedProject___backgroundImage___resolutions___sizes'
  | 'highlightedProject___backgroundImage___gatsbyImageData'
  | 'highlightedProject___backgroundImage___alt'
  | 'highlightedProject___backgroundImage___title'
  | 'highlightedProject___backgroundImage___customData'
  | 'highlightedProject___backgroundImage___focalPoint___x'
  | 'highlightedProject___backgroundImage___focalPoint___y'
  | 'highlightedProject___url'
  | 'highlightedProject___meta___createdAt'
  | 'highlightedProject___meta___updatedAt'
  | 'highlightedProject___meta___publishedAt'
  | 'highlightedProject___meta___firstPublishedAt'
  | 'highlightedProject___meta___isValid'
  | 'highlightedProject___meta___status'
  | 'highlightedProject___originalId'
  | 'highlightedProject___locale'
  | 'highlightedProject___seoMetaTags___tags'
  | 'highlightedProject___seoMetaTags___id'
  | 'highlightedProject___seoMetaTags___parent___id'
  | 'highlightedProject___seoMetaTags___parent___children'
  | 'highlightedProject___seoMetaTags___children'
  | 'highlightedProject___seoMetaTags___children___id'
  | 'highlightedProject___seoMetaTags___children___children'
  | 'highlightedProject___seoMetaTags___internal___content'
  | 'highlightedProject___seoMetaTags___internal___contentDigest'
  | 'highlightedProject___seoMetaTags___internal___description'
  | 'highlightedProject___seoMetaTags___internal___fieldOwners'
  | 'highlightedProject___seoMetaTags___internal___ignoreType'
  | 'highlightedProject___seoMetaTags___internal___mediaType'
  | 'highlightedProject___seoMetaTags___internal___owner'
  | 'highlightedProject___seoMetaTags___internal___type'
  | 'highlightedProject___model___name'
  | 'highlightedProject___model___singleton'
  | 'highlightedProject___model___sortable'
  | 'highlightedProject___model___apiKey'
  | 'highlightedProject___model___orderingDirection'
  | 'highlightedProject___model___tree'
  | 'highlightedProject___model___modularBlock'
  | 'highlightedProject___model___draftModeActive'
  | 'highlightedProject___model___allLocalesRequired'
  | 'highlightedProject___model___collectionAppeareance'
  | 'highlightedProject___model___hasSingletonItem'
  | 'highlightedProject___model___originalId'
  | 'highlightedProject___model___fields___tags'
  | 'highlightedProject___model___fields___id'
  | 'highlightedProject___model___fields___children'
  | 'highlightedProject___model___id'
  | 'highlightedProject___model___parent___id'
  | 'highlightedProject___model___parent___children'
  | 'highlightedProject___model___children'
  | 'highlightedProject___model___children___id'
  | 'highlightedProject___model___children___children'
  | 'highlightedProject___model___internal___content'
  | 'highlightedProject___model___internal___contentDigest'
  | 'highlightedProject___model___internal___description'
  | 'highlightedProject___model___internal___fieldOwners'
  | 'highlightedProject___model___internal___ignoreType'
  | 'highlightedProject___model___internal___mediaType'
  | 'highlightedProject___model___internal___owner'
  | 'highlightedProject___model___internal___type'
  | 'highlightedProject___id'
  | 'highlightedProject___parent___id'
  | 'highlightedProject___parent___parent___id'
  | 'highlightedProject___parent___parent___children'
  | 'highlightedProject___parent___children'
  | 'highlightedProject___parent___children___id'
  | 'highlightedProject___parent___children___children'
  | 'highlightedProject___parent___internal___content'
  | 'highlightedProject___parent___internal___contentDigest'
  | 'highlightedProject___parent___internal___description'
  | 'highlightedProject___parent___internal___fieldOwners'
  | 'highlightedProject___parent___internal___ignoreType'
  | 'highlightedProject___parent___internal___mediaType'
  | 'highlightedProject___parent___internal___owner'
  | 'highlightedProject___parent___internal___type'
  | 'highlightedProject___children'
  | 'highlightedProject___children___id'
  | 'highlightedProject___children___parent___id'
  | 'highlightedProject___children___parent___children'
  | 'highlightedProject___children___children'
  | 'highlightedProject___children___children___id'
  | 'highlightedProject___children___children___children'
  | 'highlightedProject___children___internal___content'
  | 'highlightedProject___children___internal___contentDigest'
  | 'highlightedProject___children___internal___description'
  | 'highlightedProject___children___internal___fieldOwners'
  | 'highlightedProject___children___internal___ignoreType'
  | 'highlightedProject___children___internal___mediaType'
  | 'highlightedProject___children___internal___owner'
  | 'highlightedProject___children___internal___type'
  | 'highlightedProject___internal___content'
  | 'highlightedProject___internal___contentDigest'
  | 'highlightedProject___internal___description'
  | 'highlightedProject___internal___fieldOwners'
  | 'highlightedProject___internal___ignoreType'
  | 'highlightedProject___internal___mediaType'
  | 'highlightedProject___internal___owner'
  | 'highlightedProject___internal___type'
  | '_allHighlightedProjectLocales'
  | '_allHighlightedProjectLocales___locale'
  | '_allHighlightedProjectLocales___value'
  | '_allHighlightedProjectLocales___value___title'
  | '_allHighlightedProjectLocales___value___subtitle'
  | '_allHighlightedProjectLocales___value___backgroundImage___size'
  | '_allHighlightedProjectLocales___value___backgroundImage___width'
  | '_allHighlightedProjectLocales___value___backgroundImage___height'
  | '_allHighlightedProjectLocales___value___backgroundImage___path'
  | '_allHighlightedProjectLocales___value___backgroundImage___format'
  | '_allHighlightedProjectLocales___value___backgroundImage___isImage'
  | '_allHighlightedProjectLocales___value___backgroundImage___notes'
  | '_allHighlightedProjectLocales___value___backgroundImage___author'
  | '_allHighlightedProjectLocales___value___backgroundImage___copyright'
  | '_allHighlightedProjectLocales___value___backgroundImage___tags'
  | '_allHighlightedProjectLocales___value___backgroundImage___smartTags'
  | '_allHighlightedProjectLocales___value___backgroundImage___filename'
  | '_allHighlightedProjectLocales___value___backgroundImage___basename'
  | '_allHighlightedProjectLocales___value___backgroundImage___exifInfo'
  | '_allHighlightedProjectLocales___value___backgroundImage___mimeType'
  | '_allHighlightedProjectLocales___value___backgroundImage___colors'
  | '_allHighlightedProjectLocales___value___backgroundImage___blurhash'
  | '_allHighlightedProjectLocales___value___backgroundImage___originalId'
  | '_allHighlightedProjectLocales___value___backgroundImage___url'
  | '_allHighlightedProjectLocales___value___backgroundImage___createdAt'
  | '_allHighlightedProjectLocales___value___backgroundImage___gatsbyImageData'
  | '_allHighlightedProjectLocales___value___backgroundImage___alt'
  | '_allHighlightedProjectLocales___value___backgroundImage___title'
  | '_allHighlightedProjectLocales___value___backgroundImage___customData'
  | '_allHighlightedProjectLocales___value___url'
  | '_allHighlightedProjectLocales___value___meta___createdAt'
  | '_allHighlightedProjectLocales___value___meta___updatedAt'
  | '_allHighlightedProjectLocales___value___meta___publishedAt'
  | '_allHighlightedProjectLocales___value___meta___firstPublishedAt'
  | '_allHighlightedProjectLocales___value___meta___isValid'
  | '_allHighlightedProjectLocales___value___meta___status'
  | '_allHighlightedProjectLocales___value___originalId'
  | '_allHighlightedProjectLocales___value___locale'
  | '_allHighlightedProjectLocales___value___seoMetaTags___tags'
  | '_allHighlightedProjectLocales___value___seoMetaTags___id'
  | '_allHighlightedProjectLocales___value___seoMetaTags___children'
  | '_allHighlightedProjectLocales___value___model___name'
  | '_allHighlightedProjectLocales___value___model___singleton'
  | '_allHighlightedProjectLocales___value___model___sortable'
  | '_allHighlightedProjectLocales___value___model___apiKey'
  | '_allHighlightedProjectLocales___value___model___orderingDirection'
  | '_allHighlightedProjectLocales___value___model___tree'
  | '_allHighlightedProjectLocales___value___model___modularBlock'
  | '_allHighlightedProjectLocales___value___model___draftModeActive'
  | '_allHighlightedProjectLocales___value___model___allLocalesRequired'
  | '_allHighlightedProjectLocales___value___model___collectionAppeareance'
  | '_allHighlightedProjectLocales___value___model___hasSingletonItem'
  | '_allHighlightedProjectLocales___value___model___originalId'
  | '_allHighlightedProjectLocales___value___model___id'
  | '_allHighlightedProjectLocales___value___model___children'
  | '_allHighlightedProjectLocales___value___id'
  | '_allHighlightedProjectLocales___value___parent___id'
  | '_allHighlightedProjectLocales___value___parent___children'
  | '_allHighlightedProjectLocales___value___children'
  | '_allHighlightedProjectLocales___value___children___id'
  | '_allHighlightedProjectLocales___value___children___children'
  | '_allHighlightedProjectLocales___value___internal___content'
  | '_allHighlightedProjectLocales___value___internal___contentDigest'
  | '_allHighlightedProjectLocales___value___internal___description'
  | '_allHighlightedProjectLocales___value___internal___fieldOwners'
  | '_allHighlightedProjectLocales___value___internal___ignoreType'
  | '_allHighlightedProjectLocales___value___internal___mediaType'
  | '_allHighlightedProjectLocales___value___internal___owner'
  | '_allHighlightedProjectLocales___value___internal___type'
  | 'skills'
  | 'skills___title'
  | 'skills___skills'
  | 'skills___skills___name'
  | 'skills___skills___meta___createdAt'
  | 'skills___skills___meta___updatedAt'
  | 'skills___skills___meta___publishedAt'
  | 'skills___skills___meta___firstPublishedAt'
  | 'skills___skills___meta___isValid'
  | 'skills___skills___meta___status'
  | 'skills___skills___originalId'
  | 'skills___skills___locale'
  | 'skills___skills___seoMetaTags___tags'
  | 'skills___skills___seoMetaTags___id'
  | 'skills___skills___seoMetaTags___children'
  | 'skills___skills___model___name'
  | 'skills___skills___model___singleton'
  | 'skills___skills___model___sortable'
  | 'skills___skills___model___apiKey'
  | 'skills___skills___model___orderingDirection'
  | 'skills___skills___model___tree'
  | 'skills___skills___model___modularBlock'
  | 'skills___skills___model___draftModeActive'
  | 'skills___skills___model___allLocalesRequired'
  | 'skills___skills___model___collectionAppeareance'
  | 'skills___skills___model___hasSingletonItem'
  | 'skills___skills___model___originalId'
  | 'skills___skills___model___id'
  | 'skills___skills___model___children'
  | 'skills___skills___id'
  | 'skills___skills___parent___id'
  | 'skills___skills___parent___children'
  | 'skills___skills___children'
  | 'skills___skills___children___id'
  | 'skills___skills___children___children'
  | 'skills___skills___internal___content'
  | 'skills___skills___internal___contentDigest'
  | 'skills___skills___internal___description'
  | 'skills___skills___internal___fieldOwners'
  | 'skills___skills___internal___ignoreType'
  | 'skills___skills___internal___mediaType'
  | 'skills___skills___internal___owner'
  | 'skills___skills___internal___type'
  | 'skills___meta___createdAt'
  | 'skills___meta___updatedAt'
  | 'skills___meta___publishedAt'
  | 'skills___meta___firstPublishedAt'
  | 'skills___meta___isValid'
  | 'skills___meta___status'
  | 'skills___originalId'
  | 'skills___locale'
  | 'skills___seoMetaTags___tags'
  | 'skills___seoMetaTags___id'
  | 'skills___seoMetaTags___parent___id'
  | 'skills___seoMetaTags___parent___children'
  | 'skills___seoMetaTags___children'
  | 'skills___seoMetaTags___children___id'
  | 'skills___seoMetaTags___children___children'
  | 'skills___seoMetaTags___internal___content'
  | 'skills___seoMetaTags___internal___contentDigest'
  | 'skills___seoMetaTags___internal___description'
  | 'skills___seoMetaTags___internal___fieldOwners'
  | 'skills___seoMetaTags___internal___ignoreType'
  | 'skills___seoMetaTags___internal___mediaType'
  | 'skills___seoMetaTags___internal___owner'
  | 'skills___seoMetaTags___internal___type'
  | 'skills___model___name'
  | 'skills___model___singleton'
  | 'skills___model___sortable'
  | 'skills___model___apiKey'
  | 'skills___model___orderingDirection'
  | 'skills___model___tree'
  | 'skills___model___modularBlock'
  | 'skills___model___draftModeActive'
  | 'skills___model___allLocalesRequired'
  | 'skills___model___collectionAppeareance'
  | 'skills___model___hasSingletonItem'
  | 'skills___model___originalId'
  | 'skills___model___fields___tags'
  | 'skills___model___fields___id'
  | 'skills___model___fields___children'
  | 'skills___model___id'
  | 'skills___model___parent___id'
  | 'skills___model___parent___children'
  | 'skills___model___children'
  | 'skills___model___children___id'
  | 'skills___model___children___children'
  | 'skills___model___internal___content'
  | 'skills___model___internal___contentDigest'
  | 'skills___model___internal___description'
  | 'skills___model___internal___fieldOwners'
  | 'skills___model___internal___ignoreType'
  | 'skills___model___internal___mediaType'
  | 'skills___model___internal___owner'
  | 'skills___model___internal___type'
  | 'skills___id'
  | 'skills___parent___id'
  | 'skills___parent___parent___id'
  | 'skills___parent___parent___children'
  | 'skills___parent___children'
  | 'skills___parent___children___id'
  | 'skills___parent___children___children'
  | 'skills___parent___internal___content'
  | 'skills___parent___internal___contentDigest'
  | 'skills___parent___internal___description'
  | 'skills___parent___internal___fieldOwners'
  | 'skills___parent___internal___ignoreType'
  | 'skills___parent___internal___mediaType'
  | 'skills___parent___internal___owner'
  | 'skills___parent___internal___type'
  | 'skills___children'
  | 'skills___children___id'
  | 'skills___children___parent___id'
  | 'skills___children___parent___children'
  | 'skills___children___children'
  | 'skills___children___children___id'
  | 'skills___children___children___children'
  | 'skills___children___internal___content'
  | 'skills___children___internal___contentDigest'
  | 'skills___children___internal___description'
  | 'skills___children___internal___fieldOwners'
  | 'skills___children___internal___ignoreType'
  | 'skills___children___internal___mediaType'
  | 'skills___children___internal___owner'
  | 'skills___children___internal___type'
  | 'skills___internal___content'
  | 'skills___internal___contentDigest'
  | 'skills___internal___description'
  | 'skills___internal___fieldOwners'
  | 'skills___internal___ignoreType'
  | 'skills___internal___mediaType'
  | 'skills___internal___owner'
  | 'skills___internal___type'
  | '_allSkillsLocales'
  | '_allSkillsLocales___locale'
  | '_allSkillsLocales___value'
  | '_allSkillsLocales___value___title'
  | '_allSkillsLocales___value___skills'
  | '_allSkillsLocales___value___skills___name'
  | '_allSkillsLocales___value___skills___originalId'
  | '_allSkillsLocales___value___skills___locale'
  | '_allSkillsLocales___value___skills___id'
  | '_allSkillsLocales___value___skills___children'
  | '_allSkillsLocales___value___meta___createdAt'
  | '_allSkillsLocales___value___meta___updatedAt'
  | '_allSkillsLocales___value___meta___publishedAt'
  | '_allSkillsLocales___value___meta___firstPublishedAt'
  | '_allSkillsLocales___value___meta___isValid'
  | '_allSkillsLocales___value___meta___status'
  | '_allSkillsLocales___value___originalId'
  | '_allSkillsLocales___value___locale'
  | '_allSkillsLocales___value___seoMetaTags___tags'
  | '_allSkillsLocales___value___seoMetaTags___id'
  | '_allSkillsLocales___value___seoMetaTags___children'
  | '_allSkillsLocales___value___model___name'
  | '_allSkillsLocales___value___model___singleton'
  | '_allSkillsLocales___value___model___sortable'
  | '_allSkillsLocales___value___model___apiKey'
  | '_allSkillsLocales___value___model___orderingDirection'
  | '_allSkillsLocales___value___model___tree'
  | '_allSkillsLocales___value___model___modularBlock'
  | '_allSkillsLocales___value___model___draftModeActive'
  | '_allSkillsLocales___value___model___allLocalesRequired'
  | '_allSkillsLocales___value___model___collectionAppeareance'
  | '_allSkillsLocales___value___model___hasSingletonItem'
  | '_allSkillsLocales___value___model___originalId'
  | '_allSkillsLocales___value___model___id'
  | '_allSkillsLocales___value___model___children'
  | '_allSkillsLocales___value___id'
  | '_allSkillsLocales___value___parent___id'
  | '_allSkillsLocales___value___parent___children'
  | '_allSkillsLocales___value___children'
  | '_allSkillsLocales___value___children___id'
  | '_allSkillsLocales___value___children___children'
  | '_allSkillsLocales___value___internal___content'
  | '_allSkillsLocales___value___internal___contentDigest'
  | '_allSkillsLocales___value___internal___description'
  | '_allSkillsLocales___value___internal___fieldOwners'
  | '_allSkillsLocales___value___internal___ignoreType'
  | '_allSkillsLocales___value___internal___mediaType'
  | '_allSkillsLocales___value___internal___owner'
  | '_allSkillsLocales___value___internal___type'
  | 'aboutImage___size'
  | 'aboutImage___width'
  | 'aboutImage___height'
  | 'aboutImage___path'
  | 'aboutImage___format'
  | 'aboutImage___isImage'
  | 'aboutImage___notes'
  | 'aboutImage___author'
  | 'aboutImage___copyright'
  | 'aboutImage___tags'
  | 'aboutImage___smartTags'
  | 'aboutImage___filename'
  | 'aboutImage___basename'
  | 'aboutImage___exifInfo'
  | 'aboutImage___mimeType'
  | 'aboutImage___colors'
  | 'aboutImage___colors___red'
  | 'aboutImage___colors___green'
  | 'aboutImage___colors___blue'
  | 'aboutImage___colors___alpha'
  | 'aboutImage___colors___rgb'
  | 'aboutImage___colors___hex'
  | 'aboutImage___blurhash'
  | 'aboutImage___originalId'
  | 'aboutImage___url'
  | 'aboutImage___createdAt'
  | 'aboutImage___video___muxPlaybackId'
  | 'aboutImage___video___frameRate'
  | 'aboutImage___video___duration'
  | 'aboutImage___video___streamingUrl'
  | 'aboutImage___video___thumbnailUrl'
  | 'aboutImage___video___mp4Url'
  | 'aboutImage___fluid___base64'
  | 'aboutImage___fluid___tracedSVG'
  | 'aboutImage___fluid___aspectRatio'
  | 'aboutImage___fluid___width'
  | 'aboutImage___fluid___height'
  | 'aboutImage___fluid___src'
  | 'aboutImage___fluid___srcSet'
  | 'aboutImage___fluid___sizes'
  | 'aboutImage___sizes___base64'
  | 'aboutImage___sizes___tracedSVG'
  | 'aboutImage___sizes___aspectRatio'
  | 'aboutImage___sizes___width'
  | 'aboutImage___sizes___height'
  | 'aboutImage___sizes___src'
  | 'aboutImage___sizes___srcSet'
  | 'aboutImage___sizes___sizes'
  | 'aboutImage___fixed___base64'
  | 'aboutImage___fixed___tracedSVG'
  | 'aboutImage___fixed___aspectRatio'
  | 'aboutImage___fixed___width'
  | 'aboutImage___fixed___height'
  | 'aboutImage___fixed___src'
  | 'aboutImage___fixed___srcSet'
  | 'aboutImage___fixed___sizes'
  | 'aboutImage___resolutions___base64'
  | 'aboutImage___resolutions___tracedSVG'
  | 'aboutImage___resolutions___aspectRatio'
  | 'aboutImage___resolutions___width'
  | 'aboutImage___resolutions___height'
  | 'aboutImage___resolutions___src'
  | 'aboutImage___resolutions___srcSet'
  | 'aboutImage___resolutions___sizes'
  | 'aboutImage___gatsbyImageData'
  | 'aboutImage___alt'
  | 'aboutImage___title'
  | 'aboutImage___customData'
  | 'aboutImage___focalPoint___x'
  | 'aboutImage___focalPoint___y'
  | 'coverTitleTwo'
  | '_allCoverTitleTwoLocales'
  | '_allCoverTitleTwoLocales___locale'
  | '_allCoverTitleTwoLocales___value'
  | 'projects'
  | 'projects___title'
  | 'projects___subtitle'
  | 'projects___backgroundImage___size'
  | 'projects___backgroundImage___width'
  | 'projects___backgroundImage___height'
  | 'projects___backgroundImage___path'
  | 'projects___backgroundImage___format'
  | 'projects___backgroundImage___isImage'
  | 'projects___backgroundImage___notes'
  | 'projects___backgroundImage___author'
  | 'projects___backgroundImage___copyright'
  | 'projects___backgroundImage___tags'
  | 'projects___backgroundImage___smartTags'
  | 'projects___backgroundImage___filename'
  | 'projects___backgroundImage___basename'
  | 'projects___backgroundImage___exifInfo'
  | 'projects___backgroundImage___mimeType'
  | 'projects___backgroundImage___colors'
  | 'projects___backgroundImage___colors___red'
  | 'projects___backgroundImage___colors___green'
  | 'projects___backgroundImage___colors___blue'
  | 'projects___backgroundImage___colors___alpha'
  | 'projects___backgroundImage___colors___rgb'
  | 'projects___backgroundImage___colors___hex'
  | 'projects___backgroundImage___blurhash'
  | 'projects___backgroundImage___originalId'
  | 'projects___backgroundImage___url'
  | 'projects___backgroundImage___createdAt'
  | 'projects___backgroundImage___video___muxPlaybackId'
  | 'projects___backgroundImage___video___frameRate'
  | 'projects___backgroundImage___video___duration'
  | 'projects___backgroundImage___video___streamingUrl'
  | 'projects___backgroundImage___video___thumbnailUrl'
  | 'projects___backgroundImage___video___mp4Url'
  | 'projects___backgroundImage___fluid___base64'
  | 'projects___backgroundImage___fluid___tracedSVG'
  | 'projects___backgroundImage___fluid___aspectRatio'
  | 'projects___backgroundImage___fluid___width'
  | 'projects___backgroundImage___fluid___height'
  | 'projects___backgroundImage___fluid___src'
  | 'projects___backgroundImage___fluid___srcSet'
  | 'projects___backgroundImage___fluid___sizes'
  | 'projects___backgroundImage___sizes___base64'
  | 'projects___backgroundImage___sizes___tracedSVG'
  | 'projects___backgroundImage___sizes___aspectRatio'
  | 'projects___backgroundImage___sizes___width'
  | 'projects___backgroundImage___sizes___height'
  | 'projects___backgroundImage___sizes___src'
  | 'projects___backgroundImage___sizes___srcSet'
  | 'projects___backgroundImage___sizes___sizes'
  | 'projects___backgroundImage___fixed___base64'
  | 'projects___backgroundImage___fixed___tracedSVG'
  | 'projects___backgroundImage___fixed___aspectRatio'
  | 'projects___backgroundImage___fixed___width'
  | 'projects___backgroundImage___fixed___height'
  | 'projects___backgroundImage___fixed___src'
  | 'projects___backgroundImage___fixed___srcSet'
  | 'projects___backgroundImage___fixed___sizes'
  | 'projects___backgroundImage___resolutions___base64'
  | 'projects___backgroundImage___resolutions___tracedSVG'
  | 'projects___backgroundImage___resolutions___aspectRatio'
  | 'projects___backgroundImage___resolutions___width'
  | 'projects___backgroundImage___resolutions___height'
  | 'projects___backgroundImage___resolutions___src'
  | 'projects___backgroundImage___resolutions___srcSet'
  | 'projects___backgroundImage___resolutions___sizes'
  | 'projects___backgroundImage___gatsbyImageData'
  | 'projects___backgroundImage___alt'
  | 'projects___backgroundImage___title'
  | 'projects___backgroundImage___customData'
  | 'projects___backgroundImage___focalPoint___x'
  | 'projects___backgroundImage___focalPoint___y'
  | 'projects___url'
  | 'projects___meta___createdAt'
  | 'projects___meta___updatedAt'
  | 'projects___meta___publishedAt'
  | 'projects___meta___firstPublishedAt'
  | 'projects___meta___isValid'
  | 'projects___meta___status'
  | 'projects___originalId'
  | 'projects___locale'
  | 'projects___seoMetaTags___tags'
  | 'projects___seoMetaTags___id'
  | 'projects___seoMetaTags___parent___id'
  | 'projects___seoMetaTags___parent___children'
  | 'projects___seoMetaTags___children'
  | 'projects___seoMetaTags___children___id'
  | 'projects___seoMetaTags___children___children'
  | 'projects___seoMetaTags___internal___content'
  | 'projects___seoMetaTags___internal___contentDigest'
  | 'projects___seoMetaTags___internal___description'
  | 'projects___seoMetaTags___internal___fieldOwners'
  | 'projects___seoMetaTags___internal___ignoreType'
  | 'projects___seoMetaTags___internal___mediaType'
  | 'projects___seoMetaTags___internal___owner'
  | 'projects___seoMetaTags___internal___type'
  | 'projects___model___name'
  | 'projects___model___singleton'
  | 'projects___model___sortable'
  | 'projects___model___apiKey'
  | 'projects___model___orderingDirection'
  | 'projects___model___tree'
  | 'projects___model___modularBlock'
  | 'projects___model___draftModeActive'
  | 'projects___model___allLocalesRequired'
  | 'projects___model___collectionAppeareance'
  | 'projects___model___hasSingletonItem'
  | 'projects___model___originalId'
  | 'projects___model___fields___tags'
  | 'projects___model___fields___id'
  | 'projects___model___fields___children'
  | 'projects___model___id'
  | 'projects___model___parent___id'
  | 'projects___model___parent___children'
  | 'projects___model___children'
  | 'projects___model___children___id'
  | 'projects___model___children___children'
  | 'projects___model___internal___content'
  | 'projects___model___internal___contentDigest'
  | 'projects___model___internal___description'
  | 'projects___model___internal___fieldOwners'
  | 'projects___model___internal___ignoreType'
  | 'projects___model___internal___mediaType'
  | 'projects___model___internal___owner'
  | 'projects___model___internal___type'
  | 'projects___id'
  | 'projects___parent___id'
  | 'projects___parent___parent___id'
  | 'projects___parent___parent___children'
  | 'projects___parent___children'
  | 'projects___parent___children___id'
  | 'projects___parent___children___children'
  | 'projects___parent___internal___content'
  | 'projects___parent___internal___contentDigest'
  | 'projects___parent___internal___description'
  | 'projects___parent___internal___fieldOwners'
  | 'projects___parent___internal___ignoreType'
  | 'projects___parent___internal___mediaType'
  | 'projects___parent___internal___owner'
  | 'projects___parent___internal___type'
  | 'projects___children'
  | 'projects___children___id'
  | 'projects___children___parent___id'
  | 'projects___children___parent___children'
  | 'projects___children___children'
  | 'projects___children___children___id'
  | 'projects___children___children___children'
  | 'projects___children___internal___content'
  | 'projects___children___internal___contentDigest'
  | 'projects___children___internal___description'
  | 'projects___children___internal___fieldOwners'
  | 'projects___children___internal___ignoreType'
  | 'projects___children___internal___mediaType'
  | 'projects___children___internal___owner'
  | 'projects___children___internal___type'
  | 'projects___internal___content'
  | 'projects___internal___contentDigest'
  | 'projects___internal___description'
  | 'projects___internal___fieldOwners'
  | 'projects___internal___ignoreType'
  | 'projects___internal___mediaType'
  | 'projects___internal___owner'
  | 'projects___internal___type'
  | '_allProjectsLocales'
  | '_allProjectsLocales___locale'
  | '_allProjectsLocales___value'
  | '_allProjectsLocales___value___title'
  | '_allProjectsLocales___value___subtitle'
  | '_allProjectsLocales___value___backgroundImage___size'
  | '_allProjectsLocales___value___backgroundImage___width'
  | '_allProjectsLocales___value___backgroundImage___height'
  | '_allProjectsLocales___value___backgroundImage___path'
  | '_allProjectsLocales___value___backgroundImage___format'
  | '_allProjectsLocales___value___backgroundImage___isImage'
  | '_allProjectsLocales___value___backgroundImage___notes'
  | '_allProjectsLocales___value___backgroundImage___author'
  | '_allProjectsLocales___value___backgroundImage___copyright'
  | '_allProjectsLocales___value___backgroundImage___tags'
  | '_allProjectsLocales___value___backgroundImage___smartTags'
  | '_allProjectsLocales___value___backgroundImage___filename'
  | '_allProjectsLocales___value___backgroundImage___basename'
  | '_allProjectsLocales___value___backgroundImage___exifInfo'
  | '_allProjectsLocales___value___backgroundImage___mimeType'
  | '_allProjectsLocales___value___backgroundImage___colors'
  | '_allProjectsLocales___value___backgroundImage___blurhash'
  | '_allProjectsLocales___value___backgroundImage___originalId'
  | '_allProjectsLocales___value___backgroundImage___url'
  | '_allProjectsLocales___value___backgroundImage___createdAt'
  | '_allProjectsLocales___value___backgroundImage___gatsbyImageData'
  | '_allProjectsLocales___value___backgroundImage___alt'
  | '_allProjectsLocales___value___backgroundImage___title'
  | '_allProjectsLocales___value___backgroundImage___customData'
  | '_allProjectsLocales___value___url'
  | '_allProjectsLocales___value___meta___createdAt'
  | '_allProjectsLocales___value___meta___updatedAt'
  | '_allProjectsLocales___value___meta___publishedAt'
  | '_allProjectsLocales___value___meta___firstPublishedAt'
  | '_allProjectsLocales___value___meta___isValid'
  | '_allProjectsLocales___value___meta___status'
  | '_allProjectsLocales___value___originalId'
  | '_allProjectsLocales___value___locale'
  | '_allProjectsLocales___value___seoMetaTags___tags'
  | '_allProjectsLocales___value___seoMetaTags___id'
  | '_allProjectsLocales___value___seoMetaTags___children'
  | '_allProjectsLocales___value___model___name'
  | '_allProjectsLocales___value___model___singleton'
  | '_allProjectsLocales___value___model___sortable'
  | '_allProjectsLocales___value___model___apiKey'
  | '_allProjectsLocales___value___model___orderingDirection'
  | '_allProjectsLocales___value___model___tree'
  | '_allProjectsLocales___value___model___modularBlock'
  | '_allProjectsLocales___value___model___draftModeActive'
  | '_allProjectsLocales___value___model___allLocalesRequired'
  | '_allProjectsLocales___value___model___collectionAppeareance'
  | '_allProjectsLocales___value___model___hasSingletonItem'
  | '_allProjectsLocales___value___model___originalId'
  | '_allProjectsLocales___value___model___id'
  | '_allProjectsLocales___value___model___children'
  | '_allProjectsLocales___value___id'
  | '_allProjectsLocales___value___parent___id'
  | '_allProjectsLocales___value___parent___children'
  | '_allProjectsLocales___value___children'
  | '_allProjectsLocales___value___children___id'
  | '_allProjectsLocales___value___children___children'
  | '_allProjectsLocales___value___internal___content'
  | '_allProjectsLocales___value___internal___contentDigest'
  | '_allProjectsLocales___value___internal___description'
  | '_allProjectsLocales___value___internal___fieldOwners'
  | '_allProjectsLocales___value___internal___ignoreType'
  | '_allProjectsLocales___value___internal___mediaType'
  | '_allProjectsLocales___value___internal___owner'
  | '_allProjectsLocales___value___internal___type'
  | 'aboutText___value'
  | 'aboutText___blocks'
  | 'aboutText___links'
  | '_allAboutTextLocales'
  | '_allAboutTextLocales___locale'
  | '_allAboutTextLocales___value___value'
  | '_allAboutTextLocales___value___blocks'
  | '_allAboutTextLocales___value___links'
  | 'coverTitleThree'
  | '_allCoverTitleThreeLocales'
  | '_allCoverTitleThreeLocales___locale'
  | '_allCoverTitleThreeLocales___value'
  | 'aboutParagraphOne'
  | '_allAboutParagraphOneLocales'
  | '_allAboutParagraphOneLocales___locale'
  | '_allAboutParagraphOneLocales___value'
  | 'aboutParagraphTwo'
  | '_allAboutParagraphTwoLocales'
  | '_allAboutParagraphTwoLocales___locale'
  | '_allAboutParagraphTwoLocales___value'
  | 'aboutParagraphThree'
  | '_allAboutParagraphThreeLocales'
  | '_allAboutParagraphThreeLocales___locale'
  | '_allAboutParagraphThreeLocales___value'
  | 'seeResumeButtonTitle'
  | '_allSeeResumeButtonTitleLocales'
  | '_allSeeResumeButtonTitleLocales___locale'
  | '_allSeeResumeButtonTitleLocales___value'
  | 'meta___createdAt'
  | 'meta___updatedAt'
  | 'meta___publishedAt'
  | 'meta___firstPublishedAt'
  | 'meta___isValid'
  | 'meta___status'
  | 'originalId'
  | 'locale'
  | 'seoMetaTags___tags'
  | 'seoMetaTags___id'
  | 'seoMetaTags___parent___id'
  | 'seoMetaTags___parent___parent___id'
  | 'seoMetaTags___parent___parent___children'
  | 'seoMetaTags___parent___children'
  | 'seoMetaTags___parent___children___id'
  | 'seoMetaTags___parent___children___children'
  | 'seoMetaTags___parent___internal___content'
  | 'seoMetaTags___parent___internal___contentDigest'
  | 'seoMetaTags___parent___internal___description'
  | 'seoMetaTags___parent___internal___fieldOwners'
  | 'seoMetaTags___parent___internal___ignoreType'
  | 'seoMetaTags___parent___internal___mediaType'
  | 'seoMetaTags___parent___internal___owner'
  | 'seoMetaTags___parent___internal___type'
  | 'seoMetaTags___children'
  | 'seoMetaTags___children___id'
  | 'seoMetaTags___children___parent___id'
  | 'seoMetaTags___children___parent___children'
  | 'seoMetaTags___children___children'
  | 'seoMetaTags___children___children___id'
  | 'seoMetaTags___children___children___children'
  | 'seoMetaTags___children___internal___content'
  | 'seoMetaTags___children___internal___contentDigest'
  | 'seoMetaTags___children___internal___description'
  | 'seoMetaTags___children___internal___fieldOwners'
  | 'seoMetaTags___children___internal___ignoreType'
  | 'seoMetaTags___children___internal___mediaType'
  | 'seoMetaTags___children___internal___owner'
  | 'seoMetaTags___children___internal___type'
  | 'seoMetaTags___internal___content'
  | 'seoMetaTags___internal___contentDigest'
  | 'seoMetaTags___internal___description'
  | 'seoMetaTags___internal___fieldOwners'
  | 'seoMetaTags___internal___ignoreType'
  | 'seoMetaTags___internal___mediaType'
  | 'seoMetaTags___internal___owner'
  | 'seoMetaTags___internal___type'
  | 'model___name'
  | 'model___singleton'
  | 'model___sortable'
  | 'model___apiKey'
  | 'model___orderingDirection'
  | 'model___tree'
  | 'model___modularBlock'
  | 'model___draftModeActive'
  | 'model___allLocalesRequired'
  | 'model___collectionAppeareance'
  | 'model___hasSingletonItem'
  | 'model___originalId'
  | 'model___fields___tags'
  | 'model___fields___id'
  | 'model___fields___parent___id'
  | 'model___fields___parent___children'
  | 'model___fields___children'
  | 'model___fields___children___id'
  | 'model___fields___children___children'
  | 'model___fields___internal___content'
  | 'model___fields___internal___contentDigest'
  | 'model___fields___internal___description'
  | 'model___fields___internal___fieldOwners'
  | 'model___fields___internal___ignoreType'
  | 'model___fields___internal___mediaType'
  | 'model___fields___internal___owner'
  | 'model___fields___internal___type'
  | 'model___id'
  | 'model___parent___id'
  | 'model___parent___parent___id'
  | 'model___parent___parent___children'
  | 'model___parent___children'
  | 'model___parent___children___id'
  | 'model___parent___children___children'
  | 'model___parent___internal___content'
  | 'model___parent___internal___contentDigest'
  | 'model___parent___internal___description'
  | 'model___parent___internal___fieldOwners'
  | 'model___parent___internal___ignoreType'
  | 'model___parent___internal___mediaType'
  | 'model___parent___internal___owner'
  | 'model___parent___internal___type'
  | 'model___children'
  | 'model___children___id'
  | 'model___children___parent___id'
  | 'model___children___parent___children'
  | 'model___children___children'
  | 'model___children___children___id'
  | 'model___children___children___children'
  | 'model___children___internal___content'
  | 'model___children___internal___contentDigest'
  | 'model___children___internal___description'
  | 'model___children___internal___fieldOwners'
  | 'model___children___internal___ignoreType'
  | 'model___children___internal___mediaType'
  | 'model___children___internal___owner'
  | 'model___children___internal___type'
  | 'model___internal___content'
  | 'model___internal___contentDigest'
  | 'model___internal___description'
  | 'model___internal___fieldOwners'
  | 'model___internal___ignoreType'
  | 'model___internal___mediaType'
  | 'model___internal___owner'
  | 'model___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DatoCmsHomePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsHomePageEdge>;
  nodes: Array<DatoCmsHomePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsHomePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsHomePageGroupConnectionDistinctArgs = {
  field: DatoCmsHomePageFieldsEnum;
};


export type DatoCmsHomePageGroupConnectionMaxArgs = {
  field: DatoCmsHomePageFieldsEnum;
};


export type DatoCmsHomePageGroupConnectionMinArgs = {
  field: DatoCmsHomePageFieldsEnum;
};


export type DatoCmsHomePageGroupConnectionSumArgs = {
  field: DatoCmsHomePageFieldsEnum;
};


export type DatoCmsHomePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsHomePageFieldsEnum;
};

export type DatoCmsHomePageFilterInput = {
  aboutTitle?: InputMaybe<StringQueryOperatorInput>;
  _allAboutTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageAboutTitleFilterListInput>;
  projectsTitle?: InputMaybe<StringQueryOperatorInput>;
  _allProjectsTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageProjectsTitleFilterListInput>;
  skillsTitle?: InputMaybe<StringQueryOperatorInput>;
  _allSkillsTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageSkillsTitleFilterListInput>;
  coverTitleOne?: InputMaybe<StringQueryOperatorInput>;
  _allCoverTitleOneLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageCoverTitleOneFilterListInput>;
  highlightedProject?: InputMaybe<DatoCmsProjectFilterListInput>;
  _allHighlightedProjectLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageHighlightedProjectFilterListInput>;
  skills?: InputMaybe<DatoCmsSkillGroupFilterListInput>;
  _allSkillsLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageSkillsFilterListInput>;
  aboutImage?: InputMaybe<DatoCmsFileFieldFilterInput>;
  coverTitleTwo?: InputMaybe<StringQueryOperatorInput>;
  _allCoverTitleTwoLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageCoverTitleTwoFilterListInput>;
  projects?: InputMaybe<DatoCmsProjectFilterListInput>;
  _allProjectsLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageProjectsFilterListInput>;
  aboutText?: InputMaybe<DatoCmsDatoCmsHomePageAboutTextStructuredTextFilterInput>;
  _allAboutTextLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageAboutTextFilterListInput>;
  coverTitleThree?: InputMaybe<StringQueryOperatorInput>;
  _allCoverTitleThreeLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageCoverTitleThreeFilterListInput>;
  aboutParagraphOne?: InputMaybe<StringQueryOperatorInput>;
  _allAboutParagraphOneLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageAboutParagraphOneFilterListInput>;
  aboutParagraphTwo?: InputMaybe<StringQueryOperatorInput>;
  _allAboutParagraphTwoLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageAboutParagraphTwoFilterListInput>;
  aboutParagraphThree?: InputMaybe<StringQueryOperatorInput>;
  _allAboutParagraphThreeLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageAboutParagraphThreeFilterListInput>;
  seeResumeButtonTitle?: InputMaybe<StringQueryOperatorInput>;
  _allSeeResumeButtonTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHomePageSeeResumeButtonTitleFilterListInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsHomePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsHomePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsSkillGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSkillGroupEdge>;
  nodes: Array<DatoCmsSkillGroup>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsSkillGroupGroupConnection>;
};


export type DatoCmsSkillGroupConnectionDistinctArgs = {
  field: DatoCmsSkillGroupFieldsEnum;
};


export type DatoCmsSkillGroupConnectionMaxArgs = {
  field: DatoCmsSkillGroupFieldsEnum;
};


export type DatoCmsSkillGroupConnectionMinArgs = {
  field: DatoCmsSkillGroupFieldsEnum;
};


export type DatoCmsSkillGroupConnectionSumArgs = {
  field: DatoCmsSkillGroupFieldsEnum;
};


export type DatoCmsSkillGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsSkillGroupFieldsEnum;
};

export type DatoCmsSkillGroupEdge = {
  next?: Maybe<DatoCmsSkillGroup>;
  node: DatoCmsSkillGroup;
  previous?: Maybe<DatoCmsSkillGroup>;
};

export type DatoCmsSkillGroupFieldsEnum =
  | 'title'
  | 'skills'
  | 'skills___name'
  | 'skills___meta___createdAt'
  | 'skills___meta___updatedAt'
  | 'skills___meta___publishedAt'
  | 'skills___meta___firstPublishedAt'
  | 'skills___meta___isValid'
  | 'skills___meta___status'
  | 'skills___originalId'
  | 'skills___locale'
  | 'skills___seoMetaTags___tags'
  | 'skills___seoMetaTags___id'
  | 'skills___seoMetaTags___parent___id'
  | 'skills___seoMetaTags___parent___children'
  | 'skills___seoMetaTags___children'
  | 'skills___seoMetaTags___children___id'
  | 'skills___seoMetaTags___children___children'
  | 'skills___seoMetaTags___internal___content'
  | 'skills___seoMetaTags___internal___contentDigest'
  | 'skills___seoMetaTags___internal___description'
  | 'skills___seoMetaTags___internal___fieldOwners'
  | 'skills___seoMetaTags___internal___ignoreType'
  | 'skills___seoMetaTags___internal___mediaType'
  | 'skills___seoMetaTags___internal___owner'
  | 'skills___seoMetaTags___internal___type'
  | 'skills___model___name'
  | 'skills___model___singleton'
  | 'skills___model___sortable'
  | 'skills___model___apiKey'
  | 'skills___model___orderingDirection'
  | 'skills___model___tree'
  | 'skills___model___modularBlock'
  | 'skills___model___draftModeActive'
  | 'skills___model___allLocalesRequired'
  | 'skills___model___collectionAppeareance'
  | 'skills___model___hasSingletonItem'
  | 'skills___model___originalId'
  | 'skills___model___fields___tags'
  | 'skills___model___fields___id'
  | 'skills___model___fields___children'
  | 'skills___model___id'
  | 'skills___model___parent___id'
  | 'skills___model___parent___children'
  | 'skills___model___children'
  | 'skills___model___children___id'
  | 'skills___model___children___children'
  | 'skills___model___internal___content'
  | 'skills___model___internal___contentDigest'
  | 'skills___model___internal___description'
  | 'skills___model___internal___fieldOwners'
  | 'skills___model___internal___ignoreType'
  | 'skills___model___internal___mediaType'
  | 'skills___model___internal___owner'
  | 'skills___model___internal___type'
  | 'skills___id'
  | 'skills___parent___id'
  | 'skills___parent___parent___id'
  | 'skills___parent___parent___children'
  | 'skills___parent___children'
  | 'skills___parent___children___id'
  | 'skills___parent___children___children'
  | 'skills___parent___internal___content'
  | 'skills___parent___internal___contentDigest'
  | 'skills___parent___internal___description'
  | 'skills___parent___internal___fieldOwners'
  | 'skills___parent___internal___ignoreType'
  | 'skills___parent___internal___mediaType'
  | 'skills___parent___internal___owner'
  | 'skills___parent___internal___type'
  | 'skills___children'
  | 'skills___children___id'
  | 'skills___children___parent___id'
  | 'skills___children___parent___children'
  | 'skills___children___children'
  | 'skills___children___children___id'
  | 'skills___children___children___children'
  | 'skills___children___internal___content'
  | 'skills___children___internal___contentDigest'
  | 'skills___children___internal___description'
  | 'skills___children___internal___fieldOwners'
  | 'skills___children___internal___ignoreType'
  | 'skills___children___internal___mediaType'
  | 'skills___children___internal___owner'
  | 'skills___children___internal___type'
  | 'skills___internal___content'
  | 'skills___internal___contentDigest'
  | 'skills___internal___description'
  | 'skills___internal___fieldOwners'
  | 'skills___internal___ignoreType'
  | 'skills___internal___mediaType'
  | 'skills___internal___owner'
  | 'skills___internal___type'
  | 'meta___createdAt'
  | 'meta___updatedAt'
  | 'meta___publishedAt'
  | 'meta___firstPublishedAt'
  | 'meta___isValid'
  | 'meta___status'
  | 'originalId'
  | 'locale'
  | 'seoMetaTags___tags'
  | 'seoMetaTags___id'
  | 'seoMetaTags___parent___id'
  | 'seoMetaTags___parent___parent___id'
  | 'seoMetaTags___parent___parent___children'
  | 'seoMetaTags___parent___children'
  | 'seoMetaTags___parent___children___id'
  | 'seoMetaTags___parent___children___children'
  | 'seoMetaTags___parent___internal___content'
  | 'seoMetaTags___parent___internal___contentDigest'
  | 'seoMetaTags___parent___internal___description'
  | 'seoMetaTags___parent___internal___fieldOwners'
  | 'seoMetaTags___parent___internal___ignoreType'
  | 'seoMetaTags___parent___internal___mediaType'
  | 'seoMetaTags___parent___internal___owner'
  | 'seoMetaTags___parent___internal___type'
  | 'seoMetaTags___children'
  | 'seoMetaTags___children___id'
  | 'seoMetaTags___children___parent___id'
  | 'seoMetaTags___children___parent___children'
  | 'seoMetaTags___children___children'
  | 'seoMetaTags___children___children___id'
  | 'seoMetaTags___children___children___children'
  | 'seoMetaTags___children___internal___content'
  | 'seoMetaTags___children___internal___contentDigest'
  | 'seoMetaTags___children___internal___description'
  | 'seoMetaTags___children___internal___fieldOwners'
  | 'seoMetaTags___children___internal___ignoreType'
  | 'seoMetaTags___children___internal___mediaType'
  | 'seoMetaTags___children___internal___owner'
  | 'seoMetaTags___children___internal___type'
  | 'seoMetaTags___internal___content'
  | 'seoMetaTags___internal___contentDigest'
  | 'seoMetaTags___internal___description'
  | 'seoMetaTags___internal___fieldOwners'
  | 'seoMetaTags___internal___ignoreType'
  | 'seoMetaTags___internal___mediaType'
  | 'seoMetaTags___internal___owner'
  | 'seoMetaTags___internal___type'
  | 'model___name'
  | 'model___singleton'
  | 'model___sortable'
  | 'model___apiKey'
  | 'model___orderingDirection'
  | 'model___tree'
  | 'model___modularBlock'
  | 'model___draftModeActive'
  | 'model___allLocalesRequired'
  | 'model___collectionAppeareance'
  | 'model___hasSingletonItem'
  | 'model___originalId'
  | 'model___fields___tags'
  | 'model___fields___id'
  | 'model___fields___parent___id'
  | 'model___fields___parent___children'
  | 'model___fields___children'
  | 'model___fields___children___id'
  | 'model___fields___children___children'
  | 'model___fields___internal___content'
  | 'model___fields___internal___contentDigest'
  | 'model___fields___internal___description'
  | 'model___fields___internal___fieldOwners'
  | 'model___fields___internal___ignoreType'
  | 'model___fields___internal___mediaType'
  | 'model___fields___internal___owner'
  | 'model___fields___internal___type'
  | 'model___id'
  | 'model___parent___id'
  | 'model___parent___parent___id'
  | 'model___parent___parent___children'
  | 'model___parent___children'
  | 'model___parent___children___id'
  | 'model___parent___children___children'
  | 'model___parent___internal___content'
  | 'model___parent___internal___contentDigest'
  | 'model___parent___internal___description'
  | 'model___parent___internal___fieldOwners'
  | 'model___parent___internal___ignoreType'
  | 'model___parent___internal___mediaType'
  | 'model___parent___internal___owner'
  | 'model___parent___internal___type'
  | 'model___children'
  | 'model___children___id'
  | 'model___children___parent___id'
  | 'model___children___parent___children'
  | 'model___children___children'
  | 'model___children___children___id'
  | 'model___children___children___children'
  | 'model___children___internal___content'
  | 'model___children___internal___contentDigest'
  | 'model___children___internal___description'
  | 'model___children___internal___fieldOwners'
  | 'model___children___internal___ignoreType'
  | 'model___children___internal___mediaType'
  | 'model___children___internal___owner'
  | 'model___children___internal___type'
  | 'model___internal___content'
  | 'model___internal___contentDigest'
  | 'model___internal___description'
  | 'model___internal___fieldOwners'
  | 'model___internal___ignoreType'
  | 'model___internal___mediaType'
  | 'model___internal___owner'
  | 'model___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DatoCmsSkillGroupGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSkillGroupEdge>;
  nodes: Array<DatoCmsSkillGroup>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsSkillGroupGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsSkillGroupGroupConnectionDistinctArgs = {
  field: DatoCmsSkillGroupFieldsEnum;
};


export type DatoCmsSkillGroupGroupConnectionMaxArgs = {
  field: DatoCmsSkillGroupFieldsEnum;
};


export type DatoCmsSkillGroupGroupConnectionMinArgs = {
  field: DatoCmsSkillGroupFieldsEnum;
};


export type DatoCmsSkillGroupGroupConnectionSumArgs = {
  field: DatoCmsSkillGroupFieldsEnum;
};


export type DatoCmsSkillGroupGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsSkillGroupFieldsEnum;
};

export type DatoCmsSkillGroupSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsSkillGroupFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsSkillConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSkillEdge>;
  nodes: Array<DatoCmsSkill>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsSkillGroupConnection>;
};


export type DatoCmsSkillConnectionDistinctArgs = {
  field: DatoCmsSkillFieldsEnum;
};


export type DatoCmsSkillConnectionMaxArgs = {
  field: DatoCmsSkillFieldsEnum;
};


export type DatoCmsSkillConnectionMinArgs = {
  field: DatoCmsSkillFieldsEnum;
};


export type DatoCmsSkillConnectionSumArgs = {
  field: DatoCmsSkillFieldsEnum;
};


export type DatoCmsSkillConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsSkillFieldsEnum;
};

export type DatoCmsSkillEdge = {
  next?: Maybe<DatoCmsSkill>;
  node: DatoCmsSkill;
  previous?: Maybe<DatoCmsSkill>;
};

export type DatoCmsSkillFieldsEnum =
  | 'name'
  | 'meta___createdAt'
  | 'meta___updatedAt'
  | 'meta___publishedAt'
  | 'meta___firstPublishedAt'
  | 'meta___isValid'
  | 'meta___status'
  | 'originalId'
  | 'locale'
  | 'seoMetaTags___tags'
  | 'seoMetaTags___id'
  | 'seoMetaTags___parent___id'
  | 'seoMetaTags___parent___parent___id'
  | 'seoMetaTags___parent___parent___children'
  | 'seoMetaTags___parent___children'
  | 'seoMetaTags___parent___children___id'
  | 'seoMetaTags___parent___children___children'
  | 'seoMetaTags___parent___internal___content'
  | 'seoMetaTags___parent___internal___contentDigest'
  | 'seoMetaTags___parent___internal___description'
  | 'seoMetaTags___parent___internal___fieldOwners'
  | 'seoMetaTags___parent___internal___ignoreType'
  | 'seoMetaTags___parent___internal___mediaType'
  | 'seoMetaTags___parent___internal___owner'
  | 'seoMetaTags___parent___internal___type'
  | 'seoMetaTags___children'
  | 'seoMetaTags___children___id'
  | 'seoMetaTags___children___parent___id'
  | 'seoMetaTags___children___parent___children'
  | 'seoMetaTags___children___children'
  | 'seoMetaTags___children___children___id'
  | 'seoMetaTags___children___children___children'
  | 'seoMetaTags___children___internal___content'
  | 'seoMetaTags___children___internal___contentDigest'
  | 'seoMetaTags___children___internal___description'
  | 'seoMetaTags___children___internal___fieldOwners'
  | 'seoMetaTags___children___internal___ignoreType'
  | 'seoMetaTags___children___internal___mediaType'
  | 'seoMetaTags___children___internal___owner'
  | 'seoMetaTags___children___internal___type'
  | 'seoMetaTags___internal___content'
  | 'seoMetaTags___internal___contentDigest'
  | 'seoMetaTags___internal___description'
  | 'seoMetaTags___internal___fieldOwners'
  | 'seoMetaTags___internal___ignoreType'
  | 'seoMetaTags___internal___mediaType'
  | 'seoMetaTags___internal___owner'
  | 'seoMetaTags___internal___type'
  | 'model___name'
  | 'model___singleton'
  | 'model___sortable'
  | 'model___apiKey'
  | 'model___orderingDirection'
  | 'model___tree'
  | 'model___modularBlock'
  | 'model___draftModeActive'
  | 'model___allLocalesRequired'
  | 'model___collectionAppeareance'
  | 'model___hasSingletonItem'
  | 'model___originalId'
  | 'model___fields___tags'
  | 'model___fields___id'
  | 'model___fields___parent___id'
  | 'model___fields___parent___children'
  | 'model___fields___children'
  | 'model___fields___children___id'
  | 'model___fields___children___children'
  | 'model___fields___internal___content'
  | 'model___fields___internal___contentDigest'
  | 'model___fields___internal___description'
  | 'model___fields___internal___fieldOwners'
  | 'model___fields___internal___ignoreType'
  | 'model___fields___internal___mediaType'
  | 'model___fields___internal___owner'
  | 'model___fields___internal___type'
  | 'model___id'
  | 'model___parent___id'
  | 'model___parent___parent___id'
  | 'model___parent___parent___children'
  | 'model___parent___children'
  | 'model___parent___children___id'
  | 'model___parent___children___children'
  | 'model___parent___internal___content'
  | 'model___parent___internal___contentDigest'
  | 'model___parent___internal___description'
  | 'model___parent___internal___fieldOwners'
  | 'model___parent___internal___ignoreType'
  | 'model___parent___internal___mediaType'
  | 'model___parent___internal___owner'
  | 'model___parent___internal___type'
  | 'model___children'
  | 'model___children___id'
  | 'model___children___parent___id'
  | 'model___children___parent___children'
  | 'model___children___children'
  | 'model___children___children___id'
  | 'model___children___children___children'
  | 'model___children___internal___content'
  | 'model___children___internal___contentDigest'
  | 'model___children___internal___description'
  | 'model___children___internal___fieldOwners'
  | 'model___children___internal___ignoreType'
  | 'model___children___internal___mediaType'
  | 'model___children___internal___owner'
  | 'model___children___internal___type'
  | 'model___internal___content'
  | 'model___internal___contentDigest'
  | 'model___internal___description'
  | 'model___internal___fieldOwners'
  | 'model___internal___ignoreType'
  | 'model___internal___mediaType'
  | 'model___internal___owner'
  | 'model___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DatoCmsSkillSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsSkillFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsProjectConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsProjectEdge>;
  nodes: Array<DatoCmsProject>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsProjectGroupConnection>;
};


export type DatoCmsProjectConnectionDistinctArgs = {
  field: DatoCmsProjectFieldsEnum;
};


export type DatoCmsProjectConnectionMaxArgs = {
  field: DatoCmsProjectFieldsEnum;
};


export type DatoCmsProjectConnectionMinArgs = {
  field: DatoCmsProjectFieldsEnum;
};


export type DatoCmsProjectConnectionSumArgs = {
  field: DatoCmsProjectFieldsEnum;
};


export type DatoCmsProjectConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsProjectFieldsEnum;
};

export type DatoCmsProjectEdge = {
  next?: Maybe<DatoCmsProject>;
  node: DatoCmsProject;
  previous?: Maybe<DatoCmsProject>;
};

export type DatoCmsProjectFieldsEnum =
  | 'title'
  | 'subtitle'
  | 'backgroundImage___size'
  | 'backgroundImage___width'
  | 'backgroundImage___height'
  | 'backgroundImage___path'
  | 'backgroundImage___format'
  | 'backgroundImage___isImage'
  | 'backgroundImage___notes'
  | 'backgroundImage___author'
  | 'backgroundImage___copyright'
  | 'backgroundImage___tags'
  | 'backgroundImage___smartTags'
  | 'backgroundImage___filename'
  | 'backgroundImage___basename'
  | 'backgroundImage___exifInfo'
  | 'backgroundImage___mimeType'
  | 'backgroundImage___colors'
  | 'backgroundImage___colors___red'
  | 'backgroundImage___colors___green'
  | 'backgroundImage___colors___blue'
  | 'backgroundImage___colors___alpha'
  | 'backgroundImage___colors___rgb'
  | 'backgroundImage___colors___hex'
  | 'backgroundImage___blurhash'
  | 'backgroundImage___originalId'
  | 'backgroundImage___url'
  | 'backgroundImage___createdAt'
  | 'backgroundImage___video___muxPlaybackId'
  | 'backgroundImage___video___frameRate'
  | 'backgroundImage___video___duration'
  | 'backgroundImage___video___streamingUrl'
  | 'backgroundImage___video___thumbnailUrl'
  | 'backgroundImage___video___mp4Url'
  | 'backgroundImage___fluid___base64'
  | 'backgroundImage___fluid___tracedSVG'
  | 'backgroundImage___fluid___aspectRatio'
  | 'backgroundImage___fluid___width'
  | 'backgroundImage___fluid___height'
  | 'backgroundImage___fluid___src'
  | 'backgroundImage___fluid___srcSet'
  | 'backgroundImage___fluid___sizes'
  | 'backgroundImage___sizes___base64'
  | 'backgroundImage___sizes___tracedSVG'
  | 'backgroundImage___sizes___aspectRatio'
  | 'backgroundImage___sizes___width'
  | 'backgroundImage___sizes___height'
  | 'backgroundImage___sizes___src'
  | 'backgroundImage___sizes___srcSet'
  | 'backgroundImage___sizes___sizes'
  | 'backgroundImage___fixed___base64'
  | 'backgroundImage___fixed___tracedSVG'
  | 'backgroundImage___fixed___aspectRatio'
  | 'backgroundImage___fixed___width'
  | 'backgroundImage___fixed___height'
  | 'backgroundImage___fixed___src'
  | 'backgroundImage___fixed___srcSet'
  | 'backgroundImage___fixed___sizes'
  | 'backgroundImage___resolutions___base64'
  | 'backgroundImage___resolutions___tracedSVG'
  | 'backgroundImage___resolutions___aspectRatio'
  | 'backgroundImage___resolutions___width'
  | 'backgroundImage___resolutions___height'
  | 'backgroundImage___resolutions___src'
  | 'backgroundImage___resolutions___srcSet'
  | 'backgroundImage___resolutions___sizes'
  | 'backgroundImage___gatsbyImageData'
  | 'backgroundImage___alt'
  | 'backgroundImage___title'
  | 'backgroundImage___customData'
  | 'backgroundImage___focalPoint___x'
  | 'backgroundImage___focalPoint___y'
  | 'url'
  | 'meta___createdAt'
  | 'meta___updatedAt'
  | 'meta___publishedAt'
  | 'meta___firstPublishedAt'
  | 'meta___isValid'
  | 'meta___status'
  | 'originalId'
  | 'locale'
  | 'seoMetaTags___tags'
  | 'seoMetaTags___id'
  | 'seoMetaTags___parent___id'
  | 'seoMetaTags___parent___parent___id'
  | 'seoMetaTags___parent___parent___children'
  | 'seoMetaTags___parent___children'
  | 'seoMetaTags___parent___children___id'
  | 'seoMetaTags___parent___children___children'
  | 'seoMetaTags___parent___internal___content'
  | 'seoMetaTags___parent___internal___contentDigest'
  | 'seoMetaTags___parent___internal___description'
  | 'seoMetaTags___parent___internal___fieldOwners'
  | 'seoMetaTags___parent___internal___ignoreType'
  | 'seoMetaTags___parent___internal___mediaType'
  | 'seoMetaTags___parent___internal___owner'
  | 'seoMetaTags___parent___internal___type'
  | 'seoMetaTags___children'
  | 'seoMetaTags___children___id'
  | 'seoMetaTags___children___parent___id'
  | 'seoMetaTags___children___parent___children'
  | 'seoMetaTags___children___children'
  | 'seoMetaTags___children___children___id'
  | 'seoMetaTags___children___children___children'
  | 'seoMetaTags___children___internal___content'
  | 'seoMetaTags___children___internal___contentDigest'
  | 'seoMetaTags___children___internal___description'
  | 'seoMetaTags___children___internal___fieldOwners'
  | 'seoMetaTags___children___internal___ignoreType'
  | 'seoMetaTags___children___internal___mediaType'
  | 'seoMetaTags___children___internal___owner'
  | 'seoMetaTags___children___internal___type'
  | 'seoMetaTags___internal___content'
  | 'seoMetaTags___internal___contentDigest'
  | 'seoMetaTags___internal___description'
  | 'seoMetaTags___internal___fieldOwners'
  | 'seoMetaTags___internal___ignoreType'
  | 'seoMetaTags___internal___mediaType'
  | 'seoMetaTags___internal___owner'
  | 'seoMetaTags___internal___type'
  | 'model___name'
  | 'model___singleton'
  | 'model___sortable'
  | 'model___apiKey'
  | 'model___orderingDirection'
  | 'model___tree'
  | 'model___modularBlock'
  | 'model___draftModeActive'
  | 'model___allLocalesRequired'
  | 'model___collectionAppeareance'
  | 'model___hasSingletonItem'
  | 'model___originalId'
  | 'model___fields___tags'
  | 'model___fields___id'
  | 'model___fields___parent___id'
  | 'model___fields___parent___children'
  | 'model___fields___children'
  | 'model___fields___children___id'
  | 'model___fields___children___children'
  | 'model___fields___internal___content'
  | 'model___fields___internal___contentDigest'
  | 'model___fields___internal___description'
  | 'model___fields___internal___fieldOwners'
  | 'model___fields___internal___ignoreType'
  | 'model___fields___internal___mediaType'
  | 'model___fields___internal___owner'
  | 'model___fields___internal___type'
  | 'model___id'
  | 'model___parent___id'
  | 'model___parent___parent___id'
  | 'model___parent___parent___children'
  | 'model___parent___children'
  | 'model___parent___children___id'
  | 'model___parent___children___children'
  | 'model___parent___internal___content'
  | 'model___parent___internal___contentDigest'
  | 'model___parent___internal___description'
  | 'model___parent___internal___fieldOwners'
  | 'model___parent___internal___ignoreType'
  | 'model___parent___internal___mediaType'
  | 'model___parent___internal___owner'
  | 'model___parent___internal___type'
  | 'model___children'
  | 'model___children___id'
  | 'model___children___parent___id'
  | 'model___children___parent___children'
  | 'model___children___children'
  | 'model___children___children___id'
  | 'model___children___children___children'
  | 'model___children___internal___content'
  | 'model___children___internal___contentDigest'
  | 'model___children___internal___description'
  | 'model___children___internal___fieldOwners'
  | 'model___children___internal___ignoreType'
  | 'model___children___internal___mediaType'
  | 'model___children___internal___owner'
  | 'model___children___internal___type'
  | 'model___internal___content'
  | 'model___internal___contentDigest'
  | 'model___internal___description'
  | 'model___internal___fieldOwners'
  | 'model___internal___ignoreType'
  | 'model___internal___mediaType'
  | 'model___internal___owner'
  | 'model___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DatoCmsProjectGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsProjectEdge>;
  nodes: Array<DatoCmsProject>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsProjectGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsProjectGroupConnectionDistinctArgs = {
  field: DatoCmsProjectFieldsEnum;
};


export type DatoCmsProjectGroupConnectionMaxArgs = {
  field: DatoCmsProjectFieldsEnum;
};


export type DatoCmsProjectGroupConnectionMinArgs = {
  field: DatoCmsProjectFieldsEnum;
};


export type DatoCmsProjectGroupConnectionSumArgs = {
  field: DatoCmsProjectFieldsEnum;
};


export type DatoCmsProjectGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsProjectFieldsEnum;
};

export type DatoCmsProjectSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsProjectFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderAboutFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderAboutFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderAboutFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderProjectsFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderProjectsFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderProjectsFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderSkillsFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderSkillsFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderSkillsFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderContactFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderContactFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsHeaderContactFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsHeaderConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsHeaderEdge>;
  nodes: Array<DatoCmsHeader>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsHeaderGroupConnection>;
};


export type DatoCmsHeaderConnectionDistinctArgs = {
  field: DatoCmsHeaderFieldsEnum;
};


export type DatoCmsHeaderConnectionMaxArgs = {
  field: DatoCmsHeaderFieldsEnum;
};


export type DatoCmsHeaderConnectionMinArgs = {
  field: DatoCmsHeaderFieldsEnum;
};


export type DatoCmsHeaderConnectionSumArgs = {
  field: DatoCmsHeaderFieldsEnum;
};


export type DatoCmsHeaderConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsHeaderFieldsEnum;
};

export type DatoCmsHeaderEdge = {
  next?: Maybe<DatoCmsHeader>;
  node: DatoCmsHeader;
  previous?: Maybe<DatoCmsHeader>;
};

export type DatoCmsHeaderFieldsEnum =
  | 'about'
  | '_allAboutLocales'
  | '_allAboutLocales___locale'
  | '_allAboutLocales___value'
  | 'projects'
  | '_allProjectsLocales'
  | '_allProjectsLocales___locale'
  | '_allProjectsLocales___value'
  | 'skills'
  | '_allSkillsLocales'
  | '_allSkillsLocales___locale'
  | '_allSkillsLocales___value'
  | 'contact'
  | '_allContactLocales'
  | '_allContactLocales___locale'
  | '_allContactLocales___value'
  | 'meta___createdAt'
  | 'meta___updatedAt'
  | 'meta___publishedAt'
  | 'meta___firstPublishedAt'
  | 'meta___isValid'
  | 'meta___status'
  | 'originalId'
  | 'locale'
  | 'seoMetaTags___tags'
  | 'seoMetaTags___id'
  | 'seoMetaTags___parent___id'
  | 'seoMetaTags___parent___parent___id'
  | 'seoMetaTags___parent___parent___children'
  | 'seoMetaTags___parent___children'
  | 'seoMetaTags___parent___children___id'
  | 'seoMetaTags___parent___children___children'
  | 'seoMetaTags___parent___internal___content'
  | 'seoMetaTags___parent___internal___contentDigest'
  | 'seoMetaTags___parent___internal___description'
  | 'seoMetaTags___parent___internal___fieldOwners'
  | 'seoMetaTags___parent___internal___ignoreType'
  | 'seoMetaTags___parent___internal___mediaType'
  | 'seoMetaTags___parent___internal___owner'
  | 'seoMetaTags___parent___internal___type'
  | 'seoMetaTags___children'
  | 'seoMetaTags___children___id'
  | 'seoMetaTags___children___parent___id'
  | 'seoMetaTags___children___parent___children'
  | 'seoMetaTags___children___children'
  | 'seoMetaTags___children___children___id'
  | 'seoMetaTags___children___children___children'
  | 'seoMetaTags___children___internal___content'
  | 'seoMetaTags___children___internal___contentDigest'
  | 'seoMetaTags___children___internal___description'
  | 'seoMetaTags___children___internal___fieldOwners'
  | 'seoMetaTags___children___internal___ignoreType'
  | 'seoMetaTags___children___internal___mediaType'
  | 'seoMetaTags___children___internal___owner'
  | 'seoMetaTags___children___internal___type'
  | 'seoMetaTags___internal___content'
  | 'seoMetaTags___internal___contentDigest'
  | 'seoMetaTags___internal___description'
  | 'seoMetaTags___internal___fieldOwners'
  | 'seoMetaTags___internal___ignoreType'
  | 'seoMetaTags___internal___mediaType'
  | 'seoMetaTags___internal___owner'
  | 'seoMetaTags___internal___type'
  | 'model___name'
  | 'model___singleton'
  | 'model___sortable'
  | 'model___apiKey'
  | 'model___orderingDirection'
  | 'model___tree'
  | 'model___modularBlock'
  | 'model___draftModeActive'
  | 'model___allLocalesRequired'
  | 'model___collectionAppeareance'
  | 'model___hasSingletonItem'
  | 'model___originalId'
  | 'model___fields___tags'
  | 'model___fields___id'
  | 'model___fields___parent___id'
  | 'model___fields___parent___children'
  | 'model___fields___children'
  | 'model___fields___children___id'
  | 'model___fields___children___children'
  | 'model___fields___internal___content'
  | 'model___fields___internal___contentDigest'
  | 'model___fields___internal___description'
  | 'model___fields___internal___fieldOwners'
  | 'model___fields___internal___ignoreType'
  | 'model___fields___internal___mediaType'
  | 'model___fields___internal___owner'
  | 'model___fields___internal___type'
  | 'model___id'
  | 'model___parent___id'
  | 'model___parent___parent___id'
  | 'model___parent___parent___children'
  | 'model___parent___children'
  | 'model___parent___children___id'
  | 'model___parent___children___children'
  | 'model___parent___internal___content'
  | 'model___parent___internal___contentDigest'
  | 'model___parent___internal___description'
  | 'model___parent___internal___fieldOwners'
  | 'model___parent___internal___ignoreType'
  | 'model___parent___internal___mediaType'
  | 'model___parent___internal___owner'
  | 'model___parent___internal___type'
  | 'model___children'
  | 'model___children___id'
  | 'model___children___parent___id'
  | 'model___children___parent___children'
  | 'model___children___children'
  | 'model___children___children___id'
  | 'model___children___children___children'
  | 'model___children___internal___content'
  | 'model___children___internal___contentDigest'
  | 'model___children___internal___description'
  | 'model___children___internal___fieldOwners'
  | 'model___children___internal___ignoreType'
  | 'model___children___internal___mediaType'
  | 'model___children___internal___owner'
  | 'model___children___internal___type'
  | 'model___internal___content'
  | 'model___internal___contentDigest'
  | 'model___internal___description'
  | 'model___internal___fieldOwners'
  | 'model___internal___ignoreType'
  | 'model___internal___mediaType'
  | 'model___internal___owner'
  | 'model___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DatoCmsHeaderGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsHeaderEdge>;
  nodes: Array<DatoCmsHeader>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsHeaderGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsHeaderGroupConnectionDistinctArgs = {
  field: DatoCmsHeaderFieldsEnum;
};


export type DatoCmsHeaderGroupConnectionMaxArgs = {
  field: DatoCmsHeaderFieldsEnum;
};


export type DatoCmsHeaderGroupConnectionMinArgs = {
  field: DatoCmsHeaderFieldsEnum;
};


export type DatoCmsHeaderGroupConnectionSumArgs = {
  field: DatoCmsHeaderFieldsEnum;
};


export type DatoCmsHeaderGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsHeaderFieldsEnum;
};

export type DatoCmsHeaderFilterInput = {
  about?: InputMaybe<StringQueryOperatorInput>;
  _allAboutLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderAboutFilterListInput>;
  projects?: InputMaybe<StringQueryOperatorInput>;
  _allProjectsLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderProjectsFilterListInput>;
  skills?: InputMaybe<StringQueryOperatorInput>;
  _allSkillsLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderSkillsFilterListInput>;
  contact?: InputMaybe<StringQueryOperatorInput>;
  _allContactLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsHeaderContactFilterListInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsHeaderSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsHeaderFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsAllLocalesForDatoCmsFooterContactFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsFooterContactFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsFooterContactFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsFooterResumeFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsFooterResumeFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsFooterResumeFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsFooterProjectsFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsFooterProjectsFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsFooterProjectsFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsFooterSocialMediaTitleFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsFooterSocialMediaTitleFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsFooterSocialMediaTitleFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsAllLocalesForDatoCmsFooterLinkedinFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsAllLocalesForDatoCmsFooterLinkedinFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsFooterLinkedinFilterInput = {
  locale?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsFooterConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsFooterEdge>;
  nodes: Array<DatoCmsFooter>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsFooterGroupConnection>;
};


export type DatoCmsFooterConnectionDistinctArgs = {
  field: DatoCmsFooterFieldsEnum;
};


export type DatoCmsFooterConnectionMaxArgs = {
  field: DatoCmsFooterFieldsEnum;
};


export type DatoCmsFooterConnectionMinArgs = {
  field: DatoCmsFooterFieldsEnum;
};


export type DatoCmsFooterConnectionSumArgs = {
  field: DatoCmsFooterFieldsEnum;
};


export type DatoCmsFooterConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsFooterFieldsEnum;
};

export type DatoCmsFooterEdge = {
  next?: Maybe<DatoCmsFooter>;
  node: DatoCmsFooter;
  previous?: Maybe<DatoCmsFooter>;
};

export type DatoCmsFooterFieldsEnum =
  | 'contact'
  | '_allContactLocales'
  | '_allContactLocales___locale'
  | '_allContactLocales___value'
  | 'resume'
  | '_allResumeLocales'
  | '_allResumeLocales___locale'
  | '_allResumeLocales___value'
  | 'projects'
  | '_allProjectsLocales'
  | '_allProjectsLocales___locale'
  | '_allProjectsLocales___value'
  | 'socialMediaTitle'
  | '_allSocialMediaTitleLocales'
  | '_allSocialMediaTitleLocales___locale'
  | '_allSocialMediaTitleLocales___value'
  | 'linkedin'
  | '_allLinkedinLocales'
  | '_allLinkedinLocales___locale'
  | '_allLinkedinLocales___value'
  | 'linkedinUrl'
  | 'meta___createdAt'
  | 'meta___updatedAt'
  | 'meta___publishedAt'
  | 'meta___firstPublishedAt'
  | 'meta___isValid'
  | 'meta___status'
  | 'originalId'
  | 'locale'
  | 'seoMetaTags___tags'
  | 'seoMetaTags___id'
  | 'seoMetaTags___parent___id'
  | 'seoMetaTags___parent___parent___id'
  | 'seoMetaTags___parent___parent___children'
  | 'seoMetaTags___parent___children'
  | 'seoMetaTags___parent___children___id'
  | 'seoMetaTags___parent___children___children'
  | 'seoMetaTags___parent___internal___content'
  | 'seoMetaTags___parent___internal___contentDigest'
  | 'seoMetaTags___parent___internal___description'
  | 'seoMetaTags___parent___internal___fieldOwners'
  | 'seoMetaTags___parent___internal___ignoreType'
  | 'seoMetaTags___parent___internal___mediaType'
  | 'seoMetaTags___parent___internal___owner'
  | 'seoMetaTags___parent___internal___type'
  | 'seoMetaTags___children'
  | 'seoMetaTags___children___id'
  | 'seoMetaTags___children___parent___id'
  | 'seoMetaTags___children___parent___children'
  | 'seoMetaTags___children___children'
  | 'seoMetaTags___children___children___id'
  | 'seoMetaTags___children___children___children'
  | 'seoMetaTags___children___internal___content'
  | 'seoMetaTags___children___internal___contentDigest'
  | 'seoMetaTags___children___internal___description'
  | 'seoMetaTags___children___internal___fieldOwners'
  | 'seoMetaTags___children___internal___ignoreType'
  | 'seoMetaTags___children___internal___mediaType'
  | 'seoMetaTags___children___internal___owner'
  | 'seoMetaTags___children___internal___type'
  | 'seoMetaTags___internal___content'
  | 'seoMetaTags___internal___contentDigest'
  | 'seoMetaTags___internal___description'
  | 'seoMetaTags___internal___fieldOwners'
  | 'seoMetaTags___internal___ignoreType'
  | 'seoMetaTags___internal___mediaType'
  | 'seoMetaTags___internal___owner'
  | 'seoMetaTags___internal___type'
  | 'model___name'
  | 'model___singleton'
  | 'model___sortable'
  | 'model___apiKey'
  | 'model___orderingDirection'
  | 'model___tree'
  | 'model___modularBlock'
  | 'model___draftModeActive'
  | 'model___allLocalesRequired'
  | 'model___collectionAppeareance'
  | 'model___hasSingletonItem'
  | 'model___originalId'
  | 'model___fields___tags'
  | 'model___fields___id'
  | 'model___fields___parent___id'
  | 'model___fields___parent___children'
  | 'model___fields___children'
  | 'model___fields___children___id'
  | 'model___fields___children___children'
  | 'model___fields___internal___content'
  | 'model___fields___internal___contentDigest'
  | 'model___fields___internal___description'
  | 'model___fields___internal___fieldOwners'
  | 'model___fields___internal___ignoreType'
  | 'model___fields___internal___mediaType'
  | 'model___fields___internal___owner'
  | 'model___fields___internal___type'
  | 'model___id'
  | 'model___parent___id'
  | 'model___parent___parent___id'
  | 'model___parent___parent___children'
  | 'model___parent___children'
  | 'model___parent___children___id'
  | 'model___parent___children___children'
  | 'model___parent___internal___content'
  | 'model___parent___internal___contentDigest'
  | 'model___parent___internal___description'
  | 'model___parent___internal___fieldOwners'
  | 'model___parent___internal___ignoreType'
  | 'model___parent___internal___mediaType'
  | 'model___parent___internal___owner'
  | 'model___parent___internal___type'
  | 'model___children'
  | 'model___children___id'
  | 'model___children___parent___id'
  | 'model___children___parent___children'
  | 'model___children___children'
  | 'model___children___children___id'
  | 'model___children___children___children'
  | 'model___children___internal___content'
  | 'model___children___internal___contentDigest'
  | 'model___children___internal___description'
  | 'model___children___internal___fieldOwners'
  | 'model___children___internal___ignoreType'
  | 'model___children___internal___mediaType'
  | 'model___children___internal___owner'
  | 'model___children___internal___type'
  | 'model___internal___content'
  | 'model___internal___contentDigest'
  | 'model___internal___description'
  | 'model___internal___fieldOwners'
  | 'model___internal___ignoreType'
  | 'model___internal___mediaType'
  | 'model___internal___owner'
  | 'model___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DatoCmsFooterGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsFooterEdge>;
  nodes: Array<DatoCmsFooter>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsFooterGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsFooterGroupConnectionDistinctArgs = {
  field: DatoCmsFooterFieldsEnum;
};


export type DatoCmsFooterGroupConnectionMaxArgs = {
  field: DatoCmsFooterFieldsEnum;
};


export type DatoCmsFooterGroupConnectionMinArgs = {
  field: DatoCmsFooterFieldsEnum;
};


export type DatoCmsFooterGroupConnectionSumArgs = {
  field: DatoCmsFooterFieldsEnum;
};


export type DatoCmsFooterGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsFooterFieldsEnum;
};

export type DatoCmsFooterFilterInput = {
  contact?: InputMaybe<StringQueryOperatorInput>;
  _allContactLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsFooterContactFilterListInput>;
  resume?: InputMaybe<StringQueryOperatorInput>;
  _allResumeLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsFooterResumeFilterListInput>;
  projects?: InputMaybe<StringQueryOperatorInput>;
  _allProjectsLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsFooterProjectsFilterListInput>;
  socialMediaTitle?: InputMaybe<StringQueryOperatorInput>;
  _allSocialMediaTitleLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsFooterSocialMediaTitleFilterListInput>;
  linkedin?: InputMaybe<StringQueryOperatorInput>;
  _allLinkedinLocales?: InputMaybe<DatoCmsAllLocalesForDatoCmsFooterLinkedinFilterListInput>;
  linkedinUrl?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsFooterSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsFooterFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsAssetEdge>;
  nodes: Array<DatoCmsAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsAssetGroupConnection>;
};


export type DatoCmsAssetConnectionDistinctArgs = {
  field: DatoCmsAssetFieldsEnum;
};


export type DatoCmsAssetConnectionMaxArgs = {
  field: DatoCmsAssetFieldsEnum;
};


export type DatoCmsAssetConnectionMinArgs = {
  field: DatoCmsAssetFieldsEnum;
};


export type DatoCmsAssetConnectionSumArgs = {
  field: DatoCmsAssetFieldsEnum;
};


export type DatoCmsAssetConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsAssetFieldsEnum;
};

export type DatoCmsAssetEdge = {
  next?: Maybe<DatoCmsAsset>;
  node: DatoCmsAsset;
  previous?: Maybe<DatoCmsAsset>;
};

export type DatoCmsAssetFieldsEnum =
  | 'size'
  | 'width'
  | 'height'
  | 'path'
  | 'format'
  | 'isImage'
  | 'notes'
  | 'author'
  | 'copyright'
  | 'tags'
  | 'smartTags'
  | 'filename'
  | 'basename'
  | 'exifInfo'
  | 'mimeType'
  | 'colors'
  | 'colors___red'
  | 'colors___green'
  | 'colors___blue'
  | 'colors___alpha'
  | 'colors___rgb'
  | 'colors___hex'
  | 'blurhash'
  | 'originalId'
  | 'url'
  | 'createdAt'
  | 'video___muxPlaybackId'
  | 'video___frameRate'
  | 'video___duration'
  | 'video___streamingUrl'
  | 'video___thumbnailUrl'
  | 'video___mp4Url'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___width'
  | 'fluid___height'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___sizes'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___width'
  | 'sizes___height'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___sizes'
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___sizes'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___sizes'
  | 'gatsbyImageData'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DatoCmsAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsAssetEdge>;
  nodes: Array<DatoCmsAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsAssetGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsAssetGroupConnectionDistinctArgs = {
  field: DatoCmsAssetFieldsEnum;
};


export type DatoCmsAssetGroupConnectionMaxArgs = {
  field: DatoCmsAssetFieldsEnum;
};


export type DatoCmsAssetGroupConnectionMinArgs = {
  field: DatoCmsAssetFieldsEnum;
};


export type DatoCmsAssetGroupConnectionSumArgs = {
  field: DatoCmsAssetFieldsEnum;
};


export type DatoCmsAssetGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsAssetFieldsEnum;
};

export type DatoCmsAssetFilterInput = {
  size?: InputMaybe<IntQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  format?: InputMaybe<StringQueryOperatorInput>;
  isImage?: InputMaybe<BooleanQueryOperatorInput>;
  notes?: InputMaybe<StringQueryOperatorInput>;
  author?: InputMaybe<StringQueryOperatorInput>;
  copyright?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  smartTags?: InputMaybe<StringQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  basename?: InputMaybe<StringQueryOperatorInput>;
  exifInfo?: InputMaybe<JsonQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  colors?: InputMaybe<DatoCmsColorFieldFilterListInput>;
  blurhash?: InputMaybe<StringQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  video?: InputMaybe<DatoCmsAssetVideoFilterInput>;
  fluid?: InputMaybe<DatoCmsFluidFilterInput>;
  sizes?: InputMaybe<DatoCmsFluidFilterInput>;
  fixed?: InputMaybe<DatoCmsFixedFilterInput>;
  resolutions?: InputMaybe<DatoCmsFixedFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsAssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsAssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsGlobalSeoFilterInput = {
  siteName?: InputMaybe<StringQueryOperatorInput>;
  titleSuffix?: InputMaybe<StringQueryOperatorInput>;
  twitterAccount?: InputMaybe<StringQueryOperatorInput>;
  facebookPageUrl?: InputMaybe<StringQueryOperatorInput>;
  fallbackSeo?: InputMaybe<DatoCmsSeoFieldFilterInput>;
};

export type DatoCmsSeoFieldFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  twitterCard?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<DatoCmsAssetFilterInput>;
};

export type DatoCmsSiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSiteEdge>;
  nodes: Array<DatoCmsSite>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsSiteGroupConnection>;
};


export type DatoCmsSiteConnectionDistinctArgs = {
  field: DatoCmsSiteFieldsEnum;
};


export type DatoCmsSiteConnectionMaxArgs = {
  field: DatoCmsSiteFieldsEnum;
};


export type DatoCmsSiteConnectionMinArgs = {
  field: DatoCmsSiteFieldsEnum;
};


export type DatoCmsSiteConnectionSumArgs = {
  field: DatoCmsSiteFieldsEnum;
};


export type DatoCmsSiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsSiteFieldsEnum;
};

export type DatoCmsSiteEdge = {
  next?: Maybe<DatoCmsSite>;
  node: DatoCmsSite;
  previous?: Maybe<DatoCmsSite>;
};

export type DatoCmsSiteFieldsEnum =
  | 'name'
  | 'locale'
  | 'locales'
  | 'domain'
  | 'internalDomain'
  | 'noIndex'
  | 'globalSeo___siteName'
  | 'globalSeo___titleSuffix'
  | 'globalSeo___twitterAccount'
  | 'globalSeo___facebookPageUrl'
  | 'globalSeo___fallbackSeo___title'
  | 'globalSeo___fallbackSeo___description'
  | 'globalSeo___fallbackSeo___twitterCard'
  | 'globalSeo___fallbackSeo___image___size'
  | 'globalSeo___fallbackSeo___image___width'
  | 'globalSeo___fallbackSeo___image___height'
  | 'globalSeo___fallbackSeo___image___path'
  | 'globalSeo___fallbackSeo___image___format'
  | 'globalSeo___fallbackSeo___image___isImage'
  | 'globalSeo___fallbackSeo___image___notes'
  | 'globalSeo___fallbackSeo___image___author'
  | 'globalSeo___fallbackSeo___image___copyright'
  | 'globalSeo___fallbackSeo___image___tags'
  | 'globalSeo___fallbackSeo___image___smartTags'
  | 'globalSeo___fallbackSeo___image___filename'
  | 'globalSeo___fallbackSeo___image___basename'
  | 'globalSeo___fallbackSeo___image___exifInfo'
  | 'globalSeo___fallbackSeo___image___mimeType'
  | 'globalSeo___fallbackSeo___image___colors'
  | 'globalSeo___fallbackSeo___image___blurhash'
  | 'globalSeo___fallbackSeo___image___originalId'
  | 'globalSeo___fallbackSeo___image___url'
  | 'globalSeo___fallbackSeo___image___createdAt'
  | 'globalSeo___fallbackSeo___image___gatsbyImageData'
  | 'globalSeo___fallbackSeo___image___id'
  | 'globalSeo___fallbackSeo___image___children'
  | 'faviconMetaTags___tags'
  | 'faviconMetaTags___id'
  | 'faviconMetaTags___parent___id'
  | 'faviconMetaTags___parent___parent___id'
  | 'faviconMetaTags___parent___parent___children'
  | 'faviconMetaTags___parent___children'
  | 'faviconMetaTags___parent___children___id'
  | 'faviconMetaTags___parent___children___children'
  | 'faviconMetaTags___parent___internal___content'
  | 'faviconMetaTags___parent___internal___contentDigest'
  | 'faviconMetaTags___parent___internal___description'
  | 'faviconMetaTags___parent___internal___fieldOwners'
  | 'faviconMetaTags___parent___internal___ignoreType'
  | 'faviconMetaTags___parent___internal___mediaType'
  | 'faviconMetaTags___parent___internal___owner'
  | 'faviconMetaTags___parent___internal___type'
  | 'faviconMetaTags___children'
  | 'faviconMetaTags___children___id'
  | 'faviconMetaTags___children___parent___id'
  | 'faviconMetaTags___children___parent___children'
  | 'faviconMetaTags___children___children'
  | 'faviconMetaTags___children___children___id'
  | 'faviconMetaTags___children___children___children'
  | 'faviconMetaTags___children___internal___content'
  | 'faviconMetaTags___children___internal___contentDigest'
  | 'faviconMetaTags___children___internal___description'
  | 'faviconMetaTags___children___internal___fieldOwners'
  | 'faviconMetaTags___children___internal___ignoreType'
  | 'faviconMetaTags___children___internal___mediaType'
  | 'faviconMetaTags___children___internal___owner'
  | 'faviconMetaTags___children___internal___type'
  | 'faviconMetaTags___internal___content'
  | 'faviconMetaTags___internal___contentDigest'
  | 'faviconMetaTags___internal___description'
  | 'faviconMetaTags___internal___fieldOwners'
  | 'faviconMetaTags___internal___ignoreType'
  | 'faviconMetaTags___internal___mediaType'
  | 'faviconMetaTags___internal___owner'
  | 'faviconMetaTags___internal___type'
  | 'originalId'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DatoCmsSiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSiteEdge>;
  nodes: Array<DatoCmsSite>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsSiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsSiteGroupConnectionDistinctArgs = {
  field: DatoCmsSiteFieldsEnum;
};


export type DatoCmsSiteGroupConnectionMaxArgs = {
  field: DatoCmsSiteFieldsEnum;
};


export type DatoCmsSiteGroupConnectionMinArgs = {
  field: DatoCmsSiteFieldsEnum;
};


export type DatoCmsSiteGroupConnectionSumArgs = {
  field: DatoCmsSiteFieldsEnum;
};


export type DatoCmsSiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsSiteFieldsEnum;
};

export type DatoCmsSiteFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  locales?: InputMaybe<StringQueryOperatorInput>;
  domain?: InputMaybe<StringQueryOperatorInput>;
  internalDomain?: InputMaybe<StringQueryOperatorInput>;
  noIndex?: InputMaybe<BooleanQueryOperatorInput>;
  globalSeo?: InputMaybe<DatoCmsGlobalSeoFilterInput>;
  faviconMetaTags?: InputMaybe<DatoCmsFaviconMetaTagsFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsSiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsSiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsFaviconMetaTagsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsFaviconMetaTagsEdge>;
  nodes: Array<DatoCmsFaviconMetaTags>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsFaviconMetaTagsGroupConnection>;
};


export type DatoCmsFaviconMetaTagsConnectionDistinctArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


export type DatoCmsFaviconMetaTagsConnectionMaxArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


export type DatoCmsFaviconMetaTagsConnectionMinArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


export type DatoCmsFaviconMetaTagsConnectionSumArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


export type DatoCmsFaviconMetaTagsConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};

export type DatoCmsFaviconMetaTagsEdge = {
  next?: Maybe<DatoCmsFaviconMetaTags>;
  node: DatoCmsFaviconMetaTags;
  previous?: Maybe<DatoCmsFaviconMetaTags>;
};

export type DatoCmsFaviconMetaTagsFieldsEnum =
  | 'tags'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DatoCmsFaviconMetaTagsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsFaviconMetaTagsEdge>;
  nodes: Array<DatoCmsFaviconMetaTags>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsFaviconMetaTagsGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsFaviconMetaTagsGroupConnectionDistinctArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


export type DatoCmsFaviconMetaTagsGroupConnectionMaxArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


export type DatoCmsFaviconMetaTagsGroupConnectionMinArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


export type DatoCmsFaviconMetaTagsGroupConnectionSumArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


export type DatoCmsFaviconMetaTagsGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};

export type DatoCmsFaviconMetaTagsSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsFaviconMetaTagsFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsFieldConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsFieldEdge>;
  nodes: Array<DatoCmsField>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsFieldGroupConnection>;
};


export type DatoCmsFieldConnectionDistinctArgs = {
  field: DatoCmsFieldFieldsEnum;
};


export type DatoCmsFieldConnectionMaxArgs = {
  field: DatoCmsFieldFieldsEnum;
};


export type DatoCmsFieldConnectionMinArgs = {
  field: DatoCmsFieldFieldsEnum;
};


export type DatoCmsFieldConnectionSumArgs = {
  field: DatoCmsFieldFieldsEnum;
};


export type DatoCmsFieldConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsFieldFieldsEnum;
};

export type DatoCmsFieldEdge = {
  next?: Maybe<DatoCmsField>;
  node: DatoCmsField;
  previous?: Maybe<DatoCmsField>;
};

export type DatoCmsFieldFieldsEnum =
  | 'label'
  | 'fieldType'
  | 'apiKey'
  | 'localized'
  | 'validators'
  | 'position'
  | 'appeareance'
  | 'defaultValue'
  | 'originalId'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DatoCmsFieldGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsFieldEdge>;
  nodes: Array<DatoCmsField>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsFieldGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsFieldGroupConnectionDistinctArgs = {
  field: DatoCmsFieldFieldsEnum;
};


export type DatoCmsFieldGroupConnectionMaxArgs = {
  field: DatoCmsFieldFieldsEnum;
};


export type DatoCmsFieldGroupConnectionMinArgs = {
  field: DatoCmsFieldFieldsEnum;
};


export type DatoCmsFieldGroupConnectionSumArgs = {
  field: DatoCmsFieldFieldsEnum;
};


export type DatoCmsFieldGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsFieldFieldsEnum;
};

export type DatoCmsFieldFilterInput = {
  label?: InputMaybe<StringQueryOperatorInput>;
  fieldType?: InputMaybe<StringQueryOperatorInput>;
  apiKey?: InputMaybe<StringQueryOperatorInput>;
  localized?: InputMaybe<BooleanQueryOperatorInput>;
  validators?: InputMaybe<JsonQueryOperatorInput>;
  position?: InputMaybe<IntQueryOperatorInput>;
  appeareance?: InputMaybe<JsonQueryOperatorInput>;
  defaultValue?: InputMaybe<JsonQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DatoCmsFieldSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsFieldFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DatoCmsModelConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsModelEdge>;
  nodes: Array<DatoCmsModel>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsModelGroupConnection>;
};


export type DatoCmsModelConnectionDistinctArgs = {
  field: DatoCmsModelFieldsEnum;
};


export type DatoCmsModelConnectionMaxArgs = {
  field: DatoCmsModelFieldsEnum;
};


export type DatoCmsModelConnectionMinArgs = {
  field: DatoCmsModelFieldsEnum;
};


export type DatoCmsModelConnectionSumArgs = {
  field: DatoCmsModelFieldsEnum;
};


export type DatoCmsModelConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsModelFieldsEnum;
};

export type DatoCmsModelEdge = {
  next?: Maybe<DatoCmsModel>;
  node: DatoCmsModel;
  previous?: Maybe<DatoCmsModel>;
};

export type DatoCmsModelFieldsEnum =
  | 'name'
  | 'singleton'
  | 'sortable'
  | 'apiKey'
  | 'orderingDirection'
  | 'tree'
  | 'modularBlock'
  | 'draftModeActive'
  | 'allLocalesRequired'
  | 'collectionAppeareance'
  | 'hasSingletonItem'
  | 'originalId'
  | 'fields___tags'
  | 'fields___id'
  | 'fields___parent___id'
  | 'fields___parent___parent___id'
  | 'fields___parent___parent___children'
  | 'fields___parent___children'
  | 'fields___parent___children___id'
  | 'fields___parent___children___children'
  | 'fields___parent___internal___content'
  | 'fields___parent___internal___contentDigest'
  | 'fields___parent___internal___description'
  | 'fields___parent___internal___fieldOwners'
  | 'fields___parent___internal___ignoreType'
  | 'fields___parent___internal___mediaType'
  | 'fields___parent___internal___owner'
  | 'fields___parent___internal___type'
  | 'fields___children'
  | 'fields___children___id'
  | 'fields___children___parent___id'
  | 'fields___children___parent___children'
  | 'fields___children___children'
  | 'fields___children___children___id'
  | 'fields___children___children___children'
  | 'fields___children___internal___content'
  | 'fields___children___internal___contentDigest'
  | 'fields___children___internal___description'
  | 'fields___children___internal___fieldOwners'
  | 'fields___children___internal___ignoreType'
  | 'fields___children___internal___mediaType'
  | 'fields___children___internal___owner'
  | 'fields___children___internal___type'
  | 'fields___internal___content'
  | 'fields___internal___contentDigest'
  | 'fields___internal___description'
  | 'fields___internal___fieldOwners'
  | 'fields___internal___ignoreType'
  | 'fields___internal___mediaType'
  | 'fields___internal___owner'
  | 'fields___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DatoCmsModelGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsModelEdge>;
  nodes: Array<DatoCmsModel>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DatoCmsModelGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DatoCmsModelGroupConnectionDistinctArgs = {
  field: DatoCmsModelFieldsEnum;
};


export type DatoCmsModelGroupConnectionMaxArgs = {
  field: DatoCmsModelFieldsEnum;
};


export type DatoCmsModelGroupConnectionMinArgs = {
  field: DatoCmsModelFieldsEnum;
};


export type DatoCmsModelGroupConnectionSumArgs = {
  field: DatoCmsModelFieldsEnum;
};


export type DatoCmsModelGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DatoCmsModelFieldsEnum;
};

export type DatoCmsModelSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DatoCmsModelFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type AboutFieldsFragment = { aboutTitle?: string | null, seeResumeButtonTitle?: string | null, aboutParagraphOne?: string | null, aboutParagraphTwo?: string | null, aboutParagraphThree?: string | null, aboutImage?: { gatsbyImageData?: any | null, format?: string | null, alt?: string | null } | null };

export type ProjectFieldsFragment = { title?: string | null, subtitle?: string | null, url?: string | null, backgroundImage?: { gatsbyImageData?: any | null, format?: string | null, alt?: string | null } | null };

export type ProjectsFieldsFragment = { projectsTitle?: string | null, highlightedProject?: Array<{ title?: string | null, subtitle?: string | null, url?: string | null, backgroundImage?: { gatsbyImageData?: any | null, format?: string | null, alt?: string | null } | null } | null> | null, projects?: Array<{ title?: string | null, subtitle?: string | null, url?: string | null, backgroundImage?: { gatsbyImageData?: any | null, format?: string | null, alt?: string | null } | null } | null> | null };

export type HeaderFieldsFragment = { about?: string | null, contact?: string | null, projects?: string | null, skills?: string | null };

export type HelperDatoCmsFixedFragment = { aspectRatio?: number | null, base64?: string | null, height: number, sizes?: string | null, src: string, srcSet: string, tracedSVG?: string | null, width: number };

export type HelperDatoCmsFluidFragment = { aspectRatio: number, base64?: string | null, height?: number | null, sizes: string, src: string, srcSet: string, tracedSVG?: string | null, width?: number | null };

export type ContactQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type ContactQuery = { datoCmsHeader?: { about?: string | null, contact?: string | null, projects?: string | null, skills?: string | null } | null };

export type HomeQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type HomeQuery = { datoCmsHomePage?: { coverTitleOne?: string | null, coverTitleThree?: string | null, coverTitleTwo?: string | null, projectsTitle?: string | null, aboutTitle?: string | null, seeResumeButtonTitle?: string | null, aboutParagraphOne?: string | null, aboutParagraphTwo?: string | null, aboutParagraphThree?: string | null, highlightedProject?: Array<{ title?: string | null, subtitle?: string | null, url?: string | null, backgroundImage?: { gatsbyImageData?: any | null, format?: string | null, alt?: string | null } | null } | null> | null, projects?: Array<{ title?: string | null, subtitle?: string | null, url?: string | null, backgroundImage?: { gatsbyImageData?: any | null, format?: string | null, alt?: string | null } | null } | null> | null, aboutImage?: { gatsbyImageData?: any | null, format?: string | null, alt?: string | null } | null } | null, datoCmsHeader?: { about?: string | null, contact?: string | null, projects?: string | null, skills?: string | null } | null };

export type ProjectsQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type ProjectsQuery = { datoCmsHeader?: { about?: string | null, contact?: string | null, projects?: string | null, skills?: string | null } | null };

export type GatsbyDatoCmsResolutionsFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyDatoCmsResolutions_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyDatoCmsResolutions_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyDatoCmsSizesFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyDatoCmsSizes_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyDatoCmsSizes_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyDatoCmsFixedFragment = { base64?: string | null, width: number, height: number, aspectRatio?: number | null, src: string, srcSet: string };

export type GatsbyDatoCmsFixed_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, aspectRatio?: number | null, src: string, srcSet: string };

export type GatsbyDatoCmsFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, aspectRatio?: number | null };

export type GatsbyDatoCmsFluidFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyDatoCmsFluid_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyDatoCmsFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyDatoCmsFaviconMetaTagsFragment = { tags?: any | null };

export type GatsbyDatoCmsSeoMetaTagsFragment = { tags?: any | null };

export type GatsbyImageSharpFixedFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFluidFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };
