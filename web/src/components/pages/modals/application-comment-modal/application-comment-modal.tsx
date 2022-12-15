import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "primereact/button";
import { CommentModel } from "../../../models/commentModel";
import { InputText } from "primereact/inputtext";
import { saveComment } from "../../../../services/commentService";

type ApplicationDataProps = {
  data: number;
  exitApplicationModal: () => void;
};

const CommentSchema = yup.object().shape({
  description: yup.string().required(),
});

export const ApplicationCommentModal: React.FC<ApplicationDataProps> = ({
  exitApplicationModal,
  data,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentModel>({
    resolver: yupResolver(CommentSchema),
  });

  const handleOnExit = () => {
    exitApplicationModal();
  };

  const onSubmit = async (payload: CommentModel) => {
    payload.applicationId = data;
    payload.status = "Open";
    payload.author = "Henry Mines";
    payload.createdDateTime = new Date();
    payload.updatedDateTime = new Date();
    saveComment(payload);
    exitApplicationModal();
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
        <div className="field">
          <label>Description</label>
          <InputText {...register("description")} />
          <span className="error-message">
            {errors.description && <p>{errors.description.message}</p>}
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
    </div>
  );
};
