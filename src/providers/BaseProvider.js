import config from "../config";

const url = config.url;

export default class BaseProvider {
  constructor() {
    this.apiURL = config.api.url;
  }

  GET(path) {
    return fetch(`${this.apiURL}/${path}`).then(resp => resp.json());
  }

  POST(path, body) {}
  PUT(path, body) {}
  DELETE(path) {}
}
