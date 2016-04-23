/**
 * Copyright (c) 2015-present, Horcrux.
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "RNSVGPath.h"

@implementation RNSVGPath

- (void)setD:(CGPathRef)d
{
    if (d == _d) {
        return;
    }
    [self invalidate];
    CGPathRelease(_d);
    _d = CGPathRetain(d);
}

- (void)dealloc
{
    CGPathRelease(_d);
}

- (void)renderLayerTo:(CGContextRef)context
{
    if ((!self.fill && !self.stroke) || !self.d) {
        return;
    }
    
    CGPathDrawingMode mode = kCGPathStroke;
    BOOL fillColor = YES;
    
    if (self.fill) {
        mode = self.fillRule == kRNSVGCGFCRuleEvenodd ? kCGPathEOFill : kCGPathFill;
        fillColor = [self.fill applyFillColor:context];
        
        if (!fillColor) {
            if (self.clipPath) {
                [self clip:context];
            }
            
            CGContextSaveGState(context);
            CGContextAddPath(context, self.d);
            CGContextClip(context);
            [self.fill paint:context];
            CGContextRestoreGState(context);
            if (!self.stroke) {
                return;
            }
        }
    }
    if (self.stroke) {
        CGContextSetLineWidth(context, self.strokeWidth);
        CGContextSetLineCap(context, self.strokeLinecap);
        CGContextSetLineJoin(context, self.strokeLinejoin);
        RNSVGCGFloatArray dash = self.strokeDash;
        
        // TODO: render as web svgs do
        if (dash.count) {
            CGContextSetLineDash(context, 0, dash.array, dash.count);
        }
        
        if (!fillColor) {
            CGContextAddPath(context, self.d);
            CGContextReplacePathWithStrokedPath(context);
            CGContextClip(context);
        }
        
        if ([self.stroke applyStrokeColor:context]) {

            if (mode == kCGPathFill) {
                mode = kCGPathFillStroke;
            } else if (mode == kCGPathEOFill) {
                mode = kCGPathEOFillStroke;
            }
        } else {
            // draw fill
            [self clip:context];
            CGContextAddPath(context, self.d);
            CGContextDrawPath(context, mode);
            
            // draw stroke
            CGContextAddPath(context, self.d);
            CGContextReplacePathWithStrokedPath(context);
            CGContextClip(context);
            [self.stroke paint:context];
            
            return;
        }
    }
    
    [self clip:context];
    CGContextAddPath(context, self.d);
    CGContextDrawPath(context, mode);
}

@end