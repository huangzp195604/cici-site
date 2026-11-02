import JSZip from 'jszip';

const projectFiles = import.meta.glob(
  ['/src/**/*', '/index.html', '/package.json', '/tsconfig.json', '/vite.config.ts', '/README.md'],
  { query: '?raw', import: 'default', eager: true }
) as Record<string, string>;

export async function generateProjectZip(): Promise<Blob> {
  const zip = new JSZip();

  Object.entries(projectFiles).forEach(([path, content]) => {
    zip.file(path.replace(/^\//, ''), content);
  });

  return zip.generateAsync({ type: 'blob' });
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
