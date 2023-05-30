import { Helmet } from "react-helmet-async";
import { Button, Result } from "antd";

import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <>
      <Helmet>
        <title>404 | Not Found</title>
        <meta name="description" content={"descripe"}></meta>
        <meta name="keywords" content={"key1,key2"}></meta>
      </Helmet>
      <Result
        style={{ paddingBlock: "15%" }}
        status="404"
        extra={
          <>
            <p style={{ color: "white", fontSize: "40px", fontWeight: "900" }}>
              404
            </p>
            <p style={{ color: "white", fontSize: "30px", fontWeight: "600" }}>
              Sorry, the page you visited does not exist.
            </p>
            <Button onClick={handleButtonClick} type="default ">
              Back Home
            </Button>
          </>
        }
      />
    </>
  );
};
export { NotFound };
