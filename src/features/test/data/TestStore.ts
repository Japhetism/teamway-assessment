import { atom, useRecoilState } from "recoil";
import { TestResponse } from "../model/TestResponse";

export const testState = atom<TestResponse | null>({
    key: 'test',
    default: null,
});

export default function useTestStore(): TestStore {
    const [test, setTest] = useRecoilState(testState);
    return { test, setTest };
}

export type TestStore = {
    test: TestResponse | null,
    setTest: (_: TestResponse | null) => void,
}