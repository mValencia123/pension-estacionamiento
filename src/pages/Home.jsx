import { Card } from '../components/Card';
import { Table } from '../components/Table';
import { TableBody } from '../components/TableBody';
import { TableData } from '../components/TableData';
import { TableHead } from '../components/TableHead';
import { TableRow } from '../components/TableRow';

export const Home = () => {
    return(
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="grid gap-10 sm:grid-cols-1 mx-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                <Card text="Personas que no han pagado">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableData type="H" data="Cliente"/>
                        <TableData type="H" data="Vehiculo"/>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableData type="D" data="Diego Saltiel"/>
                        <TableData type="D" data="Ford, Maverick"/>
                      </TableRow>
                      <TableRow>
                        <TableData type="D" data="Diego Saltiel"/>
                        <TableData type="D" data="Ford, Maverick"/>
                      </TableRow>
                      <TableRow>
                        <TableData type="D" data="Diego Saltiel"/>
                        <TableData type="D" data="Ford, Maverick"/>
                      </TableRow>
                      <TableRow>
                        <TableData type="D" data="Diego Saltiel"/>
                        <TableData type="D" data="Ford, Maverick"/>
                      </TableRow>
                      <TableRow>
                        <TableData type="D" data="Diego Saltiel"/>
                        <TableData type="D" data="Ford, Maverick"/>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Card>
                <Card text="Ultimas personas en entrar">
                <Table>
                    <TableHead>
                      <TableRow>
                        <TableData type="H" data="Cliente"/>
                        <TableData type="H" data="Vehiculo"/>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableData type="D" data="Diego Saltiel"/>
                        <TableData type="D" data="Ford, Maverick"/>
                      </TableRow>
                      <TableRow>
                        <TableData type="D" data="Diego Saltiel"/>
                        <TableData type="D" data="Ford, Maverick"/>
                      </TableRow>
                      <TableRow>
                        <TableData type="D" data="Diego Saltiel"/>
                        <TableData type="D" data="Ford, Maverick"/>
                      </TableRow>
                      <TableRow>
                        <TableData type="D" data="Diego Saltiel"/>
                        <TableData type="D" data="Ford, Maverick"/>
                      </TableRow>
                      <TableRow>
                        <TableData type="D" data="Diego Saltiel"/>
                        <TableData type="D" data="Ford, Maverick"/>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Card>
                <Card text="Proximas personas a entrar">
                <Table>
                    <TableHead>
                      <TableRow>
                        <TableData type="H" data="Cliente"/>
                        <TableData type="H" data="Vehiculo"/>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableData type="D" data="Diego Saltiel"/>
                        <TableData type="D" data="Ford, Maverick"/>
                      </TableRow>
                      <TableRow>
                        <TableData type="D" data="Diego Saltiel"/>
                        <TableData type="D" data="Ford, Maverick"/>
                      </TableRow>
                      <TableRow>
                        <TableData type="D" data="Diego Saltiel"/>
                        <TableData type="D" data="Ford, Maverick"/>
                      </TableRow>
                      <TableRow>
                        <TableData type="D" data="Diego Saltiel"/>
                        <TableData type="D" data="Ford, Maverick"/>
                      </TableRow>
                      <TableRow>
                        <TableData type="D" data="Diego Saltiel"/>
                        <TableData type="D" data="Ford, Maverick"/>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Card>
                <Card text="Proximas personas a salir">
                <Table>
                    <TableHead>
                      <TableRow>
                        <TableData type="H" data="Cliente"/>
                        <TableData type="H" data="Vehiculo"/>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableData type="D" data="Diego Saltiel"/>
                        <TableData type="D" data="Ford, Maverick"/>
                      </TableRow>
                      <TableRow>
                        <TableData type="D" data="Diego Saltiel"/>
                        <TableData type="D" data="Ford, Maverick"/>
                      </TableRow>
                      <TableRow>
                        <TableData type="D" data="Diego Saltiel"/>
                        <TableData type="D" data="Ford, Maverick"/>
                      </TableRow>
                      <TableRow>
                        <TableData type="D" data="Diego Saltiel"/>
                        <TableData type="D" data="Ford, Maverick"/>
                      </TableRow>
                      <TableRow>
                        <TableData type="D" data="Diego Saltiel"/>
                        <TableData type="D" data="Ford, Maverick"/>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Card>
              </div>
        </div>
    );
}