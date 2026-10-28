/**
 * Resolve static asset path safely across GitHub Pages (with sub-directory repo path)
 * and standard root domains.
 */
export function getAssetUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || './';
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}
