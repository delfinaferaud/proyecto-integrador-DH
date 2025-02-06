export const getEnvVariables = () => {
  // import.meta.env;

  return {
    // ...import.meta.env,
    VITE_MODE: import.meta.env.VITE_MODE,
    VITE_CLOUD_NAME : import.meta.env.VITE_CLOUD_NAME,
    VITE_PRESET_NAME: import.meta.env.VITE_PRESET_NAME,
    VITE_API_KEY: import.meta.env.VITE_API_KEY,
    VITE_API_SECRET: import.meta.env.VITE_API_SECRET,

  };
};
