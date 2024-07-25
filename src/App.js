import './App.css';
import Container from '@mui/material/Container';
import BasicTable from './Table';
import Divider from '@mui/material/Divider';
import TotalViewers from './TotalViewers';
import AvgViewers from './AvgViewers'
import TotalTickets from './TotalTickets'

{/*adjust tabs and spacing for better eadability*/}


function App() {
  return (

    <div className="App">
      <header className="App-header">
      </header>

      <div>
        {/* add container to wrap text*/}
        <Container maxWidth="sm">
          <h1>A Quick Study of the Rio Olympic Games: 
              A Comparison Between Stadium Attendance 
              & Television Viewership in the United States
          </h1>
        </Container>
      </div>

      {/*add divider for spacing and better visual*/}
      <Divider></Divider>

      <div>
        {/* add container to wrap text*/}
        <Container maxWidth="sm">
          <br></br>
          <h3>Purpose</h3>

            {/*align text to left for better visual appearance; adjust in CSS later*/}
            <p align="left"> 
              This a simple and brief analysis of existing data on 
              the Olympic Games to simply illustrate the differences 
              between stadium attendance and television viewership and 
              visualize this raw data. 
            
              This information may be used to highlight the importance
              for continued focus on the at-home viewer for brands
              and commercial advertisement. 
            </p>
            <br></br>
        </Container>
      </div>

      {/* add container*/}
      <div>
        <Container maxWidth="sm">
          <h3>Methodology</h3>

            {/*align text to left for better visual appearance; adjust in CSS later*/} 
            <p align="left">
            The methodology used for the analysis of this data is 
            fairly straightforward. We reviewed data on the the 
            daily viewership in the United States for the 2016 
            Olympic Games in Rio. We also reviewed data on the 
            total number of ticket sales for the Rio Games.

            <br></br>
            <br></br>
            
            The data used for this short study was not taken
            from the most recent Olympic Games: Tokyo 2020.
            The Tokyo 2020 Games were excluded in lieu of the 
            Rio Games as any data from the Tokyo 2020 Games
            would have resulted in a skewed analysis due to 
            the <a href='https://www.statista.com/chart/32569/tickets-sold-for-summer-olympics-since-1984/' 
            target ='blank'> COVID pandemic and safety protocols 
            set in place for the competing athletes.</a>

            <br></br>
            <br></br>
            An additional note of importance is that this short 
            study does not seek to serve as a true comparison of
            attendance as compared to stadium and event attendance
            by spectators -- but is rather illustrative
            of the type of analysis that could be possible with 
            complete data on daily attendance for either (a) each 
            event individually, or (b) the average daily attendance 
            for all events.

            <br></br>
            <br></br>
            As such, the use of this information and visualized
            data is limited to a rather basic analysis of the 
            available data. This study may develop into an 
            ongoing project and be extended to other available data 
            beyond viewership on the 2016 Rio Games (and games prior to Rio), 
            as well as data that may become available on the Paris 2024 games.
            Additional insight into available data (providing a deeper
            and more complex analysis examining the relationships between various
            datasets for more practical purposes) may also continue to be provided 
            for this project.

            <br></br>
            <br></br>

            Additional visualizations will be added on an ongoing basis.
            </p>
            <br></br>
            <br></br>
          </Container>
      </div>

      <Divider variant='middle'></Divider>

      <div>
        <Container maxWidth="md">
          <br></br>
        <h3>Data</h3>
        {/* add table and populate w/ data from study */}
          <BasicTable></BasicTable>

          <h6 align='left'> Source: <a href='https://www.statista.com/statistics/589506/olympics-daily-viewership/' target='_blank'>
            https://www.statista.com/statistics/589506/olympics-daily-viewership/</a>
          </h6>
          <br></br>
        </Container>
      </div>
          
      <Divider variant='middle'></Divider>

      <div>
      <Container maxWidth="md">
          <br></br>
          <h3>Analysis</h3>
            <div align='center'>
              <TotalViewers></TotalViewers>
            </div>
            <br></br>
            <br></br>
            <br></br>

            <div align='center'>
              <AvgViewers></AvgViewers>
            </div>
            
            {/*remove excess page breaks*/}
            <br></br>
            <br></br>
            <br></br>

        </Container>
      </div>
      <div>
        <Container maxWidth="sm">
          <div align='center'>
            <TotalTickets></TotalTickets>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </Container>
      </div>
    </div>
  );
}

export default App;
