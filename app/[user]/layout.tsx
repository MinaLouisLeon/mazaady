
import AddReviewButton from "@/components/AddReviewButton";
import QrCodeCard from "@/components/QrCodeCard";
import { Card } from "@/components/ui/card";
import UserCard from "@/components/UserCard";
import QrCode from "@/Images/World-Static.svg";
const layout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <main className="mx-auto max-w-screen-2xl flex flex-col md:flex-row lg:px-8 relative">
      <AddReviewButton className="md:hidden z-50 fixed bottom-[20px] right-[16px]" />
      <section className="w-full md:w-fit md:mt-4">
        <UserCard userName="Hala Ahmed" description="I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care." />
        <QrCodeCard userName="Hala Ahmed" qrCode={QrCode} />
      </section>
      <section className="flex-1">
        <Card className="my-4 mx-4 md:mx-8 rounded-[24px] p-4 md:p-8 flex flex-col gap-2">
          {children}
        </Card>
      </section>
    </main>
  );
}

export default layout