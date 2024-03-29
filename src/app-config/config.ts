import NativeConfig from "react-native-config";

interface ConfigType {
  API_BASE_URL: string | undefined;
  BEARER_KEY: string | undefined;
  IMAGE_BASE_URL: string | undefined;
  API_KEY: string | undefined;
}

export const Config: ConfigType = {
  // base path for API
  API_BASE_URL: NativeConfig.API_BASE_URL,

  // bearer token for API
  BEARER_KEY: NativeConfig.BEARER_KEY,

  // base path for images
  IMAGE_BASE_URL: NativeConfig.IMAGE_BASE_URL,

  // api key required for some APIs
  API_KEY: NativeConfig.API_KEY,
};
