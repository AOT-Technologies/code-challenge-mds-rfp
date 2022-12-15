import { useForm } from "react-hook-form";

type ApplicationDataProps = {
  exitApplicationModal: () => void;
};

export const AddUserModal: React.FC<ApplicationDataProps> = ({
  exitApplicationModal,
}) => {
  const handleOnExit = () => {
    exitApplicationModal();
  };

  return <></>;
};
