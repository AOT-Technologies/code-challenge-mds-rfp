import { ApplicationModel } from "../components/models/applicationModel";
import { mockApplicationData } from "./mock-data/mock-application-data";

export const listApplications = async (): Promise<ApplicationModel[]> => {
  return [];
};

export const getApplication = (applicationId: number): ApplicationModel => {
  return mockApplicationData.filter((d) => d.id === applicationId)[0];
};
