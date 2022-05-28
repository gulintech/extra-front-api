import { useAuthenticator } from "@aws-amplify/ui-react";

export function Main() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  return <>{user?.getUsername()}</>;
}
