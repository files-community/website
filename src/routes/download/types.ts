export type DownloadSource = Readonly<{
  name: string,
  description: string,
  href: string,
  icon: string,
  external?: boolean, 
}>