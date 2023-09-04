import { useRef, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import TooltipContainer from './toolTipContainer';

export default function Tooltip({ children, targetRect }: { children: any, targetRect: any }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  useLayoutEffect(() => {
    const element = ref?.current?.getBoundingClientRect();
    setTooltipHeight(element?.height ? element?.height : 0);
    console.log('Measured tooltip height: ' + element?.height ? element?.height : 0);
  }, []);

  let tooltipX = 0;
  let tooltipY = 0;
  if (targetRect !== null) {
    tooltipX = targetRect.left;
    tooltipY = targetRect.top - tooltipHeight;
    if (tooltipY < 0) {
      // It doesn't fit above, so place below.
      tooltipY = targetRect.bottom;
    }
  }

  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      {children}
    </TooltipContainer>,
    document.body
  );
}
