# Stale Closure in useEffect Hook
This example demonstrates a common error in React's `useEffect` hook: using a stale closure over the state variable.  The `setInterval` function continues to use the initial value of `count` instead of the most up-to-date value, leading to unexpected behavior.

## Bug
The bug lies in how the `setInterval` callback function accesses the `count` variable.  Because it's using a closure, it captures the value of `count` at the time the `useEffect` hook is initially called.  Subsequent updates to `count` are not reflected in the `setInterval` callback.

## Solution
The solution is to use the functional update form of `setCount` to ensure that the latest state value is always used.