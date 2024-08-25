import { Card, CardContent } from '@huo-note/shadcn-ui';
import { CodeContainer } from './CodeContainer';
import './assets/style/index.css';
import { CodeCore } from './CodeCore';

export function CodeEditor(): React.JSX.Element {
    return (
        <Card>
            <CardContent className="pt-6">
                <CodeContainer>
                    <CodeCore />
                </CodeContainer>
            </CardContent>
        </Card>
    );
}
