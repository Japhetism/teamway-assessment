import TestApi from "../data/TestApi";
import { TestStore } from "../data/TestStore";
import { TestResponse } from "../model/TestResponse";

export default class TestRepository {

  test_api: TestApi;
  test_store;

  constructor(test_api: TestApi, test_store: TestStore) {
    this.test_api = test_api;
    this.test_store = test_store;
  }


  getTest(): TestResponse | null {
    return this.test_store.test;
  }

  fetchTest(questionNumber: number): Promise<void> {
    this.test_store.setTest(null)

    return this.test_api.getTestQuestion(questionNumber)
      .then(test_data => {
        let test: TestResponse = test_data;
        this.test_store.setTest(test);
      })
      .catch(error => {
        throw error;
      })
  }
}