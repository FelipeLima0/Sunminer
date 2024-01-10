import { AuthenticationContext } from "@/context/authenticationContext";
import { api } from "@/services/api/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { UseFormHandleSubmit, UseFormRegister, useForm } from "react-hook-form";
import * as z from "zod";

type userForm = z.infer<typeof user>;
const user = z.object({
  username: z.string(),
  password: z.string(),
});

interface Props {
  loading: boolean;
  register: UseFormRegister<{ username: string; password: string }>;
  handleUser(dataUser: userForm): void;
  handleSubmit: UseFormHandleSubmit<{ username: string; password: string }>;
}

export const useLogin = (): Props => {
  const { setUserData } = useContext(AuthenticationContext);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const { register, handleSubmit } = useForm<userForm>({
    resolver: zodResolver(user),
  });

  async function handleUser(dataUser: userForm) {
    setLoading(false);
    const data = await api.login({
      username: dataUser.username,
      password: dataUser.password,
    });
    console.log(data);
    setUserData(data);
    router.push("content/dashboard");
  }

  return {
    handleSubmit,
    handleUser,
    loading,
    register,
  };
};
