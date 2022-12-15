export interface HistoryItemModel {
  id?: number;
  commentId: number;
  text: string;
  type: string;
  author: string;
  createdDateTime: Date;
  updatedDateTime?: Date;
}
