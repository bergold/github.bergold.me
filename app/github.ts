export interface Tag {
  name: string;
}

export interface Repo {
  id: number;
  tags: string[];
  name: string;
  full_name: string;
  description: string;
  fork: boolean;
  url: string;
  html_url: string;
  homepage: string;
  pushed_at: string;
}
