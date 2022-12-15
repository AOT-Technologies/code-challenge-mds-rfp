import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { CommentModel } from "../../../models/commentModel";
import React from "react";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { Dialog } from "primereact/dialog";
import { ApplicationCommentModal } from "../../modals/application-comment-modal/application-comment-modal";

export const ApplicationDetail: React.FC = () => {
  const dt = React.useRef<any | null>(null);
  let params = useParams();
  const [comments, setComments] = useState<CommentModel[] | undefined>(
    undefined
  );
  const [filters, setFilters] = useState<any | null>(null);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  let navigate = useNavigate();
  const [commentSelected, setCommentSelected] = useState<
    CommentModel | undefined
  >(undefined);
  const [showHideAddComment, setShowHideAddComment] = useState(false);

  useEffect(() => {
    //listAllUsers();
  }, [comments]);

  useEffect(() => {
    initFilters();
  }, []);

  // call to service to get all users
  const listAllComments = async () => {
    //setComments(await listUsers());
  };

  const onGlobalFilterChange = (e: any) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const initFilters = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      description: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      author: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      status: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
    });
    setGlobalFilterValue("");
  };

  // Clear filter
  const clearFilter = () => {
    initFilters();
  };

  const exportCSV = (selectionOnly: any) => {
    dt.current.exportCSV({ selectionOnly });
  };

  const viewActionBodyTemplate = (rowSelected: CommentModel) => {
    return (
      <React.Fragment>
        <Button
          className="main-button"
          label="View history"
          icon="pi pi-eye"
          onClick={() => navigate(`/application/${rowSelected.id}`)}
        />
      </React.Fragment>
    );
  };

  const renderFilterHeader = () => {
    return (
      <div className="flex align-items-center export-buttons">
        <Button
          className="p-button-success"
          type="button"
          icon="pi pi-file-export"
          label="CSV"
          onClick={() => exportCSV(false)}
          data-pr-tooltip="CSV"
        />

        <span className="p-input-icon-left ml-auto">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
          <Button
            style={{ marginLeft: 12 }}
            className="main-button"
            type="button"
            icon="pi pi-filter-slash"
            label="Clear"
            onClick={clearFilter}
          />
        </span>
      </div>
    );
  };
  const filterHeader = renderFilterHeader();

  const handleAddComment = () => {
    //setUserSelected(event);
    //setShowHideUpdateUser(true);
  };

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

        <Button
          className="main-button"
          style={{ marginLeft: 8, marginTop: 8 }}
          type="button"
          icon="pi pi-arrow-left"
          label="Add Comment"
          onClick={() => setShowHideAddComment(true)}
          data-pr-tooltip="Add comment"
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
        <Dialog
          header="Add Comment"
          visible={showHideAddComment}
          style={{ width: "30vw" }}
          onHide={() => setShowHideAddComment(false)}
        >
          <ApplicationCommentModal
            exitApplicationModal={handleAddComment}
            data={Number(params.id)}
          />
        </Dialog>
        <DataTable
          ref={dt}
          style={{ marginTop: 60 }}
          value={comments}
          responsiveLayout="scroll"
          globalFilterFields={["description", "author", "status"]}
          filters={filters}
          header={filterHeader}
          emptyMessage="No comments found."
        >
          <Column field="createdDateTime" header="Date" sortable></Column>
          <Column field="description" header="Description" sortable></Column>
          <Column field="author" header="Author" sortable></Column>
          <Column field="status" header="Status" sortable></Column>
          <Column field="status" header="Status" sortable></Column>
          <Column
            body={viewActionBodyTemplate}
            exportable={false}
            style={{ maxWidth: "4rem" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};