/*The useRef Hook returns an object with a single property called current. 
Initially, myRef.current will be null. When React creates a DOM node for any element,
 React will put a reference to this node into myRef.current. You can then access this
  DOM node from your event handlers and use the built-in browser APIs defined on it.

Refs are a generic concept, but most often you’ll use them to hold DOM elements.
You instruct React to put a DOM node into myRef.current by passing <div ref={myRef}>.
Usually, you will use refs for non-destructive actions like focusing, scrolling, or measuring DOM elements.
A component doesn’t expose its DOM nodes by default. You can opt into exposing a DOM node by using forwardRef and passing the second ref argument down to a specific node.
Avoid changing DOM nodes managed by React.
If you do modify DOM nodes managed by React, modify parts that React has no reason to update.
*/
import { useRef } from 'react';

export default function Ref() {
    const inputRef = useRef<HTMLInputElement>(null);
    const firstCatRef = useRef<HTMLImageElement>(null);
    const secondCatRef = useRef<HTMLImageElement>(null);
    const thirdCatRef = useRef<HTMLImageElement>(null);
    function handleScrollToFirstCat() {
        firstCatRef?.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    
      function handleScrollToSecondCat() {
        secondCatRef?.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    
      function handleScrollToThirdCat() {
        thirdCatRef?.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    function handleClick() {
        inputRef?.current?.focus();
    }

    return (
        <>
        <div>
            <input ref={inputRef} />
            <button onClick={handleClick}>
                Focus the input
            </button>
            </div>
            <nav>
                <button onClick={handleScrollToFirstCat}>
                    Tom
                </button>
                <button onClick={handleScrollToSecondCat}>
                    Maru
                </button>
                <button onClick={handleScrollToThirdCat}>
                    Jellylorum
                </button>
            </nav>
            <div>
                <ul>
                    <li>
                        <img
                            src="https://placekitten.com/g/200/200"
                            alt="Tom"
                            ref={firstCatRef}
                        />
                    </li>
                    <li>
                        <img
                            src="https://placekitten.com/g/300/200"
                            alt="Maru"
                            ref={secondCatRef}
                        />
                    </li>
                    <li>
                        <img
                            src="https://placekitten.com/g/250/200"
                            alt="Jellylorum"
                            ref={thirdCatRef}
                        />
                    </li>
                </ul>
            </div>
        </>
    );
}