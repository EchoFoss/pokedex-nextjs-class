"use client"

import {ThemeProvider as NextThemesProvider} from "next-themes";
import {ThemeProviderProps} from "next-themes/dist/types";

// @ts-ignore
export function ThemeProvider({children, ...props}): ThemeProviderProps{
    // @ts-ignore
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}