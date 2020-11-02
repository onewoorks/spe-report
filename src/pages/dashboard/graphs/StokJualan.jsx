import React from 'react';   
import { Line } from '@ant-design/charts' ;     

const StokJualan = (props) => {      
  const [ data , setData ] = React.useState ( [ ] ) ;   
  React.useEffect (( ) => {  
    asyncFetch ( ) ;
  } , [ ] ) ; 
  const asyncFetch = ( ) => {     
    fetch ( 'https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json' )
      .then ( ( response ) => response . json ( ) ) 
      .then ( ( json ) => setData ( json ) )  
      .catch ( ( error ) => {  
        console.log( 'Data failed FETCH' , error ) ;
      } ) ;
  } ;
  const config = { 
      height: props.height,
    data ,
    xField : 'year' , 
    yField : 'value' , 
    seriesField : 'category' , 
    yAxis : { label : { formatter : ( v ) => ` ${ v } ` . replace ( /\d{1,3}(?=(\d{3})+$)/g , ( s ) => ` ${ s } , ` ) } } ,           
    legend : { position : 'right-top' } ,   
    color : [ '#1979C9' , '#D62A0D' , '#FAA219' ] ,   
  } ;
  return <Line { ... config } /> ;   
} ;
export default StokJualan ;  