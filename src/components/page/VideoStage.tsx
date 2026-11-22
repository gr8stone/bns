import { Play } from "lucide-react";
import { useState } from "react";
import { getYouTubeId, getYouTubeThumbnail } from "../../lib/media";

/**
 * A poster that turns into a player on click. Handles YouTube links and
 * direct .mp4/.webm files; renders nothing playable for anything else.
 */
export function VideoStage({
  video,
  fallbackPoster,
  title,
  watchLabel,
  aspect = "aspect-video",
}: {
  video?: string;
  fallbackPoster: string;
  title: string;
  watchLabel: string;
  aspect?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [thumbFailed, setThumbFailed] = useState(false);

  const ytId = getYouTubeId(video);
  const isFile = Boolean(video && /\.(mp4|webm)$/i.test(video));
  const playable = Boolean(ytId || isFile);
  const poster = ytId && !thumbFailed ? (getYouTubeThumbnail(ytId, "maxres") ?? fallbackPoster) : fallbackPoster;

  return (
    <div className={`relative w-full ${aspect} overflow-hidden bg-ink`}>
      {playing && ytId ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      ) : playing && isFile ? (
        <video src={video} poster={fallbackPoster} autoPlay controls playsInline className="w-full h-full object-cover" />
      ) : (
        <button
          type="button"
          disabled={!playable}
          onClick={() => setPlaying(true)}
          aria-label={`${watchLabel}: ${title}`}
          className="group absolute inset-0 w-full h-full disabled:cursor-default"
        >
          <img
            src={poster}
            alt=""
            loading="lazy"
            onError={() => setThumbFailed(true)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          {playable && (
            <span className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3 pl-2 pr-5 py-2 bg-white text-text-base group-hover:bg-accent group-hover:text-white transition-colors duration-200">
              <span className="w-9 h-9 flex items-center justify-center bg-accent text-white group-hover:bg-white group-hover:text-accent transition-colors duration-200">
                <Play className="w-3.5 h-3.5 fill-current" />
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider">{watchLabel}</span>
            </span>
          )}
        </button>
      )}
    </div>
  );
}
