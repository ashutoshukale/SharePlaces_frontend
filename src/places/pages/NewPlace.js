import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./PlaceForm.css";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/Validators";
import Button from "../../shared/components/FormElements/Button";
import { useHttpClient } from "../../shared/hooks/http-hook.js";
import useForm from "../../shared/hooks/form-hook.js";
import ErrorModal from "../../shared/components/UIElements/ErrorModal.js";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner.js";
import { AuthContext } from "../../shared/context/auth-context.js";
import ImageUpload from "../../shared/components/FormElements/ImageUpload.js";

const NewPlace = () => {
  const auth = useContext(AuthContext);

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
      image: {
        value: null,
        isValid: false,
      },
    },
    false
  );

  const history = useHistory();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const placeSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", formState.inputs.title.value);
    formData.append("description", formState.inputs.description.value);
    formData.append("address", formState.inputs.address.value);
    formData.append("image", formState.inputs.image.value);
    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/places/`,
        "POST",
        formData,
        {
          Authorization: "Bearer " + auth.token,
        }
      );

      history.push("/");
      // Redirect user to a different page
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner asOverlay={true} />
        </div>
      )}
      <form className="place-form" onSubmit={placeSubmitHandler}>
        <Input
          id="title"
          type="text"
          element="input"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description, atleast 5 characters"
          onInput={inputHandler}
        />
        <Input
          id="address"
          element="input"
          type="text"
          label="Address"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid address."
          onInput={inputHandler}
        />
        <ImageUpload
          id="image"
          onInput={inputHandler}
          errorText="Please Provide an Image"
        />
        <Button type="submit" disabled={!formState.isValid}>
          ADD PLACE
        </Button>
      </form>
    </React.Fragment>
  );
};

export default NewPlace;
