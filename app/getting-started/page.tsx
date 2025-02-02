"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  agents: z.array(z.string()),
});

export type FormType = z.infer<typeof formSchema>;
export default function Page() {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      agents: ["tourist", "farmer"],
    },
  });
  const agents = form.watch("agents");

  const { handleSubmit, control } = form;
  const handleSubmitForm = () => {};
  return (
    <>
      <div className="flex items-center justify-center">
        <Form {...form}>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <FormField
              control={control}
              name="agents"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Select
                      value={field.value?.toString()}
                      onValueChange={(val) => field.onChange(val === "true")}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectGroup>
                        <SelectContent>
                          {agents.map((name) => (
                            <SelectItem
                              key={name.toString()}
                              value={name.toString()}
                            >
                              {name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </SelectGroup>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </>
  );
}
