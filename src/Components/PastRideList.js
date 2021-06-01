import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "Name", width: 150 },
  { field: "pcase", headerName: "Case", width: 150 },
  {
    field: "age",
    headerName: "Age",

    width: 90,
  },
  {
    field: "pno",
    headerName: "Patient No.",

    width: 190,
  },
  {
    field: "gno",
    headerName: "Guardian No.",

    width: 190,
  },
  { field: "driver", headerName: "Driver Name", width: 150 },
  { field: "caseprior", headerName: "Case Priority", width: 150 },
  { field: "rideid", headerName: "Ride ID", width: 150 },
  { field: "destination", headerName: "Destination", width: 150 },
];

const rows = [
  {
    id: 1,

    firstName: "Jon",
    pcase: "Corona",
    driver: "mayank",
    caseprior: "Emergency",
    age: 35,

    pno: 8953244641,
    gno: 7489912726,
    rideid: "anjkdnjkfnk",
    destination: "dubai",
    driver: "mayank",
  },
  {
    id: 2,

    firstName: "Cersei",
    pcase: "Corona",
    age: 42,
    caseprior: "Emergency",
    pno: 8953244641,
    gno: 7489912726,
    rideid: "anjkdnjkfnk",
    destination: "dubai",
    driver: "mayank",
  },
  {
    id: 3,

    firstName: "Jaime",
    pcase: "Corona",
    age: 45,
    caseprior: "Emergency",
    pno: 8953244641,
    gno: 7489912726,
    rideid: "anjkdnjkfnk",
    destination: "dubai",
    driver: "mayank",
  },
  {
    id: 4,

    firstName: "Arya",
    pcase: "Corona",
    age: 16,
    caseprior: "Emergency",
    pno: 8953244641,
    gno: 7489912726,
    rideid: "anjkdnjkfnk",
    destination: "dubai",
    driver: "mayank",
  },
  {
    id: 5,

    firstName: "Daenerys",
    pcase: "Corona",
    age: 21,
    caseprior: "Emergency",
    pno: 8953244641,
    gno: 7489912726,
    rideid: "anjkdnjkfnk",
    destination: "dubai",
    driver: "mayank",
  },
  {
    id: 6,

    firstName: null,
    pcase: "Corona",
    age: 150,
    caseprior: "Emergency",
    pno: 8953244641,
    gno: 7489912726,
    rideid: "anjkdnjkfnk",
    destination: "dubai",
    driver: "mayank",
  },
  {
    id: 7,

    firstName: "Ferrara",
    pcase: "Corona",
    age: 44,
    caseprior: "Emergency",
    pno: 8953244641,
    gno: 7489912726,
    rideid: "anjkdnjkfnk",
    destination: "dubai",
    driver: "mayank",
  },
  {
    id: 8,

    firstName: "Rossini",
    pcase: "Corona",
    age: 36,
    caseprior: "Emergency",
    pno: 8953244641,
    gno: 7489912726,
    rideid: "anjkdnjkfnk",
    destination: "dubai",
    driver: "mayank",
  },
  {
    id: 9,

    firstName: "Harvey",
    pcase: "Corona",
    age: 65,
    caseprior: "Emergency",
    pno: 8953244641,
    gno: 7489912726,
    rideid: "anjkdnjkfnk",
    destination: "dubai",
    driver: "mayank",
  },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <h1> Past Ride List</h1>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}
