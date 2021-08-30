import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";

const ViewMore = ({
  match: {
    params: { id },
  },
}) => {
  const [data, setData] = useState({});
  const getViewDetails = () => {
    axios
      .get(`https://www.superheroapi.com/api.php/3084920855117657/${id}`)
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getViewDetails();
  }, []);
  console.log(data);
//   const dispatch = useDispatch();
//   const fav = useSelector((state) => state);
//   const addFav = (hero) => {
//     dispatch({ type: "ADD_HERO", payload: { data: hero } });
//   };
//   const removeFav = (hero) => {
//     dispatch({ type: "DEL_HERO", payload: { data: hero } });
//   };

  return (
    <>
      <NavBar />
      <div
        className="container"
        style={{
          width: "auto",
          borderRadius: "20px",
          backgroundColor: "currentColor",
        }}
      >
        <img
          style={{
            width: "60%",
            marginTop: "10%",
            borderRadius: "80px",
            marginBottom: "2rem"
          }}
          src={data.image && data.image.url}
          alt=""
        />

        <p>Real Name : {data.biography && data.biography["full-name"]}</p>
        <p id="name">Name : {data.name}</p>
        <p>Strength : {data.powerstats && data.powerstats.strength}</p>
        <p>Intelligence : {data.powerstats && data.powerstats.intelligence}</p>
        <p>Speed : {data.powerstats && data.powerstats.speed}</p>
        <p>Gender : {data.appearance && data.appearance.gender}</p>
        <p>Weight : {data.appearance && data.appearance.weight}</p>
        <p style={{ wordWrap: "break-word", width: "80%" }}>
          Occupation : {data.work && data.work.occupation}
        </p>
        <p>
          PLace of Birth : {data.biography && data.biography["place-of-birth"]}
        </p>
      </div>
    </>
  );
};

export default ViewMore;
