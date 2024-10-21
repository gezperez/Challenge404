export interface Repository {
  id: number;
  name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  html_url: string;
  stargazers_count: number;
  checked?: boolean;
}

export type FetchRepositoriesResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
};
