import { MouseEventHandler } from "react";

export interface Props {
    mobileOpen: boolean | undefined;
    container: Element | (() => Element | null) | null | undefined;
    handleDrawerToggle: MouseEventHandler<HTMLDivElement> | undefined;
    window?: () => Window;
}