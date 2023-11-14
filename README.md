# React.memo + useMemo + useCallback + new Date().getTime()

> 這個範例展示使用 useCallback, useMemo, 和 React.memo 如何影響渲染和計算時間，我們可以在範例中加入時間記錄。這將幫助我們觀察到在不同情況下函數執行和組件渲染的時間差異。

***

## 分析預期結果
1. ParentComponent 在每次狀態更新時都會重新渲染，因此你會看到每次點擊任一按鈕時 ParentComponent 的渲染時間。
2. ChildComponent 只在 increment 函數改變時重新渲染，由於使用了 useCallback，這不應該頻繁發生。
3. increment 函數的執行時間應該在點擊「點擊我」按鈕時顯示。
4. useMemo 中的計算時間只有在 count 改變時才會重新計算並顯示，所以你會看到在點擊「點擊我」按鈕時，計算時間的記錄。

通過比較 useMemo 和 useCallback 在有無優化的情況下的執行時間，我們可以觀察到性能上的改進。在大型應用或昂貴的計算操作中，這些優化會更加明顯。

![image](picture or gif url)