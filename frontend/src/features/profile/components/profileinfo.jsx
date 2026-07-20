import SectionCard from "@/components/common/sectioncard";
import DetailRow from "@/components/common/detailrow";

export default function ProfileInfo({
  user,
}) {
  return (
    <SectionCard title="Account Information">
      <DetailRow
        label="First Name"
        value={user.firstName}
      />

      <DetailRow
        label="Last Name"
        value={user.lastName}
      />

      <DetailRow
        label="Email"
        value={user.email}
      />

      <DetailRow
        label="Role"
        value={
          user.role === "admin"
            ? "Administrator"
            : "User"
        }
      />
    </SectionCard>
  );
}