import Input from './components/Input';
import Button from './components/Button';
// import Container from './components/Container';
import { useRef } from 'react';
import Form, { type FormHandle } from './components/Form';

function App() {
    // const input = useRef<HTMLInputElement>(null);
    const customForm = useRef<FormHandle>(null);

    const handleSave = (data: unknown) => {
        const extractedData = data as { name: string; age: string };
        console.log(extractedData);
        customForm.current?.clear();
    };

    return (
        <main>
            {/* <Input id='name' label='Your name' type='text' />
            <Input id='age' label='Your age' type='number' />
            <Button>A button</Button>
            <Button href='https://www.google.com'>A link</Button> */}
            {/* <Container as={Button} type='button'>
                <Button>A button</Button>
            </Container> */}

            <Form onSave={handleSave} ref={customForm}>
                <Input type='text' label='Name' id='name' />
                <Input type='number' label='Age' id='age' />
                <p>
                    <Button>Save</Button>
                </p>
            </Form>
        </main>
    );
}

export default App;
