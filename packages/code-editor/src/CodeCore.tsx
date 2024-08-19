import { useEffect, useReducer, useRef } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { Compartment, EditorState } from '@codemirror/state';
import { useAtomValue } from 'jotai';
import { doc } from './state';
import './assets/style/index.css';
import { readonlyLanguageSupport, readonlyTheme } from './store';

function reducerView(
    state: { view: EditorView | null },
    action: { payload: EditorView },
) {
    if (state.view) {
        state.view.destroy();
    }

    if (action.payload) {
        return {
            view: action.payload,
        };
    }

    return {
        view: null,
    };
}

export function CodeCore(): React.JSX.Element {
    const codeContainerRef = useRef(null);
    const languageSupport = useAtomValue(readonlyLanguageSupport);
    const theme = useAtomValue(readonlyTheme);

    const [viewObj, dispatchView] = useReducer(reducerView, {
        view: null,
    });

    useEffect(() => {
        if (!codeContainerRef.current) {
            return;
        }
        const languageConf = new Compartment();

        dispatchView({
            payload: new EditorView({
                state: EditorState.create({
                    doc,
                    extensions: [
                        theme,
                        basicSetup,
                        languageConf.of(languageSupport),
                    ],
                }),
                parent: codeContainerRef.current,
            }),
        });
    }, [codeContainerRef, languageSupport, theme]);

    useEffect(() => {
        const languageConf = new Compartment();

        viewObj.view?.setState(EditorState.create({
            doc,
            extensions: [
                theme,
                basicSetup,
                languageConf.of(languageSupport),
            ],
        }));
    }, [
        languageSupport,
        theme,
        viewObj,
    ]);

    return (
        <div ref={codeContainerRef}></div>
    );
}
