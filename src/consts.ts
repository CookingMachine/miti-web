declare const __API__: string;
declare const __ENV__: 'development' | 'production' | 'local';

const api = __API__;
const env = __ENV__;

export {api as __API__};
export {env as __ENV__};