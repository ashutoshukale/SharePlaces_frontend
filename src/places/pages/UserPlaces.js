import React, { useState, useEffect } from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

export const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous places",
    imageUrl:
      "https://th.bing.com/th/id/OLC.lp5u7VeEyp0Iew480x360?&rs=1&pid=ImgDetMain",
    address: "350 5th Ave, New York, NY 10001",
    location: {
      lat: 40.74837,
      lng: -73.98464,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State EState",
    description: "One of the most famous places",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_Cropped.jpg/330px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_Cropped.jpg",
    address: "350 5th Ave, New York, NY 10001",
    location: {
      lat: 40.74837,
      lng: -73.98464,
    },
    creator: "u2",
  },
];
const UserPlaces = (props) => {
  const userId = useParams().userId;
  const { isLoading, sendRequest, error, clearError } = useHttpClient();
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  useEffect(() => {
    const fetchUserPlaces = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/places/user/${userId}/`
        );
        setLoadedPlaces(responseData.places);
      } catch (err) {}
    };
    fetchUserPlaces();
  }, [sendRequest, userId]);

  const placeDeletedHandler = (deletedPlaceId) => {
    setLoadedPlaces((prevPlaces) =>
      prevPlaces.filter((place) => place.id !== deletedPlaceId)
    );
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner asOverlay={true} />
        </div>
      )}
      {!isLoading && loadedPlaces && (
        <PlaceList items={loadedPlaces} onDeletePlace={placeDeletedHandler} />
      )}
    </React.Fragment>
  );
};

export default UserPlaces;
