import { useState, useRef } from 'react';
import Tooltip from './tooltip';

export default function ButtonWithTooltip({ tooltipContent, children , ...rest }: { tooltipContent: any, children: any }) {
  const [targetRect, setTargetRect] = useState({});
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <button
        {...rest}
        ref={buttonRef}
        onPointerEnter={() => {
          const rect =  buttonRef?.current?.getBoundingClientRect();
          setTargetRect({
            left: rect?.left,
            top: rect?.top,
            right: rect?.right,
            bottom: rect?.bottom,
          });
        }}
        onPointerLeave={() => {
          setTargetRect({});
        }}
      />
      {targetRect !== null && (
        <Tooltip targetRect={targetRect}>
          {tooltipContent}
        </Tooltip>
      )
    }
    </>
  );
}