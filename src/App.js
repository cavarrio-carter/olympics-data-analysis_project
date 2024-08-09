import './App.css';
import Container from '@mui/material/Container';
import BasicTable from './Table';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid'
import TotalViewers from './TotalViewers';
import AvgViewers from './AvgViewers';
import TotalTickets from './TotalTickets';
import { Animate, Bars, Chart, Dots, Handlers, Labels, Layer, Lines, Pies, Ticks, Transform } from 'rumble-charts';

/*use imports below for grid when deconstructing into indiv. components*/
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


{/*deconstruct and separate sections into individual components and import
to app.js*/}

function App() {
  return (

    <div className="App">
      <header className="App-header">
      </header>

      <div>
        <Container maxWidth="sm">
          <h1 align="left">A Quick Study of the Rio Olympic Games:
              A Comparison Between Stadium Attendance
              & Television Viewership in the United States
          </h1>
        </Container>
      </div>

      <Divider></Divider>

      <div>
        <Container maxWidth="sm">
          <br></br>
          <h3>Purpose</h3>
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

      <div>
        <Container maxWidth="sm">
          <h3>Methodology</h3>

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

      {/*table begin*/}
      <div>
        <Container maxWidth="md">
          <br></br>
          <h3>Data</h3>
          <BasicTable></BasicTable>

          <h6 align='left'> Source: <a href='https://www.statista.com/statistics/589506/olympics-daily-viewership/' target='_blank'>
            Statista</a>
          </h6>
          <br></br>
        </Container>
      </div>

    {/*table end -- indiv component and mobile view to expand
    viewable media type -- yikes... :/ the 5 stages: it appears you're
    at stage no. 2 -- good luck :)*/}

      <Divider variant='middle'></Divider>

      {/*bar chart begin*/}

      <div>
      <Container maxWidth="md">
          <br></br>
          <h3>Analysis</h3>
            <div align='center'>
            {/*move to separate component and import*/}
            {/*data in millions*/}
            <Chart
                  series={[
                    {
                      data: [
                        26.49,
                        19.48,
                        29.78,
                        28.86,
                        33.63,
                        26.45,
                        31.22,
                        24.02,
                        23.99,
                        26.75,
                        24.27,
                        24.13,
                        20.68,
                        21.70,
                        18.14,
                        16.85,
                      ]
                    }
                  ]}
                  viewBox="0 0 300 150"
                >
                  <Handlers
                    distance="x"
                    onMouseLeave={function noRefCheck(){}}
                    onMouseMove={function noRefCheck(){}}
                  >
                    <Layer
                      height="68%"
                      position="middle center"
                      width="100%"
                    >
                      <Bars
                        barAttributes={{
                          stroke: '#f5f5f6',
                          strokeLinejoin: 'round',
                          strokeWidth: 21,
                          transform: 'translate(0 16)'
                        }}
                        barWidth="0%"
                        colors={[
                          '#03a9f4'
                        ]}
                        groupPadding="1%"
                        innerPadding="0%"
                      />
                      <Lines
                        colors={[
                          '#007696'
                        ]}
                        interpolation="cardinal"
                        lineAttributes={{
                          strokeLinecap: 'round',
                          strokeWidth: 5
                        }}
                        lineWidth={0}
                      />
                      <Dots
                        className="dots"
                        colors={[
                          '#007696'
                        ]}
                        dotStyle={{
                          fillOpacity: 0,
                          transition: 'all 250ms'
                        }}
                      />
                      <Ticks
                        axis="x"
                        labelAttributes={{
                          y: '2.5em'
                        }}
                        labelStyle={{
                          dominantBaseline: 'text-after-edge',
                          fill: '#000',
                          fontFamily: 'sans-serif',
                          fontSize: 6,
                          fontWeight: 'normal',
                          textAnchor: 'start'
                        }}

                        ticks={[
                          /*comment out for now
                          {
                            label: 'Aug. 5',
                            x: 0
                          },

                          {
                            label: 'Aug. 6',
                            x: 1
                          },
                          {
                            label: 'Aug. 7',
                            x: 2
                          },
                          {
                            label: 'Aug. 8',
                            x: 3
                          },
                          {
                            label: 'Aug. 9',
                            x: 4
                          },
                          {
                            label: 'Aug. 10',
                            x: 5
                          },
                          {
                            label: 'Aug. 11',
                            x: 6
                          },
                          {
                            label: 'Aug. 12',
                            x: 7
                          },
                          {
                            label: 'Aug. 13',
                            x: 8
                          },
                          {
                            label: 'Aug. 14',
                            x: 9
                          },
                          {
                            label: 'Aug. 15',
                            x: 10
                          },
                          {
                            label: 'Aug. 16',
                            x: 11
                          },
                          {
                            label: 'Aug. 17',
                            x: 12
                          },
                          {
                            label: 'Aug. 18',
                            x: 13
                          },
                          {
                            label: 'Aug. 19',
                            x: 14
                          },

                          {
                            label: 'Aug. 20',
                            x: 15
                          }
                            */
                        ]}
                      />
                    </Layer>
                  </Handlers>
                </Chart>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <div align='center'>
              <TotalViewers></TotalViewers>
              <br></br>
              <br></br>
              <br></br>
            </div>

{/*bar chart end -- indiv. component, note: this chart is displaying
fine on mobile (okay as this is an example for live presentation
purposes (which would typically be presented from desktop or laptop;
but still create indiv. component for */}

            { /* create separate component and import*/}
            { /*pie chart config is as follows:
            dataset 1 corresponds to outermost circle
            and represents the highest viewer count.
            dataset 2 corresponds to next inner circle
            and represents the avg. viewer count.
            dataset 3 corresponds to inner most circle
            and represents the lowest daily viewer count*/}

        {/*pie chart begin -- indiv. component*/}
        {/*remove elevation prop after const indiv. component for chart*/}
            <div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Item elevation={0}>
              <Chart
                height={400}
                minY={0}
                series={[
                  {
                    data: [
                      0,
                      0,
                      33.63
                    ]
                  },
                  {
                    data: [
                      0,
                      27.5,
                      0
                    ]
                  },
                  {
                    data: [
                      16.85,
                      0,
                      0
                    ]
                  }
                ]}
                width={600}
              >
                <Transform
                  method={[
                    'transpose',
                    'stack'
                  ]}
                >
                  <Pies
                    combined
                    innerPadding="3%"
                    innerRadius="20%"
                  />
                  <Labels
      dotStyle={{
        dominantBaseline: 'text-after-edge',
        fontFamily: 'sans-serif',
        fontSize: '0.65em',
        textAnchor: 'middle'
      }}
      label={function noRefCheck(){}}
      labelAttributes={{
        y: -4
      }}
    />
                </Transform>
              </Chart>
              {/*remove breaks and adjust spacing in CSS*/}
              <br></br>
              <br></br>
              <br></br>
              </Item>
            </Grid>
          </Grid>
        </Box>
            </div>

            <div align='center'>
              <AvgViewers></AvgViewers>
            </div>
            <br></br>
            <br></br>
            <br></br>

        </Container>

      </div>
      <div>

      {/*why is this here? -- likely able to delete without
      error but leave in for now*/}
        <Container maxWidth="sm">
          <div align='center'>
          </div>


          { /* create separate component and import*/}
          {/*correct range later so that combined bar
          corresponds with actual data on ticket sold compared
          to total available tickets -- current config. is just for
          illustrative | demo purposes*/}

          {/*single horizontal bar begin*/}
          {/*remove elevation prop after const indiv. component*/}
          <div>
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item elevation={0}>
              <Chart
                height={100}
                series={[
                  {
                    data: [
                      608,
                    ]
                  },
                  {
                    data: [
                      60.5,
                    ]
                  }
                ]}

                width={300}
              >
                <Transform
                  method={[
                    'stack',
                    'rotate'
                  ]}
                >
                  <Bars
                    combined
                    innerPadding="2%"
                  />
                </Transform>
              </Chart>
              <br></br>
              <br></br>
              <br></br>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
          </div>

          <div>
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
