import { API } from '../../consts';
import { useFetchResult } from '../../hooks/useFetchResult';
import {useContext} from "react";
import {MainContext} from "../../providers/withMainContext";

export const Result = () => {
    const {state} = useContext(MainContext);
    const {numberOfCorrectAnswers} = state;

    const fetchResponse = useFetchResult(API.postResult, numberOfCorrectAnswers);

    const { data, isLoading } = fetchResponse;

    return (
        <div className="result-block">
            <span className="title">{data?.title}</span>
            <span className="title">{data?.text}</span>
        </div>
    );
};
