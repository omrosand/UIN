import sanityClient from "@sanity/client";

const options = {
    // Her skjedde det noen bugs. Marius sa jeg kunne legge det her for å omgå det for nå
    projectId: 'z5d75xew',
    dataset: 'production',
};

const client = sanityClient({
    ...options,
    useCdn: process.env.NODE_ENV === 'production',
})

export default client;