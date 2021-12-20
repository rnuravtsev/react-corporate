import { API } from '../../consts';
import { useFetchResult } from '../../hooks/useFetchQuestion';

export const Result = () => {

    const fetchResponse = useFetchResult(API.postResult, 3);

    const { data, isLoading } = fetchResponse;

    return (
        <div className="result-block">
            <span className="title">{data?.title}</span>
            <span className="title">{data?.text}</span>
        </div>
    );
};