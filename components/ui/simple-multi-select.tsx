"use client";

import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";
import { useState } from "react";

import { Badge } from "./badge";
import { FormControl } from "./form";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectTrigger,
    SelectValue,
} from "./select";

interface SelectOption {
    label: string;
    value: string;
}

interface SimpleSimpleMultiSelectProps {
    options: SelectOption[];
    onChange?: (selected: string[]) => void;
    defaultValues?: string[];
}

export default function SimpleMultiSelect({
    options,
    onChange,
    defaultValues = [],
}: SimpleSimpleMultiSelectProps) {
    const [selectedOptions, setSelectedOptions] = useState<string[]>(defaultValues);

    const toggleOption = (value: string) => {
        const updatedSelection = selectedOptions.includes(value)
            ? selectedOptions.filter((item) => item !== value)
            : [...selectedOptions, value];

        setSelectedOptions(updatedSelection);
        onChange?.(updatedSelection);
    };

    return (
        <Select>
            <FormControl>
                <SelectTrigger className="w-full !h-fit flex flex-wrap justify-start gap-2 [&>.lucide-chevron-down]:ms-auto">
                    {selectedOptions.length > 0 ? (
                        <>
                            {options
                                .filter((option) => selectedOptions.includes(option.value))
                                .slice(0, 5)
                                .map((option, index) => (
                                    <div key={index} className="flex items-center">
                                        <Badge variant={"outline"} className="!pointer-events-auto cursor-pointer" onClick={(e) => {
                                            e.stopPropagation();
                                            toggleOption(option.value);
                                        }} key={option.value}>
                                            {option.label}
                                            <X

                                                className="w-2 h-2"
                                            />
                                        </Badge>

                                    </div>
                                ))}
                            {selectedOptions.length > 5 && (
                                <Badge variant="secondary">
                                    +{selectedOptions.length - 5} more
                                </Badge>
                            )}
                        </>
                    ) : (
                        <SelectValue placeholder="Select options" />
                    )}
                </SelectTrigger>
            </FormControl>
            <SelectContent>
                <SelectGroup>
                    {options.map((option) => {
                        const isSelected = selectedOptions.includes(option.value);
                        return (
                            <div
                                key={option.value}
                                className={cn(
                                    "relative flex items-center cursor-pointer py-1.5 pl-8 pr-2 text-sm rounded-sm hover:bg-accent",
                                    isSelected && "bg-accent/50"
                                )}
                                onClick={() => toggleOption(option.value)}
                            >
                                <span className="absolute left-2 flex items-center justify-center h-3.5 w-3.5">
                                    {isSelected && <Check className="w-4 h-4" />}
                                </span>
                                {option.label}
                            </div>
                        );
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
