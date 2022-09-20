import { createEffect, createSignal, onCleanup } from 'solid-js';

const cache = new Map<string, MediaQueryList>();

const getMediaMatcher = (query: string): MediaQueryList => {
  const media = cache.get(query);
  if (media) return media;

  const newMedia = window.matchMedia(query);
  cache.set(query, newMedia);

  return newMedia;
};

type ReturnType = () => boolean;

const useMediaQuery = (query: string): ReturnType => {
  if (typeof window === 'undefined') return () => false;

  const media = getMediaMatcher(query);

  const [state, setState] = createSignal(media.matches);

  createEffect(() => {
    const callback = () => setState(media.matches);

    media.addEventListener('change', callback, false);

    onCleanup(() => media.removeEventListener('change', callback, false));
  });

  return state;
};

export default useMediaQuery;
