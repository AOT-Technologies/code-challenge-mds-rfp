import React from "react";
import { useState, useEffect } from "react";

import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Column } from "primereact/column";

import { Button } from "primereact/button";
//import { listApplications } from "../../../../services/applicationService";
import { ApplicationModel } from "../../../models/applicationModel";
import { useNavigate } from "react-router-dom";
import { mockApplicationData } from "../../../../services/mock-data/mock-application-data";

const ApplicationList = () => {
  let navigate = useNavigate();
  const [applications, setApplications] = useState<
    ApplicationModel[] | undefined
  >(undefined);
  const [filters, setFilters] = useState<any | null>(null);
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const dt = React.useRef<any | null>(null);

  useEffect(() => {
    listAllApplications();
  }, [applications]);

  useEffect(() => {
    initFilters();
  }, []);

  // call to service to get all users
  const listAllApplications = async () => {
    setApplications(mockApplicationData);
  };

  // Initialize filter for data table
  const initFilters = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      organization: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      application: {
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

  const onGlobalFilterChange = (e: any) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const exportCSV = (selectionOnly: any) => {
    dt.current.exportCSV({ selectionOnly });
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

  const viewActionBodyTemplate = (rowSelected: ApplicationModel) => {
    return (
      <React.Fragment>
        <Button
          className="main-button"
          label="View"
          icon="pi pi-eye"
          onClick={() => navigate(`/application/${rowSelected.id}`)}
        />
      </React.Fragment>
    );
  };

  return (
    <>
      <div className="card">
        <div className="card-container">
          <h2>
            <div style={{ textAlign: "center" }}>List of applications</div>
          </h2>

          <div className="block p-4 top-50">
            <DataTable
              ref={dt}
              style={{ marginTop: 60 }}
              value={applications}
              responsiveLayout="scroll"
              globalFilterFields={[
                "date",
                "application",
                "organization",
                "status",
                "reviews",
              ]}
              filters={filters}
              header={filterHeader}
              emptyMessage="No applications found."
            >
              <Column field="date" header="Date" sortable></Column>
              <Column
                field="application"
                header="Application"
                sortable
              ></Column>
              <Column
                field="organization"
                header="Organization"
                sortable
              ></Column>
              <Column field="status" header="Status" sortable></Column>
              <Column field="reviews" header="Reviews" sortable></Column>
              <Column
                body={viewActionBodyTemplate}
                exportable={false}
                style={{ maxWidth: "4rem" }}
              ></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
};
export default ApplicationList;
