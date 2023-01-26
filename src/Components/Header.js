import { Header as Head, Icon } from 'semantic-ui-react';

export default function Header() {
    return (
    <div className="header">
        <Head as="h1" icon textAlign="center"  color="blue">
            <Icon inverted color="blue" name="copy outline " circular />
            <Head.Content>Listado de Tareas</Head.Content>
        </Head>
    </div>

 )
};