import { SignedIn, UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div className="flex items-center justify-between px-2 py-2">
      <h1>I&apos;m starting the NextJS 13</h1>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
