import React, { useState, useCallback, useMemo } from 'react';

const logRenderTime = (componentName) => {
   console.log(`${componentName} 渲染時間: ${new Date().getTime()}`);
};

// eslint-disable-next-line react/display-name, react/prop-types
const ChildComponent = React.memo(({ increment }) => {
   logRenderTime('ChildComponent');
   return <button onClick={increment}>點擊我</button>;
});

const ParentComponent = () => {
   const [count, setCount] = useState(0);
   const [, setOtherState] = useState(0);

   const increment = useCallback(() => {
      logRenderTime('increment 函數執行');
      setCount(c => c + 1);
   }, []);

   const memoizedValue = useMemo(() => {
      const startTime = new Date().getTime();
      const value = `計算值: ${count * 2}`;
      const endTime = new Date().getTime();
      console.log(`useMemo 計算時間: ${endTime - startTime} 毫秒`);
      return value;
   }, [count]);

   logRenderTime('ParentComponent');

   return (
      <div>
         <p>計數器: {count}</p>
         <p>{memoizedValue}</p>
         <ChildComponent increment={increment} />
         <button onClick={() => setOtherState(s => s + 1)}>改變其他狀態</button>
      </div>
   );
};

export default ParentComponent;
