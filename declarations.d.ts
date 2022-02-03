// We need to tell TypeScript that when we write import styles from './styles.scss' we mean
// to load a module (to look for a './styles.scss.d.ts').
declare module '*.scss';
declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<React.SVGProps<
        SVGSVGElement
        > & { title?: string }>;

    const src: string;
    export default src;
}