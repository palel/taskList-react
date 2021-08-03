import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = key => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(key);
    return query;
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    return ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search);

        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };
};