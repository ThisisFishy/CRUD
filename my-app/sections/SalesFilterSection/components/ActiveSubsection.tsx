import { Button, TextField, Autocomplete, FormControl } from "@mui/material";
import { useState } from "react";
import { GridValidRowModel } from "@mui/x-data-grid";
import { fetchSalesData } from "my-app/pages/api/api";

interface FilterSectionProps {
    onFilterApplied: (newSalesData: GridValidRowModel[]) => void,
    onCancelClicked: () => void
}

export interface FilterData {
    field?: string,
    condition?: string,
    value?: string,
    secondValue?: string
}

const fields = ['Date', 'Name', 'Lorry'];
const conditions = ['equals', 'not equals', 'between', 'greater than', 'less than', 'greater or equal to', 'smaller or equal to'];

export const FilterSection = (props: FilterSectionProps) => {
    const [field, setField] = useState<string | undefined>();
    const [condition, setCondition] = useState<string | undefined>();
    const [value, setValue] = useState<string>("");
    const [secondValue, setSecondValue] = useState<string>("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();

        // if (!field || !condition || !value) {
        //     // Handle input validation error
        //     return;
        // }

        const filterData: FilterData = {
            field,
            condition,
            value,
            secondValue: condition === 'between' ? secondValue : undefined
        }

        console.log(filterData);
        console.log('This is ActiveSubsection');
        const newSalesData = await fetchSalesData(filterData);
        props.onFilterApplied(newSalesData);
    }

    return (
        <div className="flex flex-col gap-4 max-sm:justify-center max-sm:ml-0">
            <form onSubmit={onSubmit}>
                <div className="flex flex-col gap-4 bg-slate-900 p-5 rounded-lg shadow-lg shadow-gray-900">
                    <div className="flex flex-row gap-4 max-sm:flex-col">
                        <FormControl variant="outlined" className="w-60 shadow-sm shadow-indigo-900 max-sm:w-full">
                            <Autocomplete
                                options={fields}
                                onChange={(event, newValue) => {
                                    setField(newValue || "");
                                }}
                                renderInput={(params) => <TextField {...params} required name="field" label="Field" size="small" />}
                            />
                        </FormControl>

                        <FormControl variant="outlined" className="w-60 shadow-sm shadow-indigo-900 max-sm:w-full">
                            <Autocomplete
                                options={conditions}
                                onChange={(event, newValue) => {
                                    setCondition(newValue || "");
                                }}
                                renderInput={(params) => <TextField {...params} required name="condition" label="Condition" size="small" />}
                            />
                        </FormControl>

                        <TextField  
                            name="value" 
                            required={true} 
                            size="small" 
                            label="Value" 
                            className="w-60 shadow-sm shadow-indigo-900 max-sm:w-full"
                            onChange={(event) => {
                                setValue(event.target.value);
                            }}
                        />

                        {condition === 'between' && (
                            <TextField  
                                name="secondValue" 
                                required={true} 
                                size="small" 
                                label="Second Value" 
                                className="w-60 shadow-sm shadow-indigo-900 max-sm:w-full"
                                onChange={(event) => {
                                    setSecondValue(event.target.value);
                                }}
                            />
                        )}
                    </div>

                    <div className="flex gap-4 mt-2 mb-4 max-sm:flex-col max-sm:mb-0">
                        <Button variant="contained" type="submit">Apply Filter</Button>
                        <Button onClick={props.onCancelClicked}>Cancel</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}
