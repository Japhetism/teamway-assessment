import { Test } from "./Test"

export interface TestResponse {
    details?: Test;
    questionNumber: number;
    totalQuestion: number;
    error?: string;
}