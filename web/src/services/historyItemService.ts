import axios from "axios";
import { HistoryItemModel } from "../components/models/historyItemModel";
const endPoint = "http://localhost:8080/api/v1/history-item";

export const saveHistoryItem = async (
  payload: HistoryItemModel
): Promise<HistoryItemModel> => {
  let res = await axios.post(endPoint, JSON.stringify(payload));
  return res.data;
};

export const listHistoryItems = async (
  commentId: number
): Promise<HistoryItemModel[]> => {
  let res = await axios.get(`${endPoint}/by-comment-id/${commentId}`);
  return res.data;
};
