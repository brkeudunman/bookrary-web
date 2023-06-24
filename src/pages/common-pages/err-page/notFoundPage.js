import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button
          className="bg-[#F7FCFF] text-blue-500 border border-blue-500"
          onClick={() => navigate("/")}
          type="primary"
        >
          Back Home
        </Button>
      }
    />
  );
};
