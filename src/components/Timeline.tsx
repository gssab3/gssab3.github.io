import '../styles/Timeline.css';

import React from 'react';
import { timeline } from '../data/timeline';

// Raggruppare items per timeline (uni/lavoro) e mantenere ordine
const groupedTimeline = timeline.reduce((acc, item) => {
  const lastGroup = acc[acc.length - 1];
  if (lastGroup && lastGroup.tipo === item.tipo) {
    lastGroup.items.push(item);
  } else {
    acc.push({ tipo: item.tipo, items: [item] });
  }
  return acc;
}, [] as Array<{ tipo: string; items: typeof timeline }>);

export const Timeline: React.FC = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-grid">
        {groupedTimeline.map((group, groupIdx) => (
          <div key={`${group.tipo}-${groupIdx}`} className={`timeline-branch timeline-${group.tipo}`}>
            {group.items.map((item, itemIdx) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-dot-wrapper">
                  <div className={`timeline-dot ${item.tipo}`} />
                </div>
                <div className="timeline-content">
                  <span className="timeline-period">{item.periodo}</span>
                  <h3 className="timeline-title">{item.titolo}</h3>
                  {item.sottoTitolo && (
                    <p className="timeline-subtitle">{item.sottoTitolo}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;