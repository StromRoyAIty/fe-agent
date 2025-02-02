"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

const formSchema = z.object({
  agents: z.string(),
});

export type FormType = z.infer<typeof formSchema>;
export default function Page() {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      agents: "",
    },
  });

  const agents = ["tourist", "farmer"];
  const value = form.watch("agents");
  console.log(value);
  const router = useRouter();

  const { handleSubmit, control } = form;
  const onSubmit = () => {
    router.push(`/dashboard/chats/agents/${value}`);
  };
  return (
    <>
      <div className="w-full">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 space-y-6">
            <FormField
              control={control}
              name="agents"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Agent</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified agent" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {agents.map((agent) => (
                        <SelectGroup key={agent} title={agent}>
                          <SelectItem value={agent}>
                            {agent.toUpperCase()}
                          </SelectItem>
                        </SelectGroup>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    AI agents that have been verified by the community
                  </FormDescription>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>{" "}
      </div>
    </>
  );
}
