"use client";
import { FormItem, FormLabel } from "./ui/form";


import { SubmitHandler } from "react-hook-form";

import { useForm } from "react-hook-form";
import { Form, FormField } from "./ui/form";
import SimpleMultiSelect from "./ui/simple-multi-select";

export default function WowForm() {

    const options = [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
        { label: "Option 4", value: "option4" },
        { label: "Option 5", value: "option5" },
        { label: "Option 6", value: "option6" },
        { label: "Option 7", value: "option7" },
        { label: "Option 8", value: "option8" },
        { label: "Option 9", value: "option9" },
        { label: "Option 10", value: "option10" },
        { label: "Option 10", value: "option11" },
    ]

    const form = useForm({});

    const { handleSubmit } = form;

    const onSubmit: SubmitHandler<any> = async (data) => {
        console.log(data)
    };
    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <FormField
                        control={form.control}
                        name="options"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Options</FormLabel>
                                <SimpleMultiSelect onChange={field.onChange} options={options} />
                            </FormItem>
                        )}
                    />
                </div>
            </form>
        </Form>
    )
}