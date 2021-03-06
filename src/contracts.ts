export enum DropdownEventSource {
    HeaderClick = 8,
    SectionClick = 16,
    OutsideClick = 24,
    EscapeClick = 32,
    ManualTrigger = 64
}

export type DropdownOnToggleHandler = (isOpen: boolean, source: DropdownEventSource) => void;

export interface ClassNameProps {
    className?: string;
    openClassName?: string;
    closedClassName?: string;
    disabledClassName?: string;
}

/**
 * Types helper.
 */
type Omit<TT, TK extends keyof TT> = Pick<TT, Exclude<keyof TT, TK>>;

/**
 * Types helper.
 */
export type HTMLProps<TElement> = Omit<React.DetailedHTMLProps<React.HTMLAttributes<TElement>, TElement>, "ref">;
