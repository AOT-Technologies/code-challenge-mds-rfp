import axios from "axios";
import { HistoryItemModel } from "../components/models/historyItemModel";
const endPoint = "http://localhost:8080/api/v1/comment";

export const saveHistoryItem = async (
  payload: HistoryItemModel
): Promise<HistoryItemModel> => {
  let res = await axios.post(endPoint, JSON.stringify(payload));
  return res.data;
};

export const listHistoryItems = async (): Promise<HistoryItemModel[]> => {
  let res = await axios.get(endPoint);
  return res.data;
};
