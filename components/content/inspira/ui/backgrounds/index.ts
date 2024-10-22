import { cva, type VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'vue';

import { ObjectValues } from '@/lib/utils';

export const PATTERN_BACKGROUND_DIRECTION = {
	Top: 'top',
	Bottom: 'bottom',
	Left: 'left',
	Right: 'right',
	TopLeft: 'top-left',
	TopRight: 'top-right',
	BottomLeft: 'bottom-left',
	BottomRight: 'bottom-right',
} as const;

export type PatternBackgroundDirection = ObjectValues<typeof PATTERN_BACKGROUND_DIRECTION>;

export interface BaseProps {
	class?: HTMLAttributes['class'];
	animate?: boolean;
	direction?: PatternBackgroundDirection;
	variant?: PatternBackgroundVariants['variant'];
	size?: PatternBackgroundVariants['size'];
	mask?: PatternBackgroundVariants['mask'];
	speed?: ObjectValues<typeof PATTERN_BACKGROUND_SPEED>;
}

export { default as PatternBackground } from './PatternBackground.vue';

export const PATTERN_BACKGROUND_VARIANT = {
	Grid: 'grid',
	Dot: 'dot',
	BigDot: 'big-dot',
} as const;

export const PATTERN_BACKGROUND_MASK = {
	Ellipse: 'ellipse',
	EllipseTop: 'ellipse-top',
} as const;

export const PATTERN_BACKGROUND_SPEED = {
	Default: '10s',
	Slow: '25s',
	Fast: '5s',
} as const;

export const patternBackgroundVariants = cva('relative overflow-clip', {
	variants: {
		variant: {
			[PATTERN_BACKGROUND_VARIANT.Grid]:
				'bg-[linear-gradient(to_right,rgb(var(--color-on-surface))_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--color-on-surface))_1px,transparent_1px)]',
			[PATTERN_BACKGROUND_VARIANT.Dot]: 'bg-[radial-gradient(rgb(var(--color-on-surface)/0.2)_1px,transparent_1px)]',
			[PATTERN_BACKGROUND_VARIANT.BigDot]: 'bg-[radial-gradient(rgb(var(--color-on-surface)/0.2)_3px,transparent_3px)]',
		},
		size: {
			xs: 'bg-[size:8px_8px]',
			sm: 'bg-[size:16px_16px]',
			md: 'bg-[size:24px_24px]',
			lg: 'bg-[size:32px_32px]',
		},
		mask: {
			[PATTERN_BACKGROUND_MASK.Ellipse]: '[mask-image:radial-gradient(ellipse_at_center,black,transparent_60%)]',
			[PATTERN_BACKGROUND_MASK.EllipseTop]: '[mask-image:radial-gradient(ellipse_at_top,black,transparent_60%)]',
		},
	},
	defaultVariants: {
		variant: 'grid',
		size: 'md',
		mask: 'ellipse',
	},
});

export type PatternBackgroundVariants = VariantProps<typeof patternBackgroundVariants>;
