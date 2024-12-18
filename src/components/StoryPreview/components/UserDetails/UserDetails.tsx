// types
import type { UserDetailsProps } from "./types";

export default function UserDetails({
  profileImage,
  username,
  children,
}: UserDetailsProps) {
  return (
    <div className="flex items-center gap-[0.5rem]">
      <img
        src={profileImage}
        alt={username}
        className="w-[32px] h-[32px] rounded-full"
      />
      <p className="text-white text-[1rem] font-bold">{username}</p>
      {children}
    </div>
  );
}
