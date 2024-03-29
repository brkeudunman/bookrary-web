import { useMutation } from "react-query";
import { login, register } from "../api/auth/auth";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

export const useLogin = (onSuccess) => {
  const navigate = useNavigate();
  return useMutation(
    (userCredentials) => {
      return login(userCredentials);
    },
    {
      mutationKey: "login",
      onSuccess: (response) => {
        window.localStorage.setItem("token", response.token);
        window.localStorage.setItem("id", response.id);
        window.localStorage.setItem("userRole", response.userRole ?? "");
        window.localStorage.setItem("name", response.name ?? "");
        window.localStorage.setItem("surname", response.surname ?? "");
        window.dispatchEvent(new Event("storage"));

        navigate("/");
        window.location.reload()
        onSuccess();
      },

      onError: (response) => {
        if (response.status === 404 || response.status === 401) {
          notification.error({
            description: "Email or password is invalid.",
          });
        }

        console.log(response);
      },
    }
  );
};

export const useRegister = (onSuccess) => {
  const navigate = useNavigate();
  return useMutation(
    (userCredentials) => {
      return register(userCredentials);
    },
    {
      mutationKey: "register",
      onSuccess: () => {
        notification.success({
          description: "You have been successfully registered!",
          message: "Success!",
        });
        navigate("/login");
      },
      onError: (error) => {
        notification.error({
          description: error.message,
          message: "An Error Has Occured",
        });
      },
    }
  );
};

export const useLogOutUserMe = (onSuccess) => {
  const navigate = useNavigate();

  return () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("id");
    window.localStorage.removeItem("userRole");
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("surname");
    window.dispatchEvent(new Event("storage"));
    navigate("/");
    onSuccess();
  };
};
