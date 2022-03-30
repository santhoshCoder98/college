import { useEffect, useState } from "react";

const useFetchDetails = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url, { signal: controller.signal });
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const json = await response.json();
                setIsLoading(false);
                setData(json);
                setError(null);
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("Fetch Aborted");
                } else {
                    setIsLoading(false);
                    setError("Could not fetch the College Details, please check the URL");
                    setData(null);
                    console.log(err.message);
                }
            }
        }
        fetchData();
        return () => {
            controller.abort();
        }
    }, [url])

    return { data, isLoading, error }
}

export default useFetchDetails;