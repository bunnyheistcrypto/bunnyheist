// @flow
import { Grid } from 'antd';
import { includes, reduce } from 'lodash';

const BREAKPOINTS = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    xxl: 'xxl',
};

export const useCurrentBreakpoint = () => {
    const breakpoints = Grid.useBreakpoint();

    // the useBreakpoint hook returns an object with keys of one or more breakpoints
    // with a boolean value, so we will reduce that to an array of just the true ones
    const arrBreakpoints = reduce(breakpoints, (acc, value, key) => {
        if (value) {
            return [...acc, key];
        }
        return acc;
    }, []);

    let currentBreakpoint = null;
    // we only care about the largest breakpoint size found
    if (includes(arrBreakpoints, BREAKPOINTS.xxl)) {
        currentBreakpoint = BREAKPOINTS.xxl;
    } else if (includes(arrBreakpoints, BREAKPOINTS.xl)) {
        currentBreakpoint = BREAKPOINTS.xl;
    } else if (includes(arrBreakpoints, BREAKPOINTS.lg)) {
        currentBreakpoint = BREAKPOINTS.lg;
    } else if (includes(arrBreakpoints, BREAKPOINTS.md)) {
        currentBreakpoint = BREAKPOINTS.md;
    } else if (includes(arrBreakpoints, BREAKPOINTS.sm)) {
        currentBreakpoint = BREAKPOINTS.sm;
    } else if (includes(arrBreakpoints, BREAKPOINTS.xs)) {
        currentBreakpoint = BREAKPOINTS.xs;
    }

    const isMobile = includes([BREAKPOINTS.xs, BREAKPOINTS.sm], currentBreakpoint);
    const isTabletOrMobile = includes([BREAKPOINTS.md, BREAKPOINTS.sm, BREAKPOINTS.xs], currentBreakpoint);

    return { currentBreakpoint, isMobile, isTabletOrMobile };
};
