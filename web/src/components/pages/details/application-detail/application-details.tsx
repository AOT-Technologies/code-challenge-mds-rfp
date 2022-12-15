import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ApplicationDetail: React.FC = () => {
  let params = useParams();

  let navigate = useNavigate();
  //   const [userDetails, setUserDetails] = useState<UserModel | undefined>(
  //     undefined
  //   );
  return (
    <div className="card">
      <div className="card-container">
        <Button
          className="main-button"
          style={{ marginLeft: 8, marginTop: 8 }}
          type="button"
          icon="pi pi-arrow-left"
          label="Back"
          onClick={() => navigate("/")}
          data-pr-tooltip="Back"
        />
        {/* <div className="block font-bold text-center">First name</div>
    <div className="block text-center">{userDetails?.firstName}</div>
    <br />
    <div className="block font-bold text-center">Middle name</div>
    <div className="block text-center">{userDetails?.middleName}</div>
    <br />
    <div className="block font-bold text-center">Last name</div>
    <div className="block text-center">{userDetails?.lastName}</div>
    <br />
    <div className="block font-bold text-center">Date of birth</div>
    <div className="block text-center">
      {String(userDetails?.dateOfBirth)}
    </div> */}
      </div>
    </div>
  );
};
