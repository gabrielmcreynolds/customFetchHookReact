import User from "../types/User";
import {useEffect, useState} from "react";

const GetUserRequest = (id: number): {
    user: User | undefined;
    error: Error | undefined;
    loading: boolean;
} => {
    const [user, setUser] = useState<User | undefined>(undefined);
    const [error, setError] = useState<Error | undefined>(undefined);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`http://localhost:3000/api/user?id=${id}`)
            .then(async (result) => {
                const json = await result.json();
                if (result.ok) {
                    const user: User = json;
                    setUser(user);
                } else {
                    setError(json.error)
                }
            }).catch((e) => {
            setError(e);
        }).finally(() => {
            setLoading(false);
        })
    }, [id]);

    return {user, error, loading};
}

export default GetUserRequest;
