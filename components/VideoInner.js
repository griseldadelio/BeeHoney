import React from 'react';
import style from '../styles/web.module.css';

export const VideoInner = () => {
  return (
    <div className={style.hero_inner}>
      <video
        className={style.video_inner}
        autoPlay
        loop
        muted
        src={'/ship.mp4'}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          opacity: '0.5',
        }}
      />
      <div className={style.title_inner}>
        <div className="text-center display-3 fw-bold">
          Import & Export Simply
        </div>
        <h3>Customs Broker - Freight Forwarder​</h3>
      </div>
    </div>
  );
};
