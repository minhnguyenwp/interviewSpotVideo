import { buffers, eventChannel, END } from 'redux-saga';
function createUploadFileChannel(url, file) {
    return eventChannel(emitter => {
        const xhr = new XMLHttpRequest();
        const onProgress = (e: ProgressEvent) => {
            if (e.lengthComputable) {
                const progress = e.loaded / e.total;
                emitter({ progress });
            }
        };
        const onFailure = (e: ProgressEvent) => {
            emitter({ err: new Error('Upload failed') });
            emitter(END);
        };
        xhr.upload.addEventListener("progress", onProgress);
        xhr.upload.addEventListener("error", onFailure);
        xhr.upload.addEventListener("abort", onFailure);
        xhr.onreadystatechange = () => {
            const { readyState, status } = xhr;
            if (readyState === 4) {
                if (status === 200) {
                    emitter({ success: true });
                    emitter(END);
                }
                else {
                    onFailure(null);
                }
            }
        };
        xhr.open("POST", url, true);
        xhr.send(file);
        return () => {
            xhr.upload.removeEventListener("progress", onProgress);
            xhr.upload.removeEventListener("error", onFailure);
            xhr.upload.removeEventListener("abort", onFailure);
            xhr.onreadystatechange = null;
            xhr.abort();
        };
    }, buffers.sliding(2));
}