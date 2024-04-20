// CustomUploadAdapter.js
export class CustomUploadAdapter {
    constructor(loader) {
        // The file loader instance to use during the upload.
        this.loader = loader;
    }

    // Starts the upload process.
    upload() {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                resolve({ default: reader.result });
            };

            reader.onerror = error => {
                reject(error);
            };

            reader.onabort = () => {
                reject();
            };

            this.loader.file.then(file => {
                reader.readAsDataURL(file);
            });
        });
    }

    // Aborts the upload process.
    abort() {
        // Logic to abort the upload process if needed.
    }
}

// Plugin để thêm vào CKEditor
export function CustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new CustomUploadAdapter(loader);
    };
}
