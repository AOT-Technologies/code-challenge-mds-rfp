import axios from "axios";
import { CommentModel } from "../components/models/commentModel";
const endPoint = "http://localhost:8080/api/v1/comment";

export const saveComment = async (
  payload: CommentModel
): Promise<CommentModel> => {
  let res = await axios.post(endPoint, JSON.stringify(payload));
  return res.data;
};

export const listComments = async (
  applicationId: number
): Promise<CommentModel[]> => {
  let res = await axios.get(
    `${endPoint}/applicationId?applicationId=${applicationId}`
  );
  return res.data;
};
