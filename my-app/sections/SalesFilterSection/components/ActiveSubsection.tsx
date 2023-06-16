import { Button, TextField, Autocomplete, FormControl } from "@mui/material"
import { useState } from "react";

interface FilterSectionProps {
    onFilterApplied: (filterData: FilterData) => void,
    onCancelClicked: () => void
}

export interface FilterData {
    dateFrom?: string,
    dateTo?: string,
    name?: string,
    lorry?: string,
}

const fields = ['Date', 'Name', 'Lorry']; // These are just sample fields
const conditions = ['equals', 'not equals', 'greater than', 'less than'];

export const FilterSection = (props: FilterSectionProps) => {

    const [dateFrom, setDateFrom] = useState<string>("");
    const [dateTo, setDateTo] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [lorry, setLorry] = useState<string>("");


    const [field, setField] = useState<string | null>(null);
    const [condition, setCondition] = useState<string | null>(null);
    const [value, setValue] = useState<string>("");
    
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const filterData: FilterData = {
            dateFrom,
            dateTo,
            name,
            lorry
        }

        props.onFilterApplied(filterData);
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
