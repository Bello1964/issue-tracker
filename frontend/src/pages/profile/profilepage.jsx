import ProfileHeader from "@/features/profile/components/profileheader";
import ProfileInfo from "@/features/profile/components/profileinfo";
import ProfileStats from "@/features/profile/components/profilestats";
import QuickActions from "@/features/profile/components/quickactions";

import useProfile from "@/features/profile/hooks/useprofile";

export default function ProfilePage() {
  const {
    profile,
    isLoading,
  } = useProfile();

  if (isLoading) {
    return (
      <p className="text-muted-foreground">
        Loading profile...
      </p>
    );
  }

  return (
    <div className="space-y-8">

      <ProfileHeader
        user={profile.user}
      />

      <ProfileStats
        statistics={profile.statistics}
      />

      <div className="grid gap-6 xl:grid-cols-2">

        <ProfileInfo
          user={profile.user}
        />

        <QuickActions />

      </div>

    </div>
  );
}