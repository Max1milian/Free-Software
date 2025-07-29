const fetchHtmlPages = async (urls) => {
    const fetchPromises = urls.map(async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
            }
            const html = await response.text();
            return { url, html };
        } catch (error) {
            return { url, error: error.message };
        }
    });

    return Promise.all(fetchPromises);
};
