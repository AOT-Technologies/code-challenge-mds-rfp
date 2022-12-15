import { useForm } from "react-hook-form";

type ApplicationDataProps = {
  exitApplicationModal: () => void;
};

export const ApplicationCommentModal: React.FC<ApplicationDataProps> = ({
  exitApplicationModal,
}) => {
  const handleOnExit = () => {
    exitApplicationModal();
  };

  return <></>;
};
