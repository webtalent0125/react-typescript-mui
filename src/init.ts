import { Amplify } from "aws-amplify";

export interface BrowserStorage {
  getItem: (key: string) => null | string;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
  clear(): void;
}

export const browserStorage: BrowserStorage = window.localStorage;

let __amplify_initialized = false;
export const amplifyRestApiEndpoint = "";


export const initAmplify = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, _reject) => {
    if (__amplify_initialized) {
      resolve(true);
    }

    const amplify_config = {
      API: {
        aws_appsync_region: "",
        aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
        aws_appsync_graphqlEndpoint: "",
      },
      Auth: {
        region: "",
        identityPoolId: "",
        userPoolId: "",
        userPoolWebClientId: "",
        authenticationFlowType: "",
        mandatorySignIn: true,
        storage: browserStorage,
      },
      Storage: {
        // We will hand-craft the analysis structure of our assets to be prefixed by the customer name
        customPrefix: {
          public: "",
          private: "",
          protected: "",
        },
        AWSS3: {
          bucket: "",
          region: "",
        },
      },
    };
    Amplify.configure(amplify_config);
    __amplify_initialized = true;
    resolve(true);
  });
};
