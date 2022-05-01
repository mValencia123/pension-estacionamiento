import { Card } from '../components/Card';

export const Home = () => {
    return(
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="grid gap-10 grid-cols-2 mx-2">
                <Card text="Personas que no han pagado">

                </Card>
                <Card text="Ultimas personas en entrar">
                  
                </Card>
                <Card text="Proximas personas a entrar">
                  
                </Card>
                <Card text="Proximas personas a salir">
                  
                </Card>
              </div>
        </div>
    );
}