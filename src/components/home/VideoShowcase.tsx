"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import styles from "./VideoShowcase.module.css";

const VIDEOS = [
  { src: "/videos/v.mp4",  label: "Operations Overview" },
  { src: "/videos/v1.mp4", label: "Clip 1" },
  { src: "/videos/v2.mp4", label: "Clip 2" },
  { src: "/videos/v3.mp4", label: "Clip 3" },
  { src: "/videos/v4.mp4", label: "Clip 4" },
  { src: "/videos/v5.mp4", label: "Clip 5" },
  { src: "/videos/v6.mp4", label: "Clip 6" },
  { src: "/videos/v7.mp4", label: "Clip 7" },
  { src: "/videos/v8.mp4", label: "Clip 8" },
];

export default function VideoShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const mainRef = useRef<HTMLVideoElement>(null);

  // When active video changes, load and auto-play
  useEffect(() => {
    const v = mainRef.current;
    if (!v) return;
    v.load();
    if (playing) {
      v.play().catch(() => {});
    }
  }, [activeIndex]);

  const togglePlay = () => {
    const v = mainRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = mainRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    setPlaying(true); // auto-play when a thumbnail is clicked
  };

  return (
    <section className={styles.section} aria-labelledby="video-showcase-heading">
      <div className="container">
        {/* Header */}
        <div className={`${styles.header} reveal`}>
          <div className="divider" />
          <p className={styles.eyebrow}>Behind The Scenes</p>
          <h2 id="video-showcase-heading" className={styles.title}>
            A Deeper Look at Our Work
          </h2>
          <p className={styles.subtitle}>
            Witness the scale and precision of ARIKO International's operations — from the ship breaking yards of Chattogram to the global ports we serve.
          </p>
        </div>

        {/* Main featured player */}
        <div className={`${styles.mainPlayer} reveal`} onClick={togglePlay}>
          <video
            ref={mainRef}
            src={VIDEOS[activeIndex].src}
            loop
            muted
            playsInline
            className={styles.mainVideo}
          />

          {/* Pause overlay — only shown when paused */}
          {!playing && (
            <div className={styles.playOverlay}>
              <div className={styles.playBtn}>
                <Play size={36} fill="currentColor" style={{ marginLeft: 4 }} />
              </div>
            </div>
          )}

          {/* Bottom controls */}
          <div className={styles.controls}>
            <div className={styles.activeLabel}>
              <span className={styles.labelDot} />
              <span className={styles.labelText}>{VIDEOS[activeIndex].label}</span>
            </div>
            <div className={styles.controlBtns}>
              <button className={styles.controlBtn} onClick={togglePlay} aria-label={playing ? "Pause" : "Play"}>
                {playing ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
              </button>
              <button className={styles.controlBtn} onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"}>
                {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className={`${styles.thumbGrid} reveal`} style={{ transitionDelay: "0.15s" }}>
          {VIDEOS.map((video, i) => (
            <button
              key={video.src}
              className={`${styles.thumb} ${i === activeIndex ? styles.thumbActive : ""}`}
              onClick={() => handleThumbnailClick(i)}
              aria-label={`Play ${video.label}`}
            >
              <div className={styles.thumbVideoWrap}>
                <video
                  src={video.src}
                  muted
                  playsInline
                  preload="metadata"
                  className={styles.thumbVideo}
                />
                {i !== activeIndex && (
                  <div className={styles.thumbOverlay}>
                    <Play size={16} fill="currentColor" className={styles.thumbPlayIcon} />
                  </div>
                )}
                {i === activeIndex && (
                  <div className={styles.thumbActiveIndicator}>
                    <span className={styles.thumbActiveDot} />
                    <span className={styles.thumbActiveDot} />
                    <span className={styles.thumbActiveDot} />
                  </div>
                )}
              </div>
              <span className={styles.thumbLabel}>{video.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
