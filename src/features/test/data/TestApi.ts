import { getQuestionHelper } from "../../../utils/helper";

export default class UserApi { 

    async getTestQuestion(questionNumber: number): Promise<any> {
        try {
          const response = await getQuestionHelper(questionNumber);
          return response;
        } catch (error) {
          throw error;
        }
    }
}