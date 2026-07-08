import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUser } from "../api/authApi";
import { useNavigate } from "react-router";

const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: async () => {
      await queryClient.cancelQueries({ queryKey: ["user"] });
      queryClient.removeQueries({ queryKey: ["user"] });
      navigate("/");
    },
  });

  return mutation;
};

export default useLogout;
