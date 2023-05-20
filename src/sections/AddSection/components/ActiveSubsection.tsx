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
    c14: number,
    c14Tong: number,
    a14c: number,
    a14cTong: number,
    c50: number,
    c50Tong: number,
    gasPayment: number,
    hutang: number,
    tongPayment: number,
    bayarHutang: number,
    pinjamTong: number,
    pulangTong: number,
    totalCashCollection: number
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
            c12Tong: 0,
            c14: 0,
            c14Tong: 0,
            a14c: 0,
            a14cTong: 0,
            c50: 0,
            c50Tong:0,
            gasPayment: 0,
            hutang: 0,
            tongPayment: 0,
            bayarHutang: 0,
            pinjamTong: 0,
            pulangTong: 0,
            totalCashCollection: 0
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

                case "c14":
                    formDataObject.c14 = parseInt(value.toString());
                    break;

                case "c14Tong":
                    formDataObject.c14Tong = parseInt(value.toString());
                    break;

                case "a14c":
                    formDataObject.a14c = parseInt(value.toString());
                    break;

                case "a14cTong":
                    formDataObject.a14cTong = parseInt(value.toString());
                    break;
                    
                case "c50":
                    formDataObject.c50 = parseInt(value.toString());
                    break;

                case "c50Tong":
                    formDataObject.c50Tong = parseInt(value.toString());
                    break;

                case "gasPayment":
                    formDataObject.gasPayment = parseInt(value.toString());
                    break;

                case "hutang":
                    formDataObject.hutang = parseInt(value.toString());
                    break;
                
                case "tongPayment":
                    formDataObject.tongPayment = parseInt(value.toString());
                    break;

                case "bayarHutang":
                    formDataObject.bayarHutang = parseInt(value.toString());
                    break;

                case "pinjamTong":
                    formDataObject.pinjamTong = parseInt(value.toString());
                    break;

                case "pulangTong":
                    formDataObject.pulangTong = parseInt(value.toString());
                    break;    

                // case "totalCashCollection":
                //     formDataObject.totalCashCollection = parseInt(value.toString())
                //     break;
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
                                <TextField name="date" required={true} size="small" type="datetime-local" className="w-60 shadow-sm shadow-indigo-900 max-sm:w-full"/>
                            </div>
                            <TextField name="name" required={true} size="small" label="Name" className="shadow-sm shadow-indigo-900"/>
                            <TextField name="lorry" required={true} size="small" label="Lorry" className="shadow-sm shadow-indigo-900"/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <FormLabel>Non-essential Data</FormLabel>
                        <div className="flex gap-4 max-sm:flex-col">
                            <TextField name="c12" size="small" label="C12" type="number" className="w-60 shadow-sm shadow-indigo-900 max-sm:w-full"/>
                            <TextField name="c12Tong" size="small" label="C12Tong" type="number" className="shadow-sm shadow-indigo-900"/>
                            <TextField name="c14" size="small" label="C14" type="number" className="shadow-sm shadow-indigo-900"/>
                            <TextField name="c14Tong" size="small" label="C14Tong" type="number" className="shadow-sm shadow-indigo-900"/>
                        </div>
                        <div className="flex gap-4 mt-1 max-sm:flex-col">
                            <TextField name="a14c" size="small" label="14c" type="number" className=" w-60 shadow-sm shadow-indigo-900 max-sm:w-full"/>
                            <TextField name="a14cTong" size="small" label="14cTong" type="number" className="shadow-sm shadow-indigo-900"/>
                            <TextField name="c50" size="small" label="C50" type="number" className="shadow-sm shadow-indigo-900"/>
                            <TextField name="c50Tong" size="small" label="C50Tong" type="number" className="shadow-sm shadow-indigo-900"/>
                        </div>
                        <div className="flex gap-4 mt-6 max-sm:flex-col">
                            <TextField name="gasPayment" size="small" label="Gas Payment" type="number" className="w-60 shadow-sm shadow-indigo-900 max-sm:w-full"/>
                            <TextField name="hutang" size="small" label="Hutang" type="number" className="shadow-sm shadow-indigo-900"/>
                            <TextField name="tongPayment" size="small" label="Tong Payment" type="number" className="shadow-sm shadow-indigo-900"/>
                            <TextField name="bayarHutang" size="small" label="Bayar Hutang" type="number" className="shadow-sm shadow-indigo-900"/>
                        </div>
                        <div className="flex gap-4 mt-1 max-sm:flex-col">
                            <TextField name="pinjamTong" size="small" label="Pinjam Tong" type="number" className="w-60 shadow-sm shadow-indigo-900 max-sm:w-full"/>
                            <TextField name="pulangTong" size="small" label="Pulang Tong" type="number" className="shadow-sm shadow-indigo-900"/>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-2 mb-4 max-sm:flex-col max-sm:mb-0">
                        <Button variant="contained" type="submit">Done</Button>
                        <Button onClick={props.OnCancelClicked}>Cancel</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}