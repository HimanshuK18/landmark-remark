import { useCallback, useMemo } from 'react';

/* useCallback is a React Hook that lets you cache a function definition between re-renders.
Call useCallback at the top level of your component to cache a function definition between re-renders
In other words, useCallback caches a function between re-renders until its dependencies change.

Parameters 
fn: The function value that you want to cache. It can take any arguments and return any values. 
React will return (not call!) your function back to you during the initial render. On next renders,
 React will give you the same function again if the dependencies have not changed since the last 
 render. Otherwise, it will give you the function that you have passed during the current render,
  and store it in case it can be reused later. React will not call your function. The function is 
  returned to you so you can decide when and whether to call it.

dependencies: The list of all reactive values referenced inside of the fn code. Reactive values 
include props, state, and all the variables and functions declared directly inside your component 
body. If your linter is configured for React, it will verify that every reactive value is correctly 
specified as a dependency. The list of dependencies must have a constant number of items and be 
written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value
 using the Object.is comparison algorithm.

 You will often see useMemo alongside useCallback. They are both useful when you’re trying to 
 optimize a child component. They let you memoize (or, in other words, cache) something you’re 
 passing down:
*/

function ProductPage({ productId, referrer }: { productId: number, referrer: any }) {
    return (
      <div>
        
      </div>
    );
  }