import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "primereact/button";
import { HistoryItemModel } from "../../../models/historyItemModel";
import { InputText } from "primereact/inputtext";
import {
  listHistoryItems,
  saveHistoryItem,
} from "../../../../services/historyItemService";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";

type ApplicationHistoryDataProps = {
  commentId: number;
  exitApplicationModal: () => void;
};

const HistoryItemSchema = yup.object().shape({
  text: yup.string().required(),
});

export const ApplicationHistoryModal: React.FC<ApplicationHistoryDataProps> = ({
  exitApplicationModal,
  commentId,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HistoryItemModel>({
    resolver: yupResolver(HistoryItemSchema),
  });

  const [historyItems, setHistoryItems] = useState<
    HistoryItemModel[] | undefined
  >(undefined);

  const onSubmit = async (payload: HistoryItemModel) => {
    payload.commentId = commentId;
    payload.author = "Henry Mines";
    payload.type = "Waiting for proponent";
    payload.createdDateTime = new Date();
    payload.updatedDateTime = new Date();
    saveHistoryItem(payload);
    await listAllComments();
  };

  useEffect(() => {
    listAllComments();
  }, [historyItems]);

  // call to service to get all history items
  const listAllComments = async () => {
    setHistoryItems(await listHistoryItems(commentId));
  };

  const handleOnExit = () => {
    exitApplicationModal();
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
        <div className="field">
          <label>Description</label>
          <InputText {...register("text")} />
          <span className="error-message">
            {errors.text && <p>{errors.text.message}</p>}
          </span>
        </div>
        <br />
        <div className="grid">
          <div className="col">
            <Button
              className="main-button"
              type="button"
              onClick={handleOnExit}
              label="Exit"
            />
          </div>
          <div className="col">
            <Button className="main-button" type="submit" label="Submit" />
          </div>
        </div>
      </form>

      <DataTable
        style={{ marginTop: 60 }}
        value={historyItems}
        responsiveLayout="scroll"
        emptyMessage="No history items found."
      >
        <Column field="createdDateTime" header="Date" sortable></Column>
        <Column field="text" header="Text" sortable></Column>
        <Column field="type" header="Type" sortable></Column>
        <Column field="author" header="Author" sortable></Column>
      </DataTable>
    </div>
  );
};
