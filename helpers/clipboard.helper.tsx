import { ErrorArguments } from "../interfaces/refactor.interface";
import { setLocale } from "./locale.helper";


export function copyToClipboard(id: string) {
    navigator.clipboard.writeText(id).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
