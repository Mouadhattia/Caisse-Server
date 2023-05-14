import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Table, Badge, Modal, Dropdown } from "react-bootstrap";
import {
  createTableAction,
  deleteTableAction,
  tableAction,
  updateTableAction,
} from "../../../../store/actions/TableActions";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

const CustomerReviews = () => {
  const dispatch = useDispatch();
  const [ping, setPing] = useState(false);
  const [tableId, setTableId] = useState(null);
  const [openTable, setOpenTable] = useState(false);
  const [table, setTable] = useState({
    number: null,
    state: "libre",
  });
  const { tables } = useSelector((state) => state.tables);
  useEffect(() => {
    dispatch(tableAction());
  }, [dispatch, ping]);

  //create table
  const handleCreateTable = () => {
    if (table.number != null) {
      if (tableId) {
        dispatch(updateTableAction({ ...table, id: tableId }));
        setOpenTable(false);
        setTimeout(setPing(!ping), 1500);
      } else {
        console.log(table);
        dispatch(createTableAction(table));
        setOpenTable(false);
        setTimeout(setPing(!ping), 1500);
      }
    } else {
      swal(
        "ops!",
        " Svp veuillez compléter tous les champs obligatoires ! ",
        "error"
      );
    }
  };

  const handleDeleteTable = (id) => {
    dispatch(deleteTableAction(id));
    setTimeout(setPing(!ping), 1500);
  };
  const halndleOpenTable = () => {
    setOpenTable(true);
  };
  const halndleCloseTable = () => {
    setOpenTable(false);
  };

  return (
    <>
      <div>
        <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap">
          <button
            type="button"
            className="btn btn-primary mt-3 mt-sm-0"
            onClick={() => halndleOpenTable()}
          >
            Ajouter Une Table
          </button>
        </div>
        <Card>
          <Card.Header>
            <Card.Title>Gestion de table</Card.Title>
          </Card.Header>
          <Card.Body>
            <Table responsive bordered className="verticle-middle">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Numéro</th>

                  <th scope="col">Disponibilité</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {tables.map((tab, index) => (
                  <tr key={index}>
                    <td>{tab.id}</td>

                    <td>{tab.number}</td>
                    <td>
                      <Badge variant="primary light">
                        {" "}
                        {tab.state === "libre" ? "Libre" : "Occupé"}
                      </Badge>
                    </td>
                    <td>
                      <span>
                        <Link className="me-4" title="Edit">
                          <i
                            className="fas fa-pencil-alt color-muted"
                            onClick={() => {
                              setTableId(tab.id);
                              setTable({
                                number: tab.number,
                                state: tab.state,
                              });
                              halndleOpenTable();
                            }}
                          ></i>{" "}
                        </Link>
                        <Link title="Close">
                          <i
                            className="fa fa-close color-danger"
                            onClick={() => {
                              handleDeleteTable(tab.id);
                            }}
                          ></i>
                        </Link>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        <Modal
          className="modal fade"
          show={openTable}
          onHide={() => halndleCloseTable()}
        >
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Ajouter Une Nouveau Table
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => halndleCloseTable()}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="d-flex align-items-center veg justify-content-center"></div>
              <div className="modal-inside">
                <label for="exampleInputText" className="form-label">
                  Numéro
                </label>
                <input
                  defaultValue={table.number}
                  type="number"
                  className="form-control"
                  id="exampleInputText"
                  placeholder=""
                  onChange={(e) =>
                    setTable({ ...table, number: Number(e.target.value) })
                  }
                />
              </div>
              <div className="modal-inside">
                <label for="exampleInputText" className="form-label">
                  Disponibilité
                </label>

                <Dropdown className="drop-select-blog">
                  <Dropdown.Toggle
                    as="div"
                    className="form-control default-select ms-0 py-4 wide i-false"
                  >
                    {table.state === "libre" ? "Libre" : "Occupé"}{" "}
                    <i className="fas fa-chevron-down drop-select-icon"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        setTable({ ...table, state: "libre" });
                      }}
                    >
                      Libre
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setTable({ ...table, state: "occupe" });
                      }}
                    >
                      Occupé
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => halndleCloseTable()}
            >
              Annuler
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleCreateTable()}
            >
              Confirmer
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};
export default CustomerReviews;
