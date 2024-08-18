import { useEffect, useRef, useState } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import { ayuLight } from 'thememirror';
import { doc } from './state';

import './assets/style/index.css';

let insertTimes = 0;

export function CodeEditor(): React.JSX.Element {
    const codeContainerRef = useRef(null);

    useEffect(() => {
        if (!codeContainerRef.current || insertTimes) {
            return;
        }

        const codeMirrorState = EditorState.create({
            doc,
            extensions: [
                ayuLight,
                basicSetup,
                javascript(),
                EditorView.updateListener.of((v) => {
                    console.log(v); // 监测得到的最新代码
                }),
            ],
        });

        // eslint-disable-next-line unused-imports/no-unused-vars
        const view = new EditorView({
            state: codeMirrorState,
            parent: codeContainerRef.current,
        });

        // console.log({
        //     view,
        //     EditorView,
        // });

        insertTimes = 1;
    }, []);

    return (
        <div ref={codeContainerRef} className="wwww">
            <div></div>
        </div>
    );
}
