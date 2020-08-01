export const getApiKey = () => {
    const { PREACT_APP_API_KEY } = process.env;

    if (!PREACT_APP_API_KEY) {
        throw new Error(
            "PREACT_APP_API_KEY  is missing. Please add PREACT_APP_API_KEY to the environment variables."
        );
    }

    return PREACT_APP_API_KEY;
};
