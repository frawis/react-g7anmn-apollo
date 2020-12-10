import React from "react";
import useSWR from "swr";
import { useHistory, useParams } from "react-router-dom";

const KursDetails = () => {
  const history = useHistory();
  const params = useParams();
  console.log(params);
  return (
    <div>
      <div>1</div>
    </div>
  );
};

export default KursDetails;
