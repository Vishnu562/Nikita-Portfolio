export function getYouTubeId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export function getYouTubeThumbnail(url: string): string {
  const id = getYouTubeId(url);
  if (!id) return 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60';
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

export function getYouTubeEmbedUrl(url: string): string {
  const id = getYouTubeId(url);
  if (!id) return '';
  return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
}
