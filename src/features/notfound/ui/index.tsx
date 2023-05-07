import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound(): JSX.Element {

    const navigate = useNavigate();

    useEffect(() => {
        navigate("/", { replace: true });
    }, [navigate]);

    return (
        <div className="w-3/5 bg-white p-10">
            Not Found 
        </div>
    );
}