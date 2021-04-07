import React, { Component, useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import * as itemDataFetchActions from "../store/actions/index";
import { connect } from "react-redux";

const Workshop = (props) => {
  useEffect(() => {
    props.onInitIngredients();
  }, []);

  // const deleteItem = (key) => {
  //   console.log(key);
  //   axios
  //     .delete("/orderData/" + key)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // };

  let itemList;

  if (props.items) {
    itemList = Object.keys(props.items).map((key) => {
      return (
        <tr key={key}>
          <th
            scope="row"
            id="id_row"
            name="id_row"
            className="align-middle"
          ></th>
          <td className="w-25">
            <img
              src={props.items[key].imageLink}
              className="img-fluid img-thumbnail"
              alt={props.items[key].itemName}
            />
          </td>

          <td className="align-middle">{props.items[key].itemDescription}</td>

          <td className="align-middle">{props.items[key].itemName}</td>

          <td className="align-middle">{props.items[key].itemPrice}$</td>

          {props.edit_page === true ? (
            <>
              {" "}
              <td className="align-middle">
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={() => props.onRemoveItem(key)}
                >
                  Remove
                </button>{" "}
              </td>
            </>
          ) : null}
        </tr>
      );
    });
  }

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Link
              className="btn btn-success"
              to={"/menu"}
              style={{ color: "white" }}
            >
              View
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-image table-bordered">
              <thead>
                <tr>
                  <th scope="col">Num</th>
                  <th scope="col">Image</th>
                  <th scope="col">Item Description</th>
                  <th scope="col">Name</th>
                  <th scope="col">price</th>
                  {props.edit_page ? <th scope="col">Remove</th> : null}
                </tr>
              </thead>

              <tbody>{itemList}</tbody>
            </table>
          </div>
        </div>

        {!props.edit_page ? (
          <div className="row d-flex justify-content-sm-end">
            <Link
              to={"/add"}
              className="btn btn-primary"
              style={{ paddingRight: "0.7em", color: "white" }}
            >
              {" "}
              Add{" "}
            </Link>

            <button
              // to={"/Edit"}
              id="workshop-button"
              className="btn btn-primary"
              onClick={props.onEditPageChange}
              style={{ paddingRight: "0.7em", color: "white" }}
              items={props.items}
            >
              {" "}
              Edit{" "}
            </button>
          </div>
        ) : (
          <div className="container d-flex justify-content-end ">
            <div className="row d-flex justify-content-around">
              <div className="col-1">
                <a
                  onClick={props.onEditPageChange}
                  type="button"
                  className="btn btn-primary"
                >
                  Cancel
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    edit_page: state.edit_page,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEditPageChange: () => {
      dispatch(itemDataFetchActions.changeToEditPage());
    },
    onInitIngredients: () => dispatch(itemDataFetchActions.initItemData()),
    onRemoveItem: (itemId) => {
      dispatch(itemDataFetchActions.removeItem(itemId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Workshop));
