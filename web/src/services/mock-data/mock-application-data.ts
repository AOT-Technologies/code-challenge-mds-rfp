import { ApplicationModel } from "../../components/models/applicationModel";

export const mockApplicationData: ApplicationModel[] = [
  {
    id: 1,
    organization: "ELMI",
    application: "Line Creek Operations",
    date: "2020-01-01",
    status: "Review",
    reviews: 2,
  },
  {
    id: 2,
    organization: "FOR",
    application: "Kootenay West Mine",
    date: "2020-02-01",
    status: "Review",
    reviews: 2,
  },
];
