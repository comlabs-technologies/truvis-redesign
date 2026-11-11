import React, { useLayoutEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { LayoutGroup, MotionConfig, motion } from 'framer-motion';

const track = document.querySelector('.iso-indicator');
const figure = track.closest('.regulatory-flow');
const columns = { signals: 1, controls: 2, evidence: 3 };

function Indicator() {
  const [layer, setLayer] = useState(figure.dataset.layer);

  useLayoutEffect(() => {
    const observer = new MutationObserver(() => setLayer(figure.dataset.layer));
    observer.observe(figure, { attributes: true, attributeFilter: ['data-layer'] });
    track.dataset.motionReady = '';
    setLayer(figure.dataset.layer);
    return () => {
      observer.disconnect();
      delete track.dataset.motionReady;
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <LayoutGroup id="truvis-assurance-tabs">
        <motion.span
          key={layer}
          layoutId="active-layer"
          className="iso-thumb"
          style={{ gridColumn: columns[layer], borderRadius: 6 }}
          transition={{ layout: { type: 'spring', duration: 0.32, bounce: 0 } }}
        />
      </LayoutGroup>
    </MotionConfig>
  );
}

createRoot(track).render(<Indicator />);
