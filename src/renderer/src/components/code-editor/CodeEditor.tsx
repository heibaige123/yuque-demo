import { CodeContainer } from './CodeContainer';
import { CodeCore } from './CodeCore';
import { Card, CardContent } from '~renderer/shadcn-ui';
import './assets/style/index.css';

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
