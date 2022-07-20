import { useAuthenticator } from "@aws-amplify/ui-react";

export function User() {
  const { user } = useAuthenticator((context) => [context.user]);
  return <>{user?.getUsername()}</>;
}
