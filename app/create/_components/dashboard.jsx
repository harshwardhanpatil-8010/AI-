"use client";

import { useSession } from "@workos-inc/authkit-nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session]);

  if (!session) return <p>Loading...</p>;

  return <h1>Welcome to the Dashboard, {session.user.email}!</h1>;
}