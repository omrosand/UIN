import sanityClient from "@sanity/client";

const options = {
    projectId: 'z5d75xew',
    dataset: 'production',
};

const client = sanityClient({
    ...options,
    useCdn: process.env.NODE_ENV === 'production',
})

export default client;