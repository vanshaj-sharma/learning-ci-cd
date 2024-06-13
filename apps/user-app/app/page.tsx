import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./lib/auth";

export default async function Page() {
  //testing to work with pr
  //is it working??
  //this is sparta not sarav
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect("/dashboard");
  } else {
    redirect("/api/auth/signin");
  }
}
