import React, { useRef, useState, useEffect, useCallback } from 'react';

const VirtualScroll = ({ items, renderItem, itemHeight }) => {
  const containerRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  const handleScroll = useCallback(() => {
    setScrollTop(containerRef.current.scrollTop);
  }, []);

  useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalHeight = items.length * itemHeight;
  const startIdx = Math.floor(scrollTop / itemHeight);
  const endIdx = Math.min(items.length - 1, Math.floor((scrollTop + viewportHeight) / itemHeight));

  const visibleItems = items.slice(startIdx, endIdx + 1).map((item, index) =>
    renderItem(item, startIdx + index)
  );

  return (
    <div ref={containerRef} onScroll={handleScroll} style={{ overflowY: 'scroll', height: '100vh' }}>
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ position: 'absolute', top: startIdx * itemHeight }}>
          {visibleItems}
        </div>
      </div>
    </div>
  );
};

export default VirtualScroll;
