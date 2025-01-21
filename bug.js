```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a closure over the previous state value
    const intervalId = setInterval(() => {
      setCount(count + 1); // This will use the stale closure value of 'count'
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```