import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Nav } from "react-bootstrap";

import review1 from "./../../../../images/popular-img/review-img/pic-1.jpg";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchOrderAction,
  fetchTableByIdAction,
  updateOrderAction,
} from "../../../../store/actions/OrderActions";

const Orders = () => {
  const [order, setOrder] = useState({});
  const [ping, setPing] = useState(false);
  function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDateString = date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    return formattedDateString;
  }

  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);
  const { table } = useSelector((state) => state.orders);
  useEffect(() => {
    dispatch(fetchOrderAction());
  }, [dispatch, ping]);
  useEffect(() => {
    if (order.tableId) {
      dispatch(fetchTableByIdAction(order.tableId));
    }
  }, [dispatch, order.tableId]);
  const updateOrder = ({ status }) => {
    if (status === "accapt") {
      dispatch(updateOrderAction({ ...order, status: "ready" }));
      setTimeout(() => {
        setPing(!ping);
        setOrder({});
      }, 1000);
    } else {
      dispatch(updateOrderAction({ ...order, status: "cancled" }));
      setTimeout(() => {
        setPing(!ping);
        setOrder({});
      }, 1000);
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-xl-4">
          <div className="card">
            <Tab.Container defaultActiveKey="Order">
              <div className="card-body">
                <nav className="order-tab">
                  <Nav className="nav-tabs">
                    <Nav.Link eventKey="Order" id="nav-order-tab">
                      En cours
                    </Nav.Link>
                    <Nav.Link eventKey="Prepared" id="nav-prepared-tab">
                      Accepté
                    </Nav.Link>
                    <Nav.Link eventKey="Delivered" id="nav-delivered-tab">
                      Annulé
                    </Nav.Link>
                  </Nav>
                </nav>
                <Tab.Content>
                  <Tab.Pane eventKey="Order">
                    {orders
                      .filter((e) => e.status === "pending")
                      .map((item, ind) => (
                        <div
                          className="orderin-bx d-flex align-items-center justify-content-between"
                          key={ind}
                          onClick={() => setOrder(item)}
                          style={{
                            backgroundColor:
                              order.id === item.id ? "#FEF8E5" : "white",
                            borderColor: order.id === item.id ? "#DF6703" : "",
                          }}
                        >
                          <div>
                            <h4>Order #{item.id}</h4>
                            <span>{formatDate(item?.createdAt)}</span>
                          </div>
                          <div className="d-flex align-items-center">
                            <h4 className="text-primary mb-0">
                              {item.totalPrice} TND
                            </h4>
                            <Link to={"#"} className="icon-bx">
                              <i className="fa-solid fa-angle-right"></i>
                            </Link>
                          </div>
                        </div>
                      ))}
                  </Tab.Pane>
                  <Tab.Pane eventKey="Prepared">
                    {orders
                      .filter((e) => e.status === "ready")
                      .map((item, ind) => (
                        <div
                          className="orderin-bx d-flex align-items-center justify-content-between"
                          key={ind}
                          onClick={() => setOrder(item)}
                          style={{
                            backgroundColor:
                              order.id === item.id ? "#FEF8E5" : "white",
                            borderColor: order.id === item.id ? "#DF6703" : "",
                          }}
                        >
                          <div>
                            <h4>Order #{item.id}</h4>
                            <span>{formatDate(item?.createdAt)}</span>
                          </div>
                          <div className="d-flex align-items-center">
                            <h4 className="text-primary mb-0">
                              {" "}
                              {item.totalPrice} TND
                            </h4>
                            <Link to={"#"} className="icon-bx">
                              <i className="fa-solid fa-angle-right"></i>
                            </Link>
                          </div>
                        </div>
                      ))}
                  </Tab.Pane>
                  <Tab.Pane eventKey="Delivered">
                    {orders
                      .filter((e) => e.status === "cancled")
                      .map((item, ind) => (
                        <div
                          className="orderin-bx d-flex align-items-center justify-content-between"
                          key={ind}
                          onClick={() => setOrder(item)}
                          style={{
                            backgroundColor:
                              order.id === item.id ? "#FEF8E5" : "white",
                            borderColor: order.id === item.id ? "#DF6703" : "",
                          }}
                        >
                          <div>
                            <h4>Order #{item.id}</h4>
                            <span>{formatDate(item?.createdAt)}</span>
                          </div>
                          <div className="d-flex align-items-center">
                            <h4 className="text-primary mb-0">
                              {" "}
                              {item.totalPrice} TND
                            </h4>
                            <Link to={"#"} className="icon-bx">
                              <i className="fa-solid fa-angle-right"></i>
                            </Link>
                          </div>
                        </div>
                      ))}
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Tab.Container>
          </div>
        </div>
        {order.id && (
          <div className="col-xl-8">
            <div className="card border-0">
              <h4 className="cate-title mb-sm-3 mb-2 mt-xl-0 mt-3">
                Détails de la commande
              </h4>
              <div className="card h-auto">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between border-bottom flex-wrap">
                    <div className="mb-4">
                      <h4 className="font-w500">Order #{order?.id}</h4>
                      <span>{formatDate(order?.createdAt)}</span>
                    </div>
                    <div className="orders-img d-flex mb-4">
                      <div>
                        <h6 className="font-w500">
                          Table némero {table?.number}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="row border-bottom pb-2">
                    <div className="col-xl-6">
                      <div className="address-bx mt-3">
                        <div className="d-flex align-items-center mb-2">
                          <h4 className="mb-0 font-w700">Commentaire :</h4>
                        </div>
                        <p>{order?.note}</p>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="d-flex align-items-center justify-content-between"></div>
                      <div
                        className="d-flex align-items-center justify-content-between"
                        style={{ marginTop: "1.5rem" }}
                      >
                        <h6 className="mb-0">
                          Statut :{" "}
                          {order?.status === "pending"
                            ? "En cours"
                            : order?.status === "ready"
                            ? "Accepté"
                            : "Annulé"}
                        </h6>
                      </div>
                    </div>
                    <div className="col-xl-2"></div>
                  </div>
                  <div className="order-menu style-1 mt-3">
                    <h4>Commander Menu</h4>

                    {order?.orderItems?.map((item, index) => (
                      <div
                        className="d-flex align-items-center mb-4"
                        key={index}
                      >
                        <img className="me-3" src={review1} alt="" />
                        <div>
                          <h4 className="font-w600 text-nowrap mb-0">
                            <Link>
                              {item.name} {item.size}{" "}
                            </Link>
                          </h4>
                          <p className="mb-0">x{item.qty}</p>
                        </div>
                        {item.supplements.length > 0 && (
                          <h6
                            className="font-w600 text-nowrap mb-0"
                            style={{ margin: "0 0 0 3rem" }}
                          >
                            <Link>Suplemment:</Link>
                          </h6>
                        )}
                        <ul style={{ margin: "0 0 0 3rem" }}>
                          {item.supplements.map((supp, index) => (
                            <li key={index}>+{supp.name}</li>
                          ))}
                        </ul>

                        <h4 className="text-primary mb-0 ms-auto">
                          {item.price}TND
                        </h4>
                      </div>
                    ))}
                  </div>
                  <hr style={{ opacity: "0.7" }} />
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="font-w500 mb-0">Totale</h4>
                    <h4 className="cate-title text-primary">
                      {order.totalPrice}
                    </h4>
                  </div>
                </div>
              </div>
              {order.status === "pending" && (
                <div className="text-end">
                  <Link
                    className="btn btn-outline-danger me-sm-4 me-2"
                    onClick={() => updateOrder({ status: "reject" })}
                  >
                    Annuler la commande
                  </Link>
                  <Link
                    className="btn btn-primary"
                    onClick={() => updateOrder({ status: "accapt" })}
                  >
                    Accepter la commande
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Orders;
