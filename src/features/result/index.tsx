import { useEffect, useState } from "react";
import { result } from "../../constants/result";
import { getFinalResult } from "../../utils/helper";

export default function Result(): JSX.Element {

    const [resultDescription, setResultDescription] = useState("");
    const [myResult, setMyResult] = useState("");

    useEffect(() => {
        const myResult = getFinalResult();
        if (myResult) {
            setMyResult(myResult);
            setResultDescription(result[myResult as keyof typeof result]);
        }
    }, []);
    
    return (
        <div className="w-3/5 bg-white p-10">
            <div className="text-center">
                <h5>Your Result</h5>
                <h3 className="text-4xl mt-5">{`You are more of an ${myResult}`}</h3>
            </div>
            <div className="mt-10">
                <p>{resultDescription}</p>
            </div>
        </div>
    );
}