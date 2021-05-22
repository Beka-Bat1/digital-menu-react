/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import WorkshopContext from "../context/workshop-context";

const Workshop = (props) => {
  const context = useContext(WorkshopContext);

  useEffect(() => {
    console.log(context)

    if(!context.items){
      context.initItemData()
    }
  }, [context]);

  let itemList;

  if (context.items) {
    itemList = Object.keys(context.items).map((key) => {
      let item = context.items[key];
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
              src={item.imageLink}
              className="img-fluid img-thumbnail"
              alt={item.itemName}
            />
          </td>

          <td className="align-middle">{item.itemDescription}</td>

          <td className="align-middle">{item.itemName}</td>

          <td className="align-middle">{item.itemPrice}$</td>

          {context.edit_page === true ? (
            <>
              {" "}
              <td className="align-middle">
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={() => context.onRemoveItem(key)}
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
    <>
      
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
                      {context.edit_page ? <th scope="col">Remove</th> : null}
                    </tr>
                  </thead>

                  <tbody>{itemList}</tbody>
                </table>
              </div>
            </div>

            {!context.edit_page ? (
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
                  onClick={context.changeToEditPage}
                  style={{ paddingRight: "0.7em", color: "white" }}
                  items={context.items}
                >
                  {" "}
                  Edit{" "}
                </button>
              </div>
            ) : (
              <div className="container d-flex justify-content-end">
                <div className="row d-flex justify-content-around">
                  <div className="col-1">
                    <a
                      onClick={context.changeToEditPage}
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
      
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     items: state.items,
//     edit_page: state.edit_page,
//     error: state.error,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onEditPageChange: () => {
//       dispatch(itemDataFetchActions.changeToEditPage());
//     },
//     onInitIngredients: () => dispatch(itemDataFetchActions.initItemData()),
//     onRemoveItem: (itemId) => {
//       dispatch(itemDataFetchActions.removeItem(itemId));
//     },
//   };
// };

export default withRouter(Workshop);
