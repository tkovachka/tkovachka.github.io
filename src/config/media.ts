
export const MEDIA_VERSION = "media-v1";
export const MEDIA_BASE = `https://github.com/tkovachka/tkovachka.github.io/releases/download/${MEDIA_VERSION}`;
export const media = (file: string) => `${MEDIA_BASE}/${file}`;