import { useEffect, useState } from "react";
import axios from "axios";

export const idKey = "627e98d49b55aa6327020c49";

const useFetch = (url) => {
  const [userData, setUserData] = useState(null);
  const [singleData, setSingleData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [singleUserComment, setSingleUserComment] = useState();
  const [singleUserPost, setSingleUserPost] = useState();
  const [singleUserTag, setSingleUserTag] = useState();
  const [delData, setDelData] = useState();
  const [appID, setappID] = useState("627e98d49b55aa6327020c49");

  useEffect(() => {
    setLoading(true);
    axios
      .get(url, {
        headers: {
          "app-id": appID,
        },
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, appID]);


  const forApiCallsWithId = (idValue) => {
    setLoading(true);
    axios
      .get(`${url}/${idValue}`, {
        headers: {
          "app-id": appID,
        },
      })
      .then((res) => setSingleData(res.data))
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

    axios
      .get(`${url}/${idValue}/comment`, {
        headers: {
          "app-id": appID,
        },
      })
      .then((res) => setSingleUserComment(res.data.total))
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${url}/${idValue}/post`, {
        headers: {
          "app-id": appID,
        },
      })
      .then((res) => setSingleUserPost(res.data.total))
      .catch((err) => {
        console.log(err);
      });
  };


  const deleteUser = (idValue) => {
    axios
      .delete(`${url}/${idValue}`, {
        headers: {
          "app-id": appID,
        },
      })
      .then((res) => console.log(res.status))
      .catch((err) => {
        setError(err);
      });
  };

  return {
    userData,
    singleData,
    singleUserComment,
    singleUserPost,
    singleUserTag,
    delData,
    loading,
    error,
    forApiCallsWithId,
    deleteUser,
  };
};

export default useFetch;
