import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between p-24">
       <LoginButton >
       <Button variant="secondary" size="lg">Sign In</Button>
       </LoginButton>
    </main>
  );
}
