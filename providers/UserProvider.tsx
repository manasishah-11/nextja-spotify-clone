"use client";

import { UserContextProvider } from "@/hooks/useUser";

interface UserProviderProps {
  children: React.ReactNode;
}

function UserProvider(props: UserProviderProps) {
  return <UserContextProvider>{props.children}</UserContextProvider>;
}

export default UserProvider;
