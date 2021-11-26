import {useEffect, useState} from "react";

const GetRequest = <T>(url: string): {
    result: T | undefined;
    error: Error | undefined;
    loading: boolean;
} => {
    const [result, setResult] = useState<T | undefined>(undefined);
    const [error, setError] = useState<Error | undefined>(undefined);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`http://localhost:3000${url}`)
            .then(async (result) => {
                const json = await result.json();
                if (result.ok) {
                    const result: T = json;
                    setResult(result);
                } else {
                    setError(json.error)
                }
            }).catch((e) => {
            setError(e);
        }).finally(() => {
            setLoading(false);
        })
    }, [url]);

    return {result: result, error, loading};
}

export default GetRequest;
