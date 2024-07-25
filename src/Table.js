/* call all components to contruct Table;
   export component file into App.js 
  file */
  import Table from '@mui/material/Table';
  import TableBody from '@mui/material/TableBody';
  import TableCell from '@mui/material/TableCell';
  import TableContainer from '@mui/material/TableContainer';  
  import TableHead from '@mui/material/TableHead';
  import TableRow from '@mui/material/TableRow';
  import Paper from '@mui/material/Paper';
  
  /* insert raw viewership data*/
  function createData(
    date: String,
    viewership: number,
  ) {
    return { date, viewership };
  }
  
  const rows =  [
    createData('August 5, 2016 (Opening Ceremony)', 26.49),
    createData('August 6, 2016', 19.48),
    createData('August 7, 2016', 29.78),
    createData('August 8, 2016', 28.86),
    createData('August 9, 2016', 33.63),
    createData('August 10, 2016', 26.45),
    createData('August 11, 2016', 31.22),
    createData('August 12, 2016', 24.02),
    createData('August 13, 2016', 23.99),
    createData('August 14, 2016', 26.75),
    createData('August 15, 2016', 24.27),
    createData('August 16, 2016', 24.13),
    createData('August 17, 2016', 20.68),
    createData('August 18, 2016', 21.70),
    createData('August 19, 2016', 18.14),
    createData('August 20, 2016 (Closing Ceremony)', 16.85),
  ];
  
  export default function BasicTable() {
    return (
      <TableContainer component={Paper}>
        <Table size="small" sx={{ minWidth: 650}} aria-label="simple table">
          <TableHead>
            {/*add header labels for data*/}
            <TableRow>
              <TableCell>Day of Games</TableCell>
              <TableCell align="right">Daily Viewership</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': {border: 0} }}
                >
                  {/*insert data in each row under appropriate header*/}
                  <TableCell component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell align="right">{row.viewership}</TableCell>
              </TableRow>


            ))}
            
          </TableBody>
        </Table>
      </TableContainer>
      
    );
    
  }