import '../styles/Timeline.css';

import React from 'react';
import { timeline } from '../data/timeline';

// Filtra per tipo SENZA ORDINARE - usa ordine del file
const uniItems = timeline.filter(i => i.tipo === 'uni');
const lavoriItems = timeline.filter(i => i.tipo === 'lavoro');

export const Timeline: React.FC = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-wrapper">
        <div className="timeline-column timeline-uni">
          {uniItems.map((item) => (
            <div key={item.id} className="timeline-node">
              <div className="node-content">
                <span className="node-period">{item.periodo}</span>
                <h3 className="node-title">{item.titolo}</h3>
                {item.sottoTitolo && (
                  <p className="node-subtitle">{item.sottoTitolo}</p>
                )}
              </div>
              <div className="node-dot uni-dot" />
            </div>
          ))}
        </div>

        <div className="timeline-column timeline-lavoro">
          {lavoriItems.map((item) => (
            <div key={item.id} className="timeline-node">
              <div className="node-dot lavoro-dot" />
              <div className="node-content">
                <span className="node-period">{item.periodo}</span>
                <h3 className="node-title">{item.titolo}</h3>
                {item.sottoTitolo && (
                  <p className="node-subtitle">{item.sottoTitolo}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;