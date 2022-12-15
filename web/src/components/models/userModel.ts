export interface UserModel {
  id?: number;
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: Date;
  createdDateTime?: Date;
  updatedDateTime?: Date;
}
