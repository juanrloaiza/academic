export const getPublicationUrl = (pub: { doi?: string; url?: string }) =>
    pub.doi ? `https://doi.org/${pub.doi}` : pub.url ?? "#";
