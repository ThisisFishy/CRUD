import { Button, FormLabel, TextField } from "@mui/material"

interface ActiveSubsectionProps {
    OnDoneClicked: (formDataObject: FormDataObject) => void,
    OnCancelClicked: () => void
}

export interface FormDataObject {
    date: Date,
    name: string,
    lorry: string,
    c12: number,
    c12Tong: number,
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
            c12: 0,
            c12Tong: 0
        }

        // Extract the raw data and convert it into a FormDataObject
        data.forEach((value, key) => {
            // Ignore empty fields
            if (value.toString().length === 0) return;

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

                case "c12":
                    formDataObject.c12 = parseInt(value.toString());
                    break;

                case "c12Tong":
                    formDataObject.c12Tong = parseInt(value.toString());
                    break;
            }
        });

        props.OnDoneClicked(formDataObject);
    }

    return (
        <div className="flex flex-col gap-4">

            <form onSubmit={onSubmit}>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <FormLabel>Essential Data</FormLabel>
                        <div className="flex gap-4">
                            <div>
                                <TextField name="date" required={true} size="small" type="datetime-local" />
                            </div>
                            <TextField name="name" required={true} size="small" label="Name" />
                            <TextField name="lorry" required={true} size="small" label="Lorry" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <FormLabel>Non-essential Data</FormLabel>
                        <div>
                            <TextField name="c12" size="small" label="C12" type="number" />
                            <TextField name="c12Tong" size="small" label="C12Tong" type="number" />
                        </div>
                    </div>

                    <div className="flex gap-4 mt-2 mb-4">
                        <Button variant="contained" type="submit">Done</Button>
                        <Button onClick={props.OnCancelClicked}>Cancel</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}