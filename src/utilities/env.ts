const DEV_ENV_NAME = 'development';
const PROD_ENV_NAME = 'production';

export const envRouter = <T>(
    devFunc: () => T,
    prodFunc: () => T
): T => process.env.NODE_ENV == DEV_ENV_NAME ? devFunc() : prodFunc()