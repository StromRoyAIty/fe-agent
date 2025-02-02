import { Chat } from "../../chat";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const n = (await params).id;
  return (
    <div>
      <Chat name={n} />
    </div>
  );
}
