import { renderHook } from "@testing-library/react-hooks";
import { useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";
import { testState } from "../../data/TestStore";

describe("Test Hooks", () => {

  it("should initialize with a null", () => {
    const { result } = renderHook(() => useRecoilValue(testState), {
      wrapper: RecoilRoot
    });
    expect(result.current).toEqual(null);
  });
});
