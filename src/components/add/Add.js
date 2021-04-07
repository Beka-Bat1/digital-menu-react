import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./Add.css";
import axios from "../../axios-orders";
import { connect } from "react-redux";
import * as itemDataFetchActions from "../../store/actions/index";

class Add extends Component {
  state = {
    addItemForm: {
      imageLink: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Image Link",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      itemDescription: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Item Description",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      itemName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Item Name",
        },
        value: "",
        valid: false,
        touched: false,
      },
      itemPrice: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "Item Price",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
    loading: false,
  };

  updateInput(event) {
    let tempState = { ...this.state.item };
    tempState[event.target.id] = event.target.value;
    this.setState({ item: tempState });
  }

  itemFormHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.addItemForm) {
      formData[formElementIdentifier] = this.state.addItemForm[
        formElementIdentifier
      ].value;
    }
    const itemData = {
      ...formData,
    };
    console.log(itemData);
    this.props.onSaveItem(itemData);

    this.setState({ loading: false });
    this.props.history.push("/workshop");
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedaddItemForm = {
      ...this.state.addItemForm,
    };
    const updatedFormElement = {
      ...updatedaddItemForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedaddItemForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedaddItemForm) {
      formIsValid = updatedaddItemForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({
      addItemForm: updatedaddItemForm,
      formIsValid: formIsValid,
    });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.addItemForm) {
      formElementsArray.push({
        id: key,
        config: this.state.addItemForm[key],
      });
    }
    let form = (
      <form onSubmit={this.itemFormHandler} className="was-validated">
        {formElementsArray.map((formElement) => (
          <div className="form-group">
            <Input
              key={formElement.id}
              className="form-control"
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              id={formElement.config}
              changed={(event) =>
                this.inputChangedHandler(event, formElement.id)
              }
            />
          </div>
        ))}
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!this.state.formIsValid}
        >
          Submit
        </button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div
        className={
          (classes.ContactData,
          "container d-flex flex-column justify-content-center ")
        }
        style={{ marginTop: "10em", width: "280px" }}
      >
        <h4>Enter Menu Item Data</h4>
        {form}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveItem: (itemData) =>
      dispatch(itemDataFetchActions.addNewItemData(itemData)),
  };
};

export default connect(null, mapDispatchToProps)(Add);
