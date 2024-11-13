import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { IWeatherResult } from '../services/weatherModels';
import { BrutePaper } from './styled';

interface IWeatherTableProps {
  weather?: IWeatherResult;
}
export const WeatherTable = ({ weather }: IWeatherTableProps) => {
  return (
    <BrutePaper elevation={3}>
      <Table>
        <TableHead>
          <TableCell>Dzień</TableCell>
          {weather?.daily?.time?.map((day: string) => {
            return <TableCell>{day}</TableCell>;
          })}
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Temperatura min.</TableCell>
            {weather?.daily?.temperature_2m_min?.map(temperature => {
              return <TableCell>{temperature}</TableCell>;
            })}
          </TableRow>
          <TableRow>
            <TableCell>Opady</TableCell>
            {weather?.daily?.precipitation_sum?.map(precipitation => {
              return <TableCell>{precipitation}</TableCell>;
            })}
          </TableRow>
        </TableBody>
      </Table>
    </BrutePaper>
  );
};
