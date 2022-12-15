export interface CommentModel {
  id: number;
  applicationId: number;
  description: string;
  author: string;
  status: string;
  createdDateTime: Date;
  updatedDateTime?: Date;
}
