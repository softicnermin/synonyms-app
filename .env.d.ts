declare global {
    namespace NodeJS {
        interface ProcessEnv {
            /** Endpoint for synonyms*/
            REACT_APP_API_ENDPOINT: string;
        }
    }
}

export {};
