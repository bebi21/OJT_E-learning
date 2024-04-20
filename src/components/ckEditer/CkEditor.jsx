import React, { useState } from 'react';

import { CustomUploadAdapterPlugin } from './CustomUploadAdapter';
 // Đảm bảo rằng bạn đã nhập đúng file

function Ckeditor5() {
    const [editorContent, setEditorContent] = useState('');

    return (
        <div className="App">
            <h2>CKEditor 5 - Hiển thị hình ảnh ngay lập tức sau khi tải lên</h2>
            <CKEditor
                editor={ClassicEditor}
                data={editorContent}
                onReady={editor => {
                    console.log('Editor đã sẵn sàng!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setEditorContent(data);
                }}
                config={{
                    extraPlugins: [CustomUploadAdapterPlugin],
                }}
            />
            
            {/* Hiển thị nội dung của editor */}
            <div dangerouslySetInnerHTML={{ __html: editorContent }}></div>
        </div>
    );
}

export default Ckeditor5;