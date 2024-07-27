import { Animate, Bars, Dots, Handlers, Layer, Lines, Ticks,  } from 'rumble-charts';

<Chart
  series={[
    {
      data: [
        10,
        11,
        12,
        13,
        12,
        12,
        15,
        16,
        15,
        17,
        18,
        20
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
          transform: 'translate(0 12)'
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
          fontSize: 10,
          fontWeight: 'normal',
          textAnchor: 'middle'
        }}
        ticks={[
          {
            label: 'JUL',
            x: 0
          },
          {
            label: 'AUG',
            x: 1
          },
          {
            label: 'SEP',
            x: 2
          },
          {
            label: 'OCT',
            x: 3
          },
          {
            label: 'NOV',
            x: 4
          },
          {
            label: 'DEC',
            x: 5
          },
          {
            label: 'JAN',
            x: 6
          },
          {
            label: 'FEB',
            x: 7
          },
          {
            label: 'MAR',
            x: 8
          },
          {
            label: 'APR',
            x: 9
          },
          {
            label: 'MAY',
            x: 10
          },
          {
            label: 'JUN',
            x: 11
          }
        ]}
      />
    </Layer>
  </Handlers>
</Chart>