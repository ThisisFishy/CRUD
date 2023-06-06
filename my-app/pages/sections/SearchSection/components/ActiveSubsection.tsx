import { Button, FormLabel, TextField } from "@mui/material"

interface ActiveSubsectionProps {
    OnDoneClicked: (formDataObject: FormDataObject) => void,
    OnCancelClicked: () => void
}

export interface FormDataObject {
    date: Date,
    name: string,
    lorry: string,
}

export const ActiveSubsection = (props: ActiveSubsectionProps) => {

    // Called when the submit button is clicked
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // console.log("Submitted!");

        // Prevents default behavior of closing the form
        event.preventDefault();

        // Get the raw data from the form
        const data = new FormData(event.currentTarget)

        // Empty FormDataObject with default values
        const formDataObject: FormDataObject = {
            date: new Date(),
            name: "Default Name",
            lorry: "",
        }

        // Extract the raw data and convert it into a FormDataObject
        data.forEach((value, key) => {
            // Ignore empty fields
            // if (value.toString().length === 0) return;

            // console.log(key, value)

            // key is the same as the name prop in the TextField
            switch (key) {
                case "date":
                    formDataObject.date = new Date(value.toString());
                    break;

                case "name":
                    formDataObject.name = value.toString();
                    break;

                case "lorry":
                    formDataObject.lorry = value.toString();
                    break;
            }
        });

        props.OnDoneClicked(formDataObject);
    }

    return (
        <div className="flex flex-col gap-4 ml-4 max-sm:justify-center max-sm:ml-0">

            <form onSubmit={onSubmit}>
                <div className="flex flex-col gap-4 bg-slate-900 p-5 rounded-lg shadow-lg shadow-gray-900">
                    <div className="flex flex-col gap-2 ">
                        <FormLabel>Essential Data</FormLabel>
                        <div className="flex gap-4 max-sm:flex-col">
                            <div>
                                <TextField name="date" required={false} size="small" type="datetime-local" className="w-60 shadow-sm shadow-indigo-900 max-sm:w-full"/>
                            </div>
                            <TextField name="name" required={false} size="small" label="Name" className="shadow-sm shadow-indigo-900"/>
                            <TextField name="lorry" required={false} size="small" label="Lorry" className="shadow-sm shadow-indigo-900"/>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-2 mb-0 max-sm:flex-col max-sm:mb-0">
                        <Button variant="contained" type="submit">Done</Button>
                        <Button onClick={props.OnCancelClicked}>Cancel</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}