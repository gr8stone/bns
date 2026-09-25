/**
 * Extracts the 11-character YouTube video ID from various URL formats.
 */
export function getYouTubeId(url: string | undefined | null): string | null {
  if (!url) return null;
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/
  );
  return match ? match[1] : null;
}

/**
 * Returns high-resolution YouTube video thumbnail URL for any YouTube ID.
 * Defaults to maxresdefault, falling back to hqdefault when necessary.
 */
export function getYouTubeThumbnail(videoId: string | null | undefined, quality: 'maxres' | 'hq' | 'mq' = 'maxres'): string | null {
  if (!videoId) return null;
  if (quality === 'hq') {
    return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  }
  if (quality === 'mq') {
    return `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;
  }
  return `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
}
