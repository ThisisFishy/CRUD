import { Button, FormLabel, TextField, FormControl, Autocomplete } from "@mui/material"
import { presetLorry, presetDriver } from "my-app/components/presetData"
import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ActiveSubsectionProps {
    OnDoneClicked: (formDataObject: FormDataObject) => void,
    OnCancelClicked: () => void
}

export interface FormDataObject {
    date: string,
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
    receiptNumber: string,
    account: string,
    notes: string,
}

export const ActiveSubsection = (props: ActiveSubsectionProps) => {
    const [showNonEssential, setShowNonEssential] = useState(false);
    const toggleNonEssential = () => setShowNonEssential(!showNonEssential);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        console.log("Submitted laaaa!");

        event.preventDefault();
        const data = new FormData(event.currentTarget)
        const formDataObject: FormDataObject = {
            date: "YYYY-MM-DD",
            name: "Default Name",
            lorry: "",
            c12: 0,
            c12Tong: 0,
            c14: 0,
            c14Tong: 0,
            a14c: 0,
            a14cTong: 0,
            c50: 0,
            c50Tong: 0,
            receiptNumber: "",
            account: "",
            notes: "",
        }

        // Extract the raw data and convert it into a FormDataObject
        data.forEach((value, key) => {
            // Ignore empty fields
            if (value.toString().length === 0) return;

            // console.log(key, value)

            // key is the same as the name prop in the TextField
            switch (key) {
                case "date":
                    const date = new Date(value.toString());
                    formDataObject.date = date.toISOString().split('T')[0];
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

                case "receiptNumber":
                    formDataObject.receiptNumber = value.toString();;
                    break;

                case "account":
                    formDataObject.account = value.toString();;
                    break;

                case "notes":
                    formDataObject.notes = value.toString();;
                    break;

            }
        });

        props.OnDoneClicked(formDataObject);

        try {
            // submit data to the API endpoint
            const response = await axios.post('/api/submitForPurchase', formDataObject);
            console.log(response.data);
            toast.success('Data Added!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } catch (error) {
            // handle error
            toast.error('Data Transmission Failed!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            console.error("An error occurred while submitting the form: ", error);
        }
    }

    return (
        <div className="flex flex-col gap-4 max-sm:justify-center max-sm:ml-0">

            <form onSubmit={onSubmit}>
                <div className="flex flex-col gap-4 bg-slate-900 p-5 rounded-lg shadow-lg shadow-gray-900">
                    <div className="flex flex-col gap-2 ">
                        <FormLabel>Essential Data</FormLabel>
                        <div className="flex gap-4 max-sm:flex-col">
                            <div>
                                <TextField name="date" required={true} size="small" type="datetime-local" className="w-60 shadow-sm shadow-indigo-900 max-sm:w-full" />
                            </div>
                            <FormControl variant="outlined" className="w-48 shadow-sm shadow-indigo-900 max-sm:w-full">
                                <Autocomplete
                                    options={presetDriver}
                                    renderInput={(params) => (
                                        <TextField {...params} name="name" required label="Driver" size="small" />
                                    )}
                                    freeSolo //To allow you to input by yourself 
                                />
                            </FormControl>

                            <FormControl variant="outlined" className="w-48 shadow-sm shadow-indigo-900 max-sm:w-full">
                                <Autocomplete
                                    options={presetLorry}
                                    renderInput={(params) => (
                                        <TextField {...params} name="lorry" required label="Lorry" size="small" />
                                    )}
                                    freeSolo //To allow you to input by yourself 
                                />
                            </FormControl>
                            <TextField name="c14" size="small" label="C14" required={true} type="number" className="w-48 shadow-sm shadow-indigo-900 max-sm:w-full" />
                            <TextField name="receiptNumber" size="small" label="Receipt No." required={true} className="w-48 shadow-sm shadow-indigo-900 max-sm:w-full" />
                        </div>
                    </div>

                    {showNonEssential && (
                        <div className="flex flex-col gap-2">
                            <FormLabel>Non-essential Data</FormLabel>
                            <div className="flex gap-4 max-sm:flex-col">
                                <TextField name="c12" size="small" label="C12" type="number" className="w-60 shadow-sm shadow-indigo-900 max-sm:w-full" />
                                <TextField name="c12Tong" size="small" label="C12Tong" type="number" className="w-48 shadow-sm shadow-indigo-900 max-sm:w-full" />
                                <TextField name="c14Tong" size="small" label="C14Tong" type="number" className="w-48 shadow-sm shadow-indigo-900 max-sm:w-full" />
                            </div>
                            <div className="flex gap-4 mt-1 max-sm:flex-col">
                                <TextField name="a14c" size="small" label="14c" type="number" className=" w-60 shadow-sm shadow-indigo-900 max-sm:w-full" />
                                <TextField name="a14cTong" size="small" label="14cTong" type="number" className="w-48 shadow-sm shadow-indigo-900 max-sm:w-full" />
                                <TextField name="c50" size="small" label="C50" type="number" className="w-48 shadow-sm shadow-indigo-900 max-sm:w-full" />
                                <TextField name="c50Tong" size="small" label="C50Tong" type="number" className="w-48 shadow-sm shadow-indigo-900 max-sm:w-full" />
                            </div>
                            <div className="flex gap-4 mt-1 max-sm:flex-col">
                                <TextField name="account" size="small" label="Account" className="w-60 shadow-sm shadow-indigo-900 max-sm:w-full" />
                                <TextField name="notes" size="small" label="Notes" className="w-48 shadow-sm shadow-indigo-900 max-sm:w-full" />
                            </div>
                        </div>
                    )}

                    <div className="flex gap-4 mt-2 mb-4 max-sm:flex-col max-sm:mb-0">
                        <Button variant="contained" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                            </svg>
                            Done
                        </Button>
                        <Button onClick={toggleNonEssential}>
                            {showNonEssential ? "Hide Non-Essential Data" : "Show Non-Essential Data"}
                        </Button>
                        <Button onClick={props.OnCancelClicked}>Cancel</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}