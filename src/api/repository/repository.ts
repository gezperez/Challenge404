import ApiBase from '../ApiBase';

class RepositoryApi extends ApiBase {
  getRepositories = (string: string, count: number) => {
    return this.call(`repositories?q=${string}&per_page=${count}`);
  };
}

export default new RepositoryApi();
